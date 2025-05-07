// projects-loader.js

// Project configuration
const projectSlugs = [
    'mgh-kpi-dashboard',
    'churn-prediction',
    'schedule-optimization',
    'time-series-forecast-portfolio'
];

// Categories mapping for filtering
const projectCategories = {
    'mgh-kpi-dashboard': ['dashboard'],
    'churn-prediction': ['ml'],
    'schedule-optimization': ['optimization'],
    'time-series-forecast-portfolio': ['forecast']
};

// DOM elements
const projectsGrid = document.getElementById('projects-grid');
const projectDetail = document.getElementById('project-detail');
const projectDetailContent = document.getElementById('project-detail-content');
const backButton = document.getElementById('back-button');
const projectsSection = document.getElementById('projects-section');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to parse frontmatter from markdown
function parseFrontmatter(markdown) {
    const match = markdown.match(/^---\s*([\s\S]*?)\s*---/);
    if (!match) return { content: markdown };
    
    const frontmatter = match[1];
    const content = markdown.slice(match[0].length);
    
    // Parse the frontmatter
    const data = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim();
            // Handle arrays in YAML format (like tags)
            if (value.startsWith('[') && value.endsWith(']')) {
                data[key.trim()] = value.slice(1, -1).split(',').map(item => 
                    item.trim().replace(/"/g, '').replace(/'/g, '')
                );
            } else {
                data[key.trim()] = value.replace(/"/g, '').replace(/'/g, '');
            }
        }
    });
    
    return { frontmatter: data, content };
}

// Function to fix image paths for local development
function fixImagePath(path) {
    // Remove leading slash for local testing
    if (path.startsWith('/')) {
        return path.substring(1);
    }
    return path;
}

// Create a project card based on markdown data
function createProjectCard(projectData, slug) {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.dataset.categories = projectCategories[slug].join(' ');
    
    // Extract first paragraph for short description
    let shortDescription = '';
    const firstParaMatch = projectData.content.match(/##\s*Project Goals\s*\n\n([^#]+)/);
    if (firstParaMatch) {
        shortDescription = firstParaMatch[1].trim();
    } else {
        // Fallback to first paragraph if no Project Goals section
        const firstPara = projectData.content.split('\n\n')[0];
        shortDescription = firstPara.replace(/^#.*\n/, '').trim();
    }
    
    // Limit short description length
    if (shortDescription.length > 150) {
        shortDescription = shortDescription.substring(0, 147) + '...';
    }
    
    // Get the image from the markdown if available
    let imageUrl = 'https://placehold.co/600x400';
    if (projectData.frontmatter.featured_image && !projectData.frontmatter.featured_image.startsWith('#')) {
        imageUrl = fixImagePath(projectData.frontmatter.featured_image);
    }
    
    // Get tags from frontmatter
    const tags = projectData.frontmatter.tags ? 
        (typeof projectData.frontmatter.tags === 'string' ? 
            projectData.frontmatter.tags.split(',').map(t => t.trim()) : 
            projectData.frontmatter.tags.slice(0, 3)) : 
        [];
    
    div.innerHTML = `
        <div class="card">
            <img src="${imageUrl}" alt="${projectData.frontmatter.title}" class="project-image">
            <div class="card-content">
                <h3 class="project-title">${projectData.frontmatter.title}</h3>
                <p class="project-description">${shortDescription}</p>
                <div class="project-tags">
                    ${tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="project-link view-project" data-slug="${slug}">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    
    return div;
}

// Function to convert Markdown to HTML (simple version)
function markdownToHtml(markdown) {
    // Remove frontmatter
    let content = markdown.replace(/!\[(.*?)\]\((\/img\/.*?)\)/g, function(match, alt, path) {
        return `<img src="${fixImagePath(path)}" alt="${alt}" style="width: 100%; height: auto; border-radius: 8px; max-width: 800px; display: block; margin: 20px auto;">`;
    });
    
    // Convert headings
    content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>')
                     .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                     .replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Convert bold and italic
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                     .replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert lists
    content = content.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>')
                     .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
                     .replace(/<\/ul>\s*<ul>/g, '');
    
    // Convert links
    content = content.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
    // Convert images
    content = content.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="width: 100%; height: auto; border-radius: 8px;">');
    
    // Convert paragraphs
    content = '<p>' + content.replace(/\n\s*\n/g, '</p><p>') + '</p>';
    
    // Fix any double-wrapped paragraphs around elements
    content = content.replace(/<p><(h[1-3]|ul|img)>/g, '<$1>');
    content = content.replace(/<\/(h[1-3]|ul|img)><\/p>/g, '</$1>');
    
    return content;
}

// Load project MD files
function loadProjectsMd() {
    let projectsLoaded = 0;
    projectsGrid.innerHTML = '<div class="loading">Loading projects...</div>';
    
    // Storage for parsed project data
    window.projectsData = {};
    
    for (const slug of projectSlugs) {
        fetch(`projects/${slug}.md`)
            .then(response => response.text())
            .then(markdown => {
                // Parse markdown and frontmatter
                const parsed = parseFrontmatter(markdown);
                
                // Store the parsed data
                window.projectsData[slug] = {
                    title: parsed.frontmatter.title,
                    description: parsed.content.split('\n\n').slice(0, 2).join('\n\n'),
                    content: parsed.content,
                    frontmatter: parsed.frontmatter,
                    technologies: parsed.frontmatter.tags ? parsed.frontmatter.tags.slice(0, 5).join(', ') : '',
                    category: parsed.frontmatter.tags ? parsed.frontmatter.tags.slice(0, 2).join(', ') : '',
                    tags: parsed.frontmatter.tags || []
                };
                
                // Create and append the project card
                const projectCard = createProjectCard(window.projectsData[slug], slug);
                projectsGrid.appendChild(projectCard);
                
                // Check if all projects are loaded
                projectsLoaded++;
                if (projectsLoaded === projectSlugs.length) {
                    // Remove loading message if it's still there
                    const loading = projectsGrid.querySelector('.loading');
                    if (loading) loading.remove();
                    
                    // Add event listeners
                    document.querySelectorAll('.view-project').forEach(link => {
                        link.addEventListener('click', handleProjectClick);
                    });
                }
            })
            .catch(error => {
                console.error(`Error loading project ${slug}:`, error);
                projectsLoaded++;
                if (projectsLoaded === projectSlugs.length) {
                    // Make sure we still set up event handlers even if some projects fail to load
                    document.querySelectorAll('.view-project').forEach(link => {
                        link.addEventListener('click', handleProjectClick);
                    });
                }
            });
    }
}

// Handle click on project card
function handleProjectClick(e) {
    e.preventDefault();
    
    const slug = this.getAttribute('data-slug');
    const project = window.projectsData[slug];
    
    if (!project) return;
    
    // Hide projects section
    projectsSection.style.display = 'none';
    
    // Get image from the markdown if available
    let imageUrl = 'https://placehold.co/800x600';
    if (parsed.frontmatter.featured_image && !parsed.frontmatter.featured_image.startsWith('#')) {
        imageUrl = fixImagePath(parsed.frontmatter.featured_image);
    }
    
    // Populate project detail
    projectDetailContent.innerHTML = `
        <div class="project-detail-header">
            <img src="${imageUrl}" alt="${project.title}" class="project-detail-image">
            <div class="project-detail-info">
                <h2>${project.title}</h2>
                <p class="project-detail-description">${markdownToHtml(project.description)}</p>
                
                <div class="project-detail-meta">
                    <div class="meta-item">
                        <span class="meta-title">Technologies</span>
                        <span class="meta-value">${project.technologies}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-title">Date</span>
                        <span class="meta-value">${project.frontmatter.date || 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="project-detail-content">
            ${markdownToHtml(project.content)}
        </div>
    `;
    
    // Show project detail
    projectDetail.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Handle filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filter = this.getAttribute('data-filter');
        
        // Filter projects
        const projectCards = document.querySelectorAll('.project-card');
        
        if (filter === 'all') {
            projectCards.forEach(card => {
                card.style.display = 'block';
            });
        } else {
            projectCards.forEach(card => {
                if (card.dataset.categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
});

// Back button
backButton.addEventListener('click', function() {
    // Hide project detail
    projectDetail.classList.add('hidden');
    
    // Show projects section
    projectsSection.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Load projects when page loads
document.addEventListener('DOMContentLoaded', loadProjectsMd);