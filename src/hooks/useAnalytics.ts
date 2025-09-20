import { useEffect, useCallback, useRef } from 'react';
import analytics from '../services/analytics';

interface UseAnalyticsOptions {
  trackPageView?: boolean;
  trackScrollDepth?: boolean;
  trackUserEngagement?: boolean;
  sectionName?: string;
  sectionCategory?: string;
}

export const useAnalytics = (options: UseAnalyticsOptions = {}) => {
  const {
    trackPageView = true,
    trackScrollDepth = true,
    trackUserEngagement = true,
    sectionName,
    sectionCategory
  } = options;

  const sectionRef = useRef<string | null>(null);
  const isTracking = useRef(false);

  // Track section entry/exit
  useEffect(() => {
    if (sectionName && !isTracking.current) {
      analytics.trackSectionEnter(sectionName, sectionCategory);
      sectionRef.current = sectionName;
      isTracking.current = true;
    }

    return () => {
      if (sectionRef.current) {
        analytics.trackSectionExit(sectionRef.current);
        sectionRef.current = null;
        isTracking.current = false;
      }
    };
  }, [sectionName, sectionCategory]);

  // Track page view
  useEffect(() => {
    if (trackPageView) {
      analytics.trackPageView();
    }
  }, [trackPageView]);

  // Analytics event handlers
  const trackEvent = useCallback((
    category: string,
    action: string,
    label?: string,
    value?: number,
    customParameters?: any
  ) => {
    analytics.trackEvent(category, action, label, value, customParameters);
  }, []);

  const trackButtonClick = useCallback((
    buttonName: string,
    buttonType: string = 'primary'
  ) => {
    analytics.trackButtonClick(buttonName, sectionName || 'unknown', buttonType);
  }, [sectionName]);

  const trackProjectView = useCallback((
    projectName: string,
    projectCategory: string,
    projectUrl: string
  ) => {
    analytics.trackProjectView(projectName, projectCategory, projectUrl);
  }, []);

  const trackProjectClick = useCallback((
    projectName: string,
    action: 'visit' | 'source_code',
    projectUrl: string
  ) => {
    analytics.trackProjectClick(projectName, action, projectUrl);
  }, []);

  const trackSocialClick = useCallback((platform: string, action: string = 'click') => {
    analytics.trackSocialClick(platform, action);
  }, []);

  const trackFormStart = useCallback((formType: string) => {
    analytics.trackFormStart(formType);
  }, []);

  const trackFormSubmit = useCallback((formType: string, success: boolean = true) => {
    analytics.trackFormSubmit(formType, success);
  }, []);

  const trackDownload = useCallback((
    downloadType: string,
    fileName: string,
    fileUrl: string
  ) => {
    analytics.trackDownload(downloadType, fileName, fileUrl);
  }, []);

  return {
    trackEvent,
    trackButtonClick,
    trackProjectView,
    trackProjectClick,
    trackSocialClick,
    trackFormStart,
    trackFormSubmit,
    trackDownload,
    // Convenience methods
    trackResumeDownload: () => analytics.trackResumeDownload(),
    trackContactFormSubmit: (success: boolean) => analytics.trackContactFormSubmit(success),
    trackHireMeClick: () => analytics.trackHireMeClick(),
    trackViewResumeClick: () => analytics.trackViewResumeClick(),
    trackBuyMeCoffeeClick: () => analytics.trackBuyMeCoffeeClick()
  };
};

export default useAnalytics;
