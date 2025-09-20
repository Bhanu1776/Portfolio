export const GA4_CONFIG = {
  MEASUREMENT_ID: 'G-RQ3FJ2BLCG',
  
  // Custom Dimensions
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'custom_parameter_1', // user_type
    CONTENT_CATEGORY: 'custom_parameter_2', // content_category
    DEVICE_TYPE: 'custom_parameter_3', // device_type
    ENGAGEMENT_LEVEL: 'custom_parameter_4', // engagement_level
    PROJECT_CATEGORY: 'custom_parameter_5', // project_category
    SECTION_NAME: 'custom_parameter_6', // section_name
    INTERACTION_TYPE: 'custom_parameter_7', // interaction_type
    FORM_TYPE: 'custom_parameter_8', // form_type
    SOCIAL_PLATFORM: 'custom_parameter_9', // social_platform
    DOWNLOAD_TYPE: 'custom_parameter_10', // download_type
  },

  // Custom Metrics
  CUSTOM_METRICS: {
    SCROLL_DEPTH: 'custom_metric_1', // scroll_depth
    TIME_ON_SECTION: 'custom_metric_2', // time_on_section
    INTERACTION_COUNT: 'custom_metric_3', // interaction_count
    PROJECT_VIEWS: 'custom_metric_4', // project_views
    FORM_ATTEMPTS: 'custom_metric_5', // form_attempts
  },

  // Event Categories
  EVENT_CATEGORIES: {
    NAVIGATION: 'Navigation',
    ENGAGEMENT: 'Engagement',
    PROJECT: 'Project',
    SOCIAL: 'Social',
    FORM: 'Form',
    DOWNLOAD: 'Download',
    PERFORMANCE: 'Performance',
    CONTENT: 'Content',
    USER_JOURNEY: 'User Journey',
    ECOMMERCE: 'Ecommerce'
  },

  // Event Actions
  EVENT_ACTIONS: {
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
    ABANDON: 'abandon',
    LOAD: 'load',
    ERROR: 'error'
  },

  // Conversion Goals (set up in GA4)
  CONVERSION_GOALS: {
    RESUME_DOWNLOAD: 'resume_download',
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    PROJECT_VISIT: 'project_visit',
    HIRE_ME_CLICK: 'hire_me_click',
    SOCIAL_CLICK: 'social_click',
    SCROLL_90_PERCENT: 'scroll_90_percent',
    TIME_ON_SITE_60_SECONDS: 'time_on_site_60_seconds'
  },

  // E-commerce Configuration
  ECOMMERCE: {
    CURRENCY: 'USD',
    ITEMS: {
      PROJECT_VIEW: {
        item_id: 'project_view',
        item_name: 'Project View',
        item_category: 'Portfolio',
        price: 1
      },
      RESUME_DOWNLOAD: {
        item_id: 'resume_download',
        item_name: 'Resume Download',
        item_category: 'Document',
        price: 1
      }
    }
  },

  // User Properties
  USER_PROPERTIES: {
    USER_TYPE: 'visitor',
    DEVICE_CATEGORY: 'desktop', // Will be updated based on actual device
    BROWSER: 'chrome', // Will be updated based on actual browser
    OS: 'windows' // Will be updated based on actual OS
  },

  // Content Groups
  CONTENT_GROUPS: {
    HOME: 'Home',
    ABOUT: 'About',
    PROJECTS: 'Projects',
    WORK: 'Work Experience',
    BLOG: 'Blog',
    CONTACT: 'Contact'
  },

  // Scroll Depth Thresholds
  SCROLL_THRESHOLDS: [25, 50, 75, 90, 100],

  // Engagement Time Thresholds (in milliseconds)
  ENGAGEMENT_THRESHOLDS: {
    LOW: 30000, // 30 seconds
    MEDIUM: 120000, // 2 minutes
    HIGH: 300000 // 5 minutes
  },

  // Performance Monitoring
  PERFORMANCE: {
    CORE_WEB_VITALS: true,
    PAGE_LOAD_TIME: true,
    FIRST_PAINT: true,
    FIRST_CONTENTFUL_PAINT: true,
    LARGEST_CONTENTFUL_PAINT: true,
    CUMULATIVE_LAYOUT_SHIFT: true,
    FIRST_INPUT_DELAY: true
  }
};

// Helper function to get device category
export const getDeviceCategory = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Helper function to get browser info
export const getBrowserInfo = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes('Chrome')) return 'chrome';
  if (userAgent.includes('Firefox')) return 'firefox';
  if (userAgent.includes('Safari')) return 'safari';
  if (userAgent.includes('Edge')) return 'edge';
  return 'other';
};

// Helper function to get OS info
export const getOSInfo = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes('Windows')) return 'windows';
  if (userAgent.includes('Mac')) return 'mac';
  if (userAgent.includes('Linux')) return 'linux';
  if (userAgent.includes('Android')) return 'android';
  if (userAgent.includes('iOS')) return 'ios';
  return 'other';
};

// Helper function to get content category from path
export const getContentCategory = (path: string): string => {
  if (path.includes('/about')) return 'about';
  if (path.includes('/projects')) return 'projects';
  if (path.includes('/work')) return 'work';
  if (path.includes('/blog')) return 'blog';
  if (path.includes('/contact')) return 'contact';
  return 'home';
};

// Helper function to get project category
export const getProjectCategory = (projectName: string): string => {
  const categories: { [key: string]: string } = {
    'case canvas': 'fullstack',
    'communisafe': 'fullstack',
    'nextjs-starter': 'template',
    'jellyfish-x-retro': 'theme',
    'youtube extended': 'frontend',
    'gatherable': 'desktop',
    'freelansters': 'fullstack',
    'hotel management': 'backend'
  };
  return categories[projectName.toLowerCase()] || 'other';
};

// Helper function to get engagement level based on interactions
export const getEngagementLevel = (interactionCount: number): string => {
  if (interactionCount > 10) return 'high';
  if (interactionCount > 5) return 'medium';
  return 'low';
};

// Helper function to get connection type
export const getConnectionType = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const connection = (navigator as any).connection || 
                   (navigator as any).mozConnection || 
                   (navigator as any).webkitConnection;
  
  return connection ? connection.effectiveType || 'unknown' : 'unknown';
};

export default GA4_CONFIG;
