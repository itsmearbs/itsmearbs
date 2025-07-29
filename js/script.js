// PCVF Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initLanguageToggle();
    initHeaderScroll();
    initNewsFiltering();
    initAnimations();
    initFormHandling();
    
    console.log('PCVF Website initialized successfully');
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Toggle hamburger animation
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transform = navMenu.classList.contains('active') 
                    ? `rotate(${index === 0 ? '45deg' : index === 1 ? '0deg' : '-45deg'}) translate(${index === 1 ? '100px' : '0px'}, ${index === 0 ? '6px' : index === 2 ? '-6px' : '0px'})`
                    : 'none';
                span.style.opacity = index === 1 && navMenu.classList.contains('active') ? '0' : '1';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Reset hamburger animation
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans.forEach((span) => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Reset hamburger animation
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans.forEach((span) => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(href);
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(activeHref) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

// Language Toggle Functionality
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedLang = this.getAttribute('data-lang');
            
            // Here you would implement language switching logic
            console.log(`Language switched to: ${selectedLang}`);
            
            // Store language preference
            localStorage.setItem('pcvf-language', selectedLang);
            
            // You could load different content or translate existing content
            // For now, we'll just show a notification
            showNotification(`Language switched to ${selectedLang === 'en' ? 'English' : 'Filipino'}`);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('pcvf-language');
    if (savedLang) {
        const targetBtn = document.querySelector(`[data-lang="${savedLang}"]`);
        if (targetBtn) {
            langButtons.forEach(b => b.classList.remove('active'));
            targetBtn.classList.add('active');
        }
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
    });
}

// Update Active Navigation on Scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight + 50;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

// News Filtering Functionality
function initNewsFiltering() {
    const newsCards = document.querySelectorAll('.news-card');
    
    // Create filter buttons if they don't exist
    createNewsFilters();
    
    // Add filter functionality
    const filterButtons = document.querySelectorAll('.news-filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter news cards
            newsCards.forEach(card => {
                const category = card.querySelector('.news-category')?.textContent.toLowerCase();
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.classList.add('fade-in-up');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Create News Filter Buttons
function createNewsFilters() {
    const newsSection = document.querySelector('.news-section .container');
    const existingFilters = document.querySelector('.news-filters');
    
    if (newsSection && !existingFilters) {
        const categories = ['all', 'featured', 'community', 'diplomacy', 'training', 'publication', 'policy'];
        const filtersHtml = `
            <div class="news-filters" style="text-align: center; margin-bottom: 2rem;">
                ${categories.map(cat => 
                    `<button class="news-filter-btn ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
                        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>`
                ).join('')}
            </div>
        `;
        
        const sectionHeader = newsSection.querySelector('.section-header');
        sectionHeader.insertAdjacentHTML('afterend', filtersHtml);
        
        // Add CSS for filter buttons
        const style = document.createElement('style');
        style.textContent = `
            .news-filters {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 0.5rem;
                margin-bottom: 2rem;
            }
            
            .news-filter-btn {
                padding: 0.5rem 1rem;
                border: 2px solid #ddd;
                background: white;
                color: #666;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
            }
            
            .news-filter-btn:hover,
            .news-filter-btn.active {
                background: #0066cc;
                color: white;
                border-color: #0066cc;
            }
            
            @media (max-width: 768px) {
                .news-filters {
                    flex-direction: column;
                    align-items: center;
                }
                
                .news-filter-btn {
                    min-width: 120px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Animation on Scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll(`
        .quick-access-tile,
        .news-card,
        .publication-card,
        .transparency-item,
        .highlight-item
    `);
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Form Handling
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Remove error class on input
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    });
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = form.querySelector('[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    showNotification('Form submitted successfully!', 'success');
                    form.reset();
                }, 2000);
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            min-width: 300px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-success { border-left: 4px solid #28a745; }
        .notification-error { border-left: 4px solid #dc3545; }
        .notification-info { border-left: 4px solid #0066cc; }
        
        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #999;
            padding: 0;
            width: 24px;
            height: 24px;
        }
        
        .notification-close:hover {
            color: #333;
        }
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = notificationStyles;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Close notification functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search Functionality (if search input exists)
function initSearch() {
    const searchInput = document.querySelector('#search-input');
    
    if (searchInput) {
        const debouncedSearch = debounce(function(query) {
            performSearch(query);
        }, 300);
        
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 2) {
                debouncedSearch(query);
            }
        });
    }
}

function performSearch(query) {
    // Implement search functionality
    console.log(`Searching for: ${query}`);
    // This would typically send a request to a search API
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    
    const backToTopStyles = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: #0066cc;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .back-to-top:hover {
            background: #004499;
            transform: translateY(-3px);
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = backToTopStyles;
    document.head.appendChild(style);
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
});

// Logo Placeholder Functionality
function createLogoPlaceholder() {
    const logo = document.getElementById('pcvf-logo');
    if (logo) {
        // Create a placeholder logo with PCVF text
        logo.style.background = 'linear-gradient(135deg, #0066cc, #004499)';
        logo.style.color = 'white';
        logo.style.display = 'flex';
        logo.style.alignItems = 'center';
        logo.style.justifyContent = 'center';
        logo.style.fontSize = '12px';
        logo.style.fontWeight = 'bold';
        logo.alt = 'PCVF Logo';
        
        // Handle image load error
        logo.addEventListener('error', function() {
            this.style.background = 'linear-gradient(135deg, #0066cc, #004499)';
            this.innerHTML = 'PCVF';
            this.style.color = 'white';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.fontSize = '12px';
            this.style.fontWeight = 'bold';
        });
    }
}

// Initialize logo placeholder
document.addEventListener('DOMContentLoaded', function() {
    createLogoPlaceholder();
});