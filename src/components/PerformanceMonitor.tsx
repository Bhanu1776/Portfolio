import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  LCP: number;
  FID: number;
  CLS: number;
  FCP: number;
  TTFB: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackMetric = (metric: any) => {
      // Send to Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    // Measure Core Web Vitals
    getCLS(trackMetric);
    getFID(trackMetric);
    getFCP(trackMetric);
    getLCP(trackMetric);
    getTTFB(trackMetric);

    // Track page load time
    const trackPageLoadTime = () => {
      if (typeof window !== 'undefined' && (window as any).pageLoadTime) {
        const loadTime = Date.now() - (window as any).pageLoadTime;
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(loadTime),
            non_interaction: true,
          });
        }
      }
    };

    // Track page load time after a short delay
    const timeoutId = setTimeout(trackPageLoadTime, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
