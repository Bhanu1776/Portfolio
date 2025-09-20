// Performance optimization utilities for SEO
export const optimizeImage = (src: string, width?: number, height?: number, quality: number = 80): string => {
  // If it's already an ImageKit URL, add optimization parameters
  if (src.includes('ik.imagekit.io')) {
    const url = new URL(src);
    const params = new URLSearchParams(url.search);
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('f', 'auto'); // Auto format
    params.set('c', 'at_max'); // Crop mode
    
    url.search = params.toString();
    return url.toString();
  }
  
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const lazyLoadImage = (src: string, alt: string, className?: string): string => {
  return `<img 
    src="${src}" 
    alt="${alt}" 
    ${className ? `class="${className}"` : ''}
    loading="lazy"
    decoding="async"
  />`;
};

export const generateImageAltText = (imageName: string, context: string): string => {
  const altTexts: { [key: string]: string } = {
    'hero': 'Bhanu Sunka - Full Stack Developer and Startup MVP Architect',
    'profile': 'Professional headshot of Bhanu Sunka, Full Stack Developer',
    'casecanvas': 'Case Canvas - Custom phone case creation application interface',
    'communisafe': 'Communisafe - Community resilience network application dashboard',
    'nextjs-starter': 'NextJS Starter Template - Modern web development boilerplate',
    'jellyfish-retro': 'JellyFish Retro - VS Code theme with 80s aesthetic design',
    'youtube-extended': 'YouTube Extended - Alternative YouTube interface with modern UI',
    'gatherable': 'Gatherable - Venue booking system desktop application interface'
  };
  
  return altTexts[imageName.toLowerCase()] || `${context} - ${imageName} project showcase`;
};

export const measureCoreWebVitals = () => {
  // This function will be called by web-vitals library
  // Implementation will be in the main App component
  return {
    LCP: 0, // Largest Contentful Paint
    FID: 0, // First Input Delay
    CLS: 0, // Cumulative Layout Shift
    FCP: 0, // First Contentful Paint
    TTFB: 0 // Time to First Byte
  };
};

export const generateCriticalCSS = (): string => {
  // Critical CSS for above-the-fold content
  return `
    /* Critical CSS for portfolio */
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
    .hero-gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .dark\\:bg-\\[\\#0b1121\\] { background-color: #0b1121; }
    .text-5xl { font-size: 3rem; line-height: 1; }
    .text-6xl { font-size: 3.75rem; line-height: 1; }
    .text-7xl { font-size: 4.5rem; line-height: 1; }
    .font-headings { font-family: 'Fira Code', monospace; }
    .font-semibold { font-weight: 600; }
    .leading-tight { line-height: 1.25; }
    .tracking-wide { letter-spacing: 0.025em; }
    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .grid { display: grid; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .min-h-screen { min-height: 100vh; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .pt-\\[8rem\\] { padding-top: 8rem; }
    .max-w-\\[115rem\\] { max-width: 115rem; }
    .relative { position: relative; }
    .flex-col { flex-direction: column; }
  `;
};
