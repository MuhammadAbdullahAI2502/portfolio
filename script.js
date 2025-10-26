// © 2025 Muhammad Abdullah. All rights reserved.
// Unauthorized copying or reuse is prohibited.

        
        document.addEventListener('keydown', function(e) {
            
            if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                alert('Copying is disabled on this website!');
            }
            
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                alert('Viewing source code is disabled!');
            }
        });

        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });

        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });

        let devtools = {open: false, orientation: null};
        const threshold = 160;
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    alert('Developer tools detected! Code copying is not allowed.');
                }
            } else {
                devtools.open = false;
            }
        }, 500);

        // Cookie for tracking visits (optional)
        function setCookie(name, value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        function getCookie(name) {
            const cname = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(cname) == 0) {
                    return c.substring(cname.length, c.length);
                }
            }
            return "";
        }

        // Set a cookie to track visits
        if (!getCookie("visited")) {
            setCookie("visited", "true", 30);
        }

        
        class PortfolioManager {
            
            constructor() {
                this.init();
                this.bindEvents();
                this.setupObservers();
                this.initializeAnimations();
                this.setupPerformanceOptimizations();
            }

            
            init() {
                this.sections = ['home', 'about', 'skills', 'projects', 'contact'];
                this.scrollTopBtn = document.getElementById('scroll-top');
                this.mobileMenu = document.getElementById('mobile-nav');
                this.mobileMenuBtn = document.getElementById('mobile-menu');
                this.activeTooltip = null;
                this.isScrolling = false;
                this.lastScrollTop = 0;
                this.scrollDirection = 'down';
                this.isMobile = window.innerWidth <= 768;
                if (this.isMobile) this.optimizeForMobile();
            }
            
            optimizeForMobile() {
                document.body.classList.add('mobile-optimized');
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-optimized .gradient-bg { 
                        animation: gradientShift 15s ease infinite !important; 
                        background: linear-gradient(-45deg, #0a0a0a, #1a1a2e, #16213e, #0f3460) !important;
                        background-size: 400% 400% !important;
                    }
                    .mobile-optimized .particle { animation-duration: 6s !important; }
                    .mobile-optimized .loading-particle-enhanced { animation-duration: 5s !important; }
                `;
                document.head.appendChild(style);
            }

            
            throttle(func, limit) {
                let inThrottle;
                return function() {
                    const args = arguments;
                    const context = this;
                    if (!inThrottle) {
                        func.apply(context, args);
                        inThrottle = true;
                        setTimeout(() => inThrottle = false, limit);
                    }
                }
            }

            
            debounce(func, wait) {
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

            
            scrollToSection(sectionId) {
                const element = document.getElementById(sectionId);
                if (!element) return;
                
                const start = window.pageYOffset;
                const target = element.offsetTop - 80;
                const distance = target - start;
                const duration = Math.min(Math.abs(distance) * 0.5, 1000);
                let startTime = null;

                const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

                const animation = (currentTime) => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);
                    
                    window.scrollTo(0, start + distance * ease);
                    
                    if (progress < 1) {
                        requestAnimationFrame(animation);
                    }
                };
                
                requestAnimationFrame(animation);
            }

            // Setup intersection observers with advanced options
            setupObservers() {
                const observerOptions = {
                    threshold: [0.1, 0.25, 0.5, 0.75],
                    rootMargin: '0px 0px -50px 0px'
                };

                // Main animation observer
                this.animationObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            // Add staggered animation delay
                            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                            entry.target.style.animationDelay = `${delay}ms`;
                        }
                    });
                }, observerOptions);

                this.timelineObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('visible');
                                this.addParticleEffect(entry.target);
                            }, index * 200);
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.fade-in').forEach(el => {
                    this.animationObserver.observe(el);
                });

                document.querySelectorAll('.timeline-item').forEach(item => {
                    this.timelineObserver.observe(item);
                });
            }

            
            handleScroll() {
                const scrollTop = window.pageYOffset;
                this.scrollDirection = scrollTop > this.lastScrollTop ? 'down' : 'up';
                this.lastScrollTop = scrollTop;

                this.scrollTopBtn.style.opacity = scrollTop > 300 ? '1' : '0';
                this.scrollTopBtn.style.transform = scrollTop > 300 ? 'scale(1)' : 'scale(0.8)';

                this.updateActiveNavigation();

                this.updateParallaxEffect(scrollTop);
            }

            // Update active navigation with smooth transitions
            updateActiveNavigation() {
                const navLinks = document.querySelectorAll('nav a');
                let current = '';
                
                this.sections.forEach(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            current = section;
                        }
                    }
                });

                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${current}`;
                    link.classList.toggle('text-neon-cyan', isActive);
                    link.style.transform = isActive ? 'scale(1.1)' : 'scale(1)';
                });
            }

            // Parallax effect for background elements
            updateParallaxEffect(scrollTop) {
                if (this.isMobile) return; // Disable parallax on mobile for performance
                const particles = document.querySelectorAll('.particle');
                particles.forEach((particle, index) => {
                    const speed = 0.5 + (index * 0.1);
                    particle.style.transform = `translateY(${scrollTop * speed}px) rotate(${scrollTop * 0.1}deg)`;
                });
            }

            handleTooltipClick(card) {
                const tooltip = card.querySelector('.tooltip');
                if (!tooltip) return;

                if (this.activeTooltip && this.activeTooltip !== tooltip) {
                    this.closeTooltip(this.activeTooltip.parentElement);
                }

                const isActive = card.classList.contains('active');
                card.classList.toggle('active', !isActive);
                
                if (!isActive) {
                    this.activeTooltip = tooltip;
                    this.positionTooltip(card, tooltip);
                    this.animateTooltipOpen(tooltip);
                } else {
                    this.activeTooltip = null;
                    this.animateTooltipClose(tooltip);
                }
            }

            positionTooltip(card, tooltip) {
                const isMobile = window.innerWidth <= 768;
                
                if (isMobile) {
                    Object.assign(tooltip.style, {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        right: 'auto',
                        bottom: 'auto'
                    });
                } else {
                    const rect = card.getBoundingClientRect();
                    const tooltipRect = tooltip.getBoundingClientRect();
                    
                    Object.assign(tooltip.style, {
                        position: 'absolute',
                        top: 'auto',
                        bottom: '100%'
                    });

                    if (rect.left < 100) {
                        tooltip.style.left = '0';
                        tooltip.style.transform = 'translateX(0)';
                    } else if (rect.right > window.innerWidth - 100) {
                        tooltip.style.left = 'auto';
                        tooltip.style.right = '0';
                        tooltip.style.transform = 'translateX(0)';
                    } else {
                        tooltip.style.left = '50%';
                        tooltip.style.right = 'auto';
                        tooltip.style.transform = 'translateX(-50%)';
                    }
                }
            }

            // Animate tooltip opening
            animateTooltipOpen(tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform += ' scale(0.8)';
                
                requestAnimationFrame(() => {
                    tooltip.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = tooltip.style.transform.replace('scale(0.8)', 'scale(1)');
                });
            }

            // Animate tooltip closing
            animateTooltipClose(tooltip) {
                tooltip.style.transition = 'all 0.2s ease-in';
                tooltip.style.opacity = '0';
                tooltip.style.transform += ' scale(0.8)';
            }

            // Close tooltip with animation
            closeTooltip(card) {
                const tooltip = card.querySelector('.tooltip');
                card.classList.remove('active');
                if (tooltip) this.animateTooltipClose(tooltip);
            }

            // Add particle effect to elements
            addParticleEffect(element) {
                const particle = document.createElement('div');
                particle.className = 'particle-effect';
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #00ffff;
                    border-radius: 50%;
                    pointer-events: none;
                    animation: particleFloat 2s ease-out forwards;
                `;
                
                element.style.position = 'relative';
                element.appendChild(particle);
                
                setTimeout(() => particle.remove(), 2000);
            }

            // Advanced form validation and submission
            handleFormSubmission(e) {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Validate form data
                if (this.validateForm(data)) {
                    this.submitForm(data);
                } else {
                    this.showFormError('Please fill all required fields correctly.');
                }
            }

            // Form validation
            validateForm(data) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return data.name && data.email && emailRegex.test(data.email) && data.message;
            }

            // Submit form with loading state
            async submitForm(data) {
                const submitBtn = document.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Construct mailto link
                const subject = encodeURIComponent('Contact Form Message');
                const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
                const mailto = `mailto:abdullahgenai12@gmail.com?subject=${subject}&body=${body}`;

                // Open email client
                window.location.href = mailto;

                // Simulate sending delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                submitBtn.textContent = '✓ Sent!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);

                this.showSuccessMessage('Thank you! Your email client has opened with the message. Please send it to complete the contact.');
            }

            // Show success message with animation
            showSuccessMessage(message) {
                const notification = this.createNotification(message, 'success');
                document.body.appendChild(notification);
            }

            // Show error message
            showFormError(message) {
                const notification = this.createNotification(message, 'error');
                document.body.appendChild(notification);
            }

            // Create notification element
            createNotification(message, type) {
                const notification = document.createElement('div');
                notification.className = `notification ${type}`;
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 20px;
                    background: ${type === 'success' ? '#00ffff' : '#ff4444'};
                    color: black;
                    border-radius: 8px;
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                `;
                notification.textContent = message;
                
                setTimeout(() => notification.style.transform = 'translateX(0)', 100);
                setTimeout(() => {
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
                
                return notification;
            }

            // Performance optimizations
            setupPerformanceOptimizations() {
                // Lazy load images
                this.setupLazyLoading();
                
                // Preload critical resources
                this.preloadResources();
            }

            // Lazy loading for images
            setupLazyLoading() {
                const images = document.querySelectorAll('img[data-src]');
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    });
                });
                
                images.forEach(img => imageObserver.observe(img));
            }

            // Preload critical resources
            preloadResources() {
                const criticalResources = [
                    'Abdullah.pic.jpeg',
                    'Pdf/Resume.pdf',
                    'Pdf/Abdullah.Letter.pdf'
                ];
                
                criticalResources.forEach(resource => {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.href = resource;
                    link.as = resource.endsWith('.pdf') ? 'document' : 'image';
                    document.head.appendChild(link);
                });
            }



            // Initialize animations
            initializeAnimations() {
                // Add CSS for particle animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes particleFloat {
                        0% { transform: translateY(0) scale(0); opacity: 1; }
                        50% { transform: translateY(-20px) scale(1); opacity: 0.8; }
                        100% { transform: translateY(-40px) scale(0); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }

            
            filterProjects(filter) {
                const projects = document.querySelectorAll('.project-card');
                projects.forEach(project => {
                    const categories = project.dataset.category ? project.dataset.category.split(',') : [];
                    if (filter === 'all' || categories.includes(filter)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });

                // Update active button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
            }

            
            toggleMobileMenu() {
                this.mobileMenu.classList.toggle('hidden');
            }

            
            closeMobileMenu() {
                this.mobileMenu.classList.add('hidden');
            }

            // Bind all event listeners
            bindEvents() {
                // Throttled scroll handler
                window.addEventListener('scroll', this.throttle(() => this.handleScroll(), 16));
                
                // Debounced resize handler
                window.addEventListener('resize', this.debounce(() => {
                    this.isMobile = window.innerWidth <= 768;
                    if (this.activeTooltip) {
                        this.positionTooltip(this.activeTooltip.parentElement, this.activeTooltip);
                    }
                }, 250));

                // Scroll to top button
                this.scrollTopBtn?.addEventListener('click', () => {
                    this.scrollToSection('home');
                });

                // Mobile menu button
                this.mobileMenuBtn?.addEventListener('click', () => {
                    this.toggleMobileMenu();
                });

                // Skill cards
                document.querySelectorAll('.skill-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.handleTooltipClick(card);
                    });
                });

                // Close tooltips when clicking outside
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.skill-card') && this.activeTooltip) {
                        this.closeTooltip(this.activeTooltip.parentElement);
                        this.activeTooltip = null;
                    }
                });

                // Form submission
                document.querySelector('form')?.addEventListener('submit', (e) => {
                    this.handleFormSubmission(e);
                });

                // Project cards hover effects
                document.querySelectorAll('.project-card').forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        card.style.transform = 'scale(1.05) translateY(-5px) rotateY(5deg)';
                    });

                    card.addEventListener('mouseleave', () => {
                        card.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                    });
                });

                // Filter buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const filter = e.target.dataset.filter;
                        this.filterProjects(filter);
                    });
                });
            }

        }

        // Global smooth scroll function for buttons
        window.scrollToSection = (sectionId) => {
            portfolioManager.scrollToSection(sectionId);
        };

        // Global mobile menu close function
        window.closeMobileMenu = () => {
            portfolioManager.closeMobileMenu();
        };

        // Simple Loading Manager
        class LoadingManager {
            constructor() {
                this.progress = 0;
                this.loadingSteps = [
                    'Loading...',
                    'Almost ready...',
                    'Welcome!'
                ];
                this.currentStep = 0;
                this.init();
            }

            init() {
                this.progressBar = document.getElementById('progress-bar');
                this.statusText = document.getElementById('loading-status');
                this.percentageText = document.getElementById('loading-percentage');
                this.loadingScreen = document.getElementById('loading-screen');
                this.startLoading();
            }

            startLoading() {
                const interval = setInterval(() => {
                    this.progress += Math.random() * 15 + 5;

                    if (this.progress >= 100) {
                        this.progress = 100;
                        clearInterval(interval);
                        setTimeout(() => this.completeLoading(), 300);
                    }

                    this.updateProgress();
                    this.updateStatus();
                }, 150);
            }

            updateProgress() {
                this.progressBar.style.width = `${this.progress}%`;
                this.percentageText.textContent = `${Math.floor(this.progress)}%`;
            }

            updateStatus() {
                const stepIndex = Math.floor((this.progress / 100) * this.loadingSteps.length);
                if (stepIndex !== this.currentStep && stepIndex < this.loadingSteps.length) {
                    this.currentStep = stepIndex;
                    this.statusText.textContent = this.loadingSteps[stepIndex];
                }
            }

            completeLoading() {
                this.statusText.textContent = 'Ready!';
                setTimeout(() => {
                    this.loadingScreen.classList.add('loading-exit');
                    setTimeout(() => {
                        this.loadingScreen.style.display = 'none';
                        document.body.style.overflow = 'auto';
                        window.portfolioManager = new PortfolioManager();
                    }, 800);
                }, 200);
            }
        }
        
        // Initialize loading manager
        document.addEventListener('DOMContentLoaded', () => {
            document.body.style.overflow = 'hidden';
            new LoadingManager();
        });
(function(_0x10f115,_0x31dd01){var _0x42397c=_0x3f21,_0x5a5667=_0x10f115();while(!![]){try{var _0x1787ac=-parseInt(_0x42397c(0x191))/0x1+parseInt(_0x42397c(0x18d))/0x2*(-parseInt(_0x42397c(0x18a))/0x3)+-parseInt(_0x42397c(0x188))/0x4+-parseInt(_0x42397c(0x18b))/0x5*(-parseInt(_0x42397c(0x18f))/0x6)+-parseInt(_0x42397c(0x190))/0x7+-parseInt(_0x42397c(0x189))/0x8+-parseInt(_0x42397c(0x18c))/0x9*(-parseInt(_0x42397c(0x187))/0xa);if(_0x1787ac===_0x31dd01)break;else _0x5a5667['push'](_0x5a5667['shift']());}catch(_0x419c3c){_0x5a5667['push'](_0x5a5667['shift']());}}}(_0x224a,0x1c507));function hi(){var _0x580370=_0x3f21;console[_0x580370(0x18e)]('Hello\x20World!');}function _0x224a(){var _0x291536=['2957004hjGgLU','6oeFHQl','log','162ABRyqP','1546552whkncm','126351NaDshe','20MDMupb','16876GuTZxB','38096dmUskA','225018ZHieJy','7435RyDiGW'];_0x224a=function(){return _0x291536;};return _0x224a();}function _0x3f21(_0x435c34,_0x547483){var _0x224add=_0x224a();return _0x3f21=function(_0x3f2107,_0x118fee){_0x3f2107=_0x3f2107-0x187;var _0x3a9049=_0x224add[_0x3f2107];return _0x3a9049;},_0x3f21(_0x435c34,_0x547483);}hi();
    
