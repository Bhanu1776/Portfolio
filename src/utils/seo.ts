// SEO utility functions for the portfolio website
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: any;
}

export const defaultSEO: SEOData = {
  title: "Bhanu Sunka | Software Engineer & Full Stack Developer | React, Next.js, Node.js Expert",
  description: "Hi 👋, I'm Bhanu Sunka, an experienced Full Stack Developer proficient in ReactJS, Next.js for cutting-edge front-end solutions, and Node.js for robust back-end architecture. Passionate about test-driven development, continuous learning, and delivering high-performance, data-driven web applications.",
  keywords: [
    "Bhanu Sunka",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Startup MVP",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "Startup Solutions"
  ],
  canonicalUrl: "https://www.itsbhanu.com",
  ogTitle: "Bhanu Sunka | Software Engineer & Full Stack Developer | React, Next.js, Node.js Expert",
  ogDescription: "Hi 👋, I'm Bhanu Sunka, an experienced Full Stack Developer proficient in ReactJS, Next.js for cutting-edge front-end solutions, and Node.js for robust back-end architecture. Passionate about test-driven development, continuous learning, and delivering high-performance, data-driven web applications.",
  ogImage: "https://ik.imagekit.io/bhanu1776/Portfolio/pp.jpg?updatedAt=1712083772144",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterSite: "@SunkaBhanu",
  twitterCreator: "@SunkaBhanu",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bhanu Sunka",
    "jobTitle": "Software Engineer",
    "description": "Experienced Full Stack Developer specializing in ReactJS, Next.js, and Node.js for startup MVPs",
    "url": "https://www.itsbhanu.com",
    "image": "https://ik.imagekit.io/bhanu1776/Portfolio/pp.jpg?updatedAt=1712083772144",
    "sameAs": [
      "https://github.com/Bhanu1776",
      "https://www.linkedin.com/in/bhanu-sunka/",
      "https://twitter.com/SunkaBhanu"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Full Stack Development",
      "Startup MVPs",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Engineering Education"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    }
  }
};

export const generatePageSEO = (pageData: Partial<SEOData>): SEOData => {
  return {
    ...defaultSEO,
    ...pageData,
    title: pageData.title ? `${pageData.title} | Bhanu Sunka` : defaultSEO.title,
    ogTitle: pageData.ogTitle || pageData.title ? `${pageData.title} | Bhanu Sunka` : defaultSEO.ogTitle,
  };
};

export const generateStructuredData = (type: 'Person' | 'Organization' | 'Portfolio' | 'Project', data: any) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
  };

  switch (type) {
    case 'Person':
      return {
        ...baseSchema,
        ...data,
      };
    
    case 'Organization':
      return {
        ...baseSchema,
        ...data,
      };
    
    case 'Portfolio':
      return {
        ...baseSchema,
        ...data,
      };
    
    case 'Project':
      return {
        ...baseSchema,
        ...data,
      };
    
    default:
      return baseSchema;
  }
};

export const generateProjectStructuredData = (project: {
  name: string;
  description: string;
  url?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
}) => {
  return generateStructuredData('Project', {
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    creator: {
      "@type": "Person",
      "name": "Bhanu Sunka"
    },
    programmingLanguage: project.technologies,
    codeRepository: project.githubUrl,
    license: "MIT",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString()
  });
};

export const generatePortfolioStructuredData = () => {
  return generateStructuredData('Portfolio', {
    name: "Bhanu Sunka Portfolio",
    description: "A collection of full-stack development projects and startup MVPs",
    url: "https://www.itsbhanu.com",
    creator: {
      "@type": "Person",
      "name": "Bhanu Sunka"
    },
    about: "Portfolio showcasing full-stack development projects, startup MVPs, and technical expertise",
    keywords: defaultSEO.keywords.join(", ")
  });
};
