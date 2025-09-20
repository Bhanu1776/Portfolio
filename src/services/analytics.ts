import ReactGA from 'react-ga4';

// Google Analytics Configuration
const GA_TRACKING_ID = 'G-RQ3FJ2BLCG';

// Custom Dimensions
const CUSTOM_DIMENSIONS = {
  USER_TYPE: 'user_type',
  CONTENT_CATEGORY: 'content_category',
  DEVICE_TYPE: 'device_type',
  ENGAGEMENT_LEVEL: 'engagement_level',
  PROJECT_CATEGORY: 'project_category',
  SECTION_NAME: 'section_name',
  INTERACTION_TYPE: 'interaction_type',
  FORM_TYPE: 'form_type',
  SOCIAL_PLATFORM: 'social_platform',
  DOWNLOAD_TYPE: 'download_type'
};

// Custom Metrics
const CUSTOM_METRICS = {
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_SECTION: 'time_on_section',
  INTERACTION_COUNT: 'interaction_count',
  PROJECT_VIEWS: 'project_views',
  FORM_ATTEMPTS: 'form_attempts'
};

// Event Categories
const EVENT_CATEGORIES = {
  NAVIGATION: 'Navigation',
  ENGAGEMENT: 'Engagement',
  PROJECT: 'Project',
  SOCIAL: 'Social',
  FORM: 'Form',
  DOWNLOAD: 'Download',
  PERFORMANCE: 'Performance',
  CONTENT: 'Content',
  USER_JOURNEY: 'User Journey'
};

// Event Actions
const EVENT_ACTIONS = {
  CLICK: 'click',
  VIEW: 'view',
  SCROLL: 'scroll',
  HOVER: 'hover',
  SUBMIT: 'submit',
  DOWNLOAD: 'download',
  SHARE: 'share',
  NAVIGATE: 'navigate',
  INTERACT: 'interact',
  COMPLETE: 'complete',
  ABANDON: 'abandon'
};

class AnalyticsService {
  private isInitialized = false;
  private scrollDepthTracked = false;
  private sectionStartTimes: { [key: string]: number } = {};
  private interactionCount = 0;

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;
    
    try {
      ReactGA.initialize(GA_TRACKING_ID, {
        gtagOptions: {
          send_page_view: false, // We'll handle this manually
          custom_map: {
            [CUSTOM_DIMENSIONS.USER_TYPE]: 'user_type',
            [CUSTOM_DIMENSIONS.CONTENT_CATEGORY]: 'content_category',
            [CUSTOM_DIMENSIONS.DEVICE_TYPE]: 'device_type',
            [CUSTOM_DIMENSIONS.ENGAGEMENT_LEVEL]: 'engagement_level',
            [CUSTOM_DIMENSIONS.PROJECT_CATEGORY]: 'project_category',
            [CUSTOM_DIMENSIONS.SECTION_NAME]: 'section_name',
            [CUSTOM_DIMENSIONS.INTERACTION_TYPE]: 'interaction_type',
            [CUSTOM_DIMENSIONS.FORM_TYPE]: 'form_type',
            [CUSTOM_DIMENSIONS.SOCIAL_PLATFORM]: 'social_platform',
            [CUSTOM_DIMENSIONS.DOWNLOAD_TYPE]: 'download_type'
          }
        }
      });
      
      this.isInitialized = true;
      this.trackPageView();
      this.setupScrollTracking();
      this.setupPerformanceTracking();
      this.setupUserEngagementTracking();
      
      // Track that analytics is automatically enabled for portfolio
      this.trackEvent('Analytics', 'auto_enabled', 'portfolio_tracking');
      
      console.log('Analytics initialized successfully (auto-enabled for portfolio)');
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  // Page View Tracking
  trackPageView(pagePath?: string, pageTitle?: string) {
    if (!this.isInitialized) return;
    
    const path = pagePath || window.location.pathname;
    const title = pageTitle || document.title;
    
    ReactGA.send({ 
      hitType: "pageview", 
      page: path, 
      title: title 
    });
    
    // Track page view with custom dimensions
    this.trackEvent(EVENT_CATEGORIES.NAVIGATION, EVENT_ACTIONS.VIEW, 'page_view', undefined, {
      page_path: path,
      page_title: title,
      [CUSTOM_DIMENSIONS.CONTENT_CATEGORY]: this.getContentCategory(path),
      [CUSTOM_DIMENSIONS.DEVICE_TYPE]: this.getDeviceType(),
      [CUSTOM_DIMENSIONS.USER_TYPE]: this.getUserType()
    });
  }

  // Enhanced Event Tracking
  trackEvent(category: string, action: string, label?: string, value?: number, customParameters?: any) {
    if (!this.isInitialized) return;
    
    this.interactionCount++;
    
    const eventData: any = {
      category,
      action,
      label,
      value,
      [CUSTOM_DIMENSIONS.INTERACTION_TYPE]: action,
      [CUSTOM_DIMENSIONS.ENGAGEMENT_LEVEL]: this.getEngagementLevel(),
      [CUSTOM_METRICS.INTERACTION_COUNT]: this.interactionCount
    };

    // Merge custom parameters
    if (customParameters) {
      Object.assign(eventData, customParameters);
    }

    ReactGA.event(eventData);
  }

  // Section Tracking
  trackSectionEnter(sectionName: string, sectionCategory?: string) {
    this.sectionStartTimes[sectionName] = Date.now();
    
    this.trackEvent(EVENT_CATEGORIES.USER_JOURNEY, EVENT_ACTIONS.VIEW, `section_${sectionName}`, undefined, {
      [CUSTOM_DIMENSIONS.SECTION_NAME]: sectionName,
      [CUSTOM_DIMENSIONS.CONTENT_CATEGORY]: sectionCategory || 'general',
      section_timestamp: new Date().toISOString()
    });
  }

  trackSectionExit(sectionName: string) {
    const startTime = this.sectionStartTimes[sectionName];
    if (startTime) {
      const timeSpent = Date.now() - startTime;
      
      this.trackEvent(EVENT_CATEGORIES.USER_JOURNEY, EVENT_ACTIONS.INTERACT, `section_${sectionName}_exit`, undefined, {
        [CUSTOM_DIMENSIONS.SECTION_NAME]: sectionName,
        [CUSTOM_METRICS.TIME_ON_SECTION]: timeSpent,
        time_spent_seconds: Math.round(timeSpent / 1000)
      });
      
      delete this.sectionStartTimes[sectionName];
    }
  }

  // Project Tracking (E-commerce style)
  trackProjectView(projectName: string, projectCategory: string, projectUrl: string) {
    this.trackEvent(EVENT_CATEGORIES.PROJECT, EVENT_ACTIONS.VIEW, projectName, undefined, {
      [CUSTOM_DIMENSIONS.PROJECT_CATEGORY]: projectCategory,
      project_name: projectName,
      project_url: projectUrl,
      [CUSTOM_METRICS.PROJECT_VIEWS]: 1
    });

    // Track as virtual transaction using gtag
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_item', {
        currency: 'USD',
        value: 1,
        items: [{
          item_id: projectName.toLowerCase().replace(/\s+/g, '_'),
          item_name: projectName,
          item_category: projectCategory,
          quantity: 1,
          price: 1
        }]
      });
    }
  }

  trackProjectClick(projectName: string, action: 'visit' | 'source_code', projectUrl: string) {
    this.trackEvent(EVENT_CATEGORIES.PROJECT, action, projectName, undefined, {
      [CUSTOM_DIMENSIONS.PROJECT_CATEGORY]: this.getProjectCategory(projectName),
      project_name: projectName,
      project_url: projectUrl,
      click_type: action
    });
  }

  // Social Media Tracking
  trackSocialClick(platform: string, action: string = 'click') {
    this.trackEvent(EVENT_CATEGORIES.SOCIAL, action, platform, undefined, {
      [CUSTOM_DIMENSIONS.SOCIAL_PLATFORM]: platform,
      social_action: action
    });
  }

  // Form Tracking
  trackFormStart(formType: string) {
    this.trackEvent(EVENT_CATEGORIES.FORM, EVENT_ACTIONS.INTERACT, `form_${formType}_start`, undefined, {
      [CUSTOM_DIMENSIONS.FORM_TYPE]: formType,
      [CUSTOM_METRICS.FORM_ATTEMPTS]: 1
    });
  }

  trackFormSubmit(formType: string, success: boolean = true) {
    this.trackEvent(EVENT_CATEGORIES.FORM, EVENT_ACTIONS.SUBMIT, `form_${formType}_${success ? 'success' : 'error'}`, undefined, {
      [CUSTOM_DIMENSIONS.FORM_TYPE]: formType,
      form_success: success
    });
  }

  // Download Tracking
  trackDownload(downloadType: string, fileName: string, fileUrl: string) {
    this.trackEvent(EVENT_CATEGORIES.DOWNLOAD, EVENT_ACTIONS.DOWNLOAD, fileName, undefined, {
      [CUSTOM_DIMENSIONS.DOWNLOAD_TYPE]: downloadType,
      file_name: fileName,
      file_url: fileUrl
    });
  }

  // Button Click Tracking
  trackButtonClick(buttonName: string, section: string, buttonType: string = 'primary') {
    this.trackEvent(EVENT_CATEGORIES.ENGAGEMENT, EVENT_ACTIONS.CLICK, buttonName, undefined, {
      [CUSTOM_DIMENSIONS.SECTION_NAME]: section,
      button_name: buttonName,
      button_type: buttonType
    });
  }

  // Scroll Depth Tracking
  private setupScrollTracking() {
    if (typeof window === 'undefined') return;
    
    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      maxScroll = Math.max(maxScroll, scrollPercent);
      
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          this.trackEvent(EVENT_CATEGORIES.ENGAGEMENT, EVENT_ACTIONS.SCROLL, `scroll_${threshold}%`, undefined, {
            [CUSTOM_METRICS.SCROLL_DEPTH]: threshold,
            scroll_percentage: threshold
          });
        }
      });
    };

    // Throttled scroll tracking
    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScrollDepth, 100);
    });
  }

  // Performance Tracking
  private setupPerformanceTracking() {
    if (typeof window === 'undefined') return;
    
    // Track page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          this.trackEvent(EVENT_CATEGORIES.PERFORMANCE, 'page_load', 'performance_metrics', undefined, {
            page_load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
            dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            first_paint: this.getFirstPaint(),
            connection_type: this.getConnectionType()
          });
        }
      }, 0);
    });
  }

  // User Engagement Tracking
  private setupUserEngagementTracking() {
    if (typeof window === 'undefined') return;
    
    let engagementStartTime = Date.now();
    let isEngaged = true;
    
    // Track user engagement based on activity
    const trackEngagement = () => {
      if (isEngaged) {
        const engagementTime = Date.now() - engagementStartTime;
        this.trackEvent(EVENT_CATEGORIES.ENGAGEMENT, 'user_engagement', 'active_session', undefined, {
          engagement_duration: engagementTime,
          [CUSTOM_DIMENSIONS.ENGAGEMENT_LEVEL]: this.getEngagementLevel()
        });
      }
      engagementStartTime = Date.now();
      isEngaged = true;
    };

    // Track various user interactions
    ['click', 'scroll', 'keypress', 'mousemove'].forEach(event => {
      document.addEventListener(event, trackEngagement, { passive: true });
    });

    // Track when user becomes inactive
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      isEngaged = true;
      inactivityTimer = setTimeout(() => {
        isEngaged = false;
        this.trackEvent(EVENT_CATEGORIES.ENGAGEMENT, 'user_inactive', 'session_pause');
      }, 30000); // 30 seconds of inactivity
    };

    document.addEventListener('click', resetInactivityTimer);
    document.addEventListener('keypress', resetInactivityTimer);
    document.addEventListener('scroll', resetInactivityTimer);
  }

  // Helper Methods
  private getContentCategory(path: string): string {
    if (path.includes('/about')) return 'about';
    if (path.includes('/projects')) return 'projects';
    if (path.includes('/work')) return 'work';
    if (path.includes('/blog')) return 'blog';
    if (path.includes('/contact')) return 'contact';
    return 'home';
  }

  private getProjectCategory(projectName: string): string {
    const categories: { [key: string]: string } = {
      'case canvas': 'fullstack',
      'communisafe': 'fullstack',
      'nextjs-starter': 'template',
      'jellyfish-x-retro': 'theme',
      'youtube extended': 'frontend',
      'gatherable': 'desktop'
    };
    return categories[projectName.toLowerCase()] || 'other';
  }

  private getDeviceType(): string {
    if (typeof window === 'undefined') return 'unknown';
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getUserType(): string {
    // This could be enhanced with actual user identification
    return 'visitor';
  }

  private getEngagementLevel(): string {
    if (this.interactionCount > 10) return 'high';
    if (this.interactionCount > 5) return 'medium';
    return 'low';
  }

  private getFirstPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? Math.round(firstPaint.startTime) : 0;
  }

  private getConnectionType(): string {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    return connection ? connection.effectiveType || 'unknown' : 'unknown';
  }

  // Public API Methods
  trackResumeDownload() {
    this.trackDownload('resume', 'bhanu_sunka_resume.pdf', 'https://resume.itsbhanu.com/');
  }

  trackContactFormSubmit(success: boolean) {
    this.trackFormSubmit('contact', success);
  }

  trackHireMeClick() {
    this.trackButtonClick('hire_me', 'hero', 'primary');
  }

  trackViewResumeClick() {
    this.trackButtonClick('view_resume', 'hero', 'secondary');
  }

  trackProjectVisit(projectName: string, projectUrl: string) {
    this.trackProjectClick(projectName, 'visit', projectUrl);
  }

  trackSourceCodeClick(projectName: string, projectUrl: string) {
    this.trackProjectClick(projectName, 'source_code', projectUrl);
  }

  trackSocialMediaClick(platform: string) {
    this.trackSocialClick(platform);
  }

  trackBuyMeCoffeeClick() {
    this.trackSocialClick('buymeacoffee', 'donation');
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();
export default analytics;

// Export constants for use in components
export { CUSTOM_DIMENSIONS, CUSTOM_METRICS, EVENT_CATEGORIES, EVENT_ACTIONS };
