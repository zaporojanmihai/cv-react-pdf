import React from "react";
import Text from "./components/CvDocument/elements/Text";

export type EnabledProjects = (keyof typeof projectsByName)[];

export const enabledProjectsAll: EnabledProjects = [
  'grubhub',
  'dmatrix',
  'akson',
];

export const enabledProjectsOnePage: EnabledProjects = [
  'grubhub',
  'dmatrix',
  'akson'
]


export const projectsByName = {
  grubhub: {
    projectName: 'FoodDelivery Leads',
    from: 'Ian 2022',
    to: 'Mar 2025',
    title: 'WordPress Developer | Software Engineer',
    company: 'Grubhub',
    clientProblem: 'Grubhub is a leading online food delivery platform, connecting customers with local restaurants through an easy-to-use app and website. They provide services such as order management, delivery logistics, and payment processing to enhance the food delivery experience.',
    achievements: [
      <><Text>Designed and developed custom WordPress components (plugins and themes) to streamline company onboarding for catering services via a Lead Generation API.</Text></>,
      <><Text>Implemented a component-based development approach with Advanced Custom Fields (ACF), put in place a modular site architecture that maximized flexibility and scalability.</Text></>,
      <><Text>Worked closely with stakeholders to gather requirements and deliver tailored solutions using WordPress, PHP, HTML5, CSS3, and JavaScript.</Text></>,
      <><Text>Ensured pixel-perfect implementation of visually striking designs from Adobe XD and Figma.</Text></>,
      <><Text>Applied Agile methodologies to maintain efficiency and meet project deadlines.</Text></>,
      <><Text>Managed version control with Git and SourceTree, building responsive, SEO-friendly WordPress websites optimized for performance and user experience.</Text></>,
      <><Text>Enhanced the marketing team's workflow by integrating user-friendly solutions with Gutenberg and Elementor components.</Text></>,
    ],
    skills: ['WordPress Development','JavaScript', 'React', 'PHP', 'MySQL', 'GatsbyJS', 'GraphQL', 'TypeScript', 'SASS', 'Jenkins', 'GIT', 'Jira', 'Contentful', 'REST APIs', 'Unit Testing', 'Online Lead Generation'],
  },
  dmatrix: {
    projectName: 'HealthInsurance Leads',
    from: 'Jan 2020',
    to: 'Jan 2022',
    title: 'WordPress Developer',
    company: 'DMatrix',
    clientProblem: 'Dmatrix Soft offers full-stack digital solutions, specializing in web and mobile app development, custom software, and digital transformation.',
    achievements: [
      <><Text>Designed and developed custom WordPress components to support the company's Health Insurance Lead Generation API.</Text></>,
      <><Text>Used Advanced Custom Fields (ACF) for flexible content management.</Text></>,
      <><Text>Worked closely with stakeholders to gather requirements and deliver tailored solutions using WordPress, PHP, HTML5, CSS3, and JavaScript.</Text></>,
      <><Text>Ensured pixel-perfect implementation of visually striking designs from Adobe XD and Figma.</Text></>,
      <><Text>Applied Agile methodologies to maintain efficiency and meet project deadlines.</Text></>,
      <><Text>Offered solution of ease to marketing department with the help of Oxygen.</Text></>,
      <><Text>Delved into Accessibility Driven development (ADA/AODA).</Text></>,
    ],
    skills: ['WordPress Development', 'PHP', 'JavaScript', 'MySQL', 'CSS3', 'HTML Emails', 'Online Lead Generation', 'Jira', 'GIT', 'WordPress Design'],
  },
  akson: {
    projectName: 'Web Agency',
    from: 'Apr 2018',
    to: 'Jan 2020',
    title: 'WordPress Developer',
    company: 'Akson',
    clientProblem: 'Akson is a web agency specializing in WordPress development, offering custom website design, theme and plugin development, and optimization services. They focus on creating responsive, SEO-friendly websites that align with clients\' business goals.',
    achievements: [
      <><Text>Collaborated with clients to understand their requirements and implemented custom solutions using PHP, HTML, CSS, and JavaScript. </Text></>,
      <><Text>Developed custom WordPress theme and plugins.</Text></>,
      <><Text>Implemented a responsive design that ensured the web application was accessible on all devices with high page speed optimisation results.</Text></>,
      <><Text>Created custom backends with Advanced Custom Field for ease of client use in WordPress.</Text></>,
      <><Text>Achieved close to maximum scores on page speed and core web vitals tests like lighthouse and gt-matrix.</Text></>,
    ],
    skills: ['WordPress Development', 'PHP', 'CSS3', 'HTML 5', 'PhpMyAdmin', 'Search Engine Optimization (SEO)', 'Landing Page Optimization', 'WordPress Development', 'WordPress Design'],
  },
}
