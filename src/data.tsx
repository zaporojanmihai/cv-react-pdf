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
    title: 'Software Developer II',
    company: 'Grubhub',
    clientProblem: 'Grubhub is a leading online food delivery platform, connecting customers with local restaurants through an easy-to-use app and website. They provide services such as order management, delivery logistics, and payment processing to enhance the food delivery experience.',
    achievements: [
      <><Text isBold>Streamlined company onboarding for catering services</Text> by designing and developing custom React and WordPress components, integrating a Lead Generation API.</>,
      <><Text isBold>Enhanced stakeholder collaboration</Text> by gathering requirements and delivering tailored solutions using React, WordPress, PHP, HTML5, CSS3, and JavaScript.</>,
      <><Text isBold>Empowered the marketing team</Text> by integrating user-friendly Gutenberg and Elementor components to streamline content management and customization.</>,
      <><Text isBold>Achieved pixel-perfect UI implementation</Text> by translating Adobe XD and Figma designs into high-quality, responsive components.</>,
      <><Text isBold>Optimized project efficiency</Text> by implementing Agile methodologies to ensure timely delivery and maintain development best practices.</>,
      <><Text isBold>Improved website performance and SEO</Text> by managing version control with Git and SourceTree and developing fully responsive, high-performing WordPress websites.</>,
    ],
    skills: ['JavaScript', 'React', 'PHP', 'WordPress Development', 'WordPress Design', 'MySQL', 'GatsbyJS', 'GraphQL', 'TypeScript', 'SASS', 'Jenkins', 'GIT', 'Jira', 'Contentful', 'REST APIs', 'Unit Testing', 'Online Lead Generation'],
  },
  dmatrix: {
    projectName: 'HealthInsurance Leads',
    from: 'Jan 2020',
    to: 'Jan 2022',
    title: 'Frontend Developer',
    company: 'DMatrix',
    clientProblem: 'Dmatrix Soft offers full-stack digital solutions, specializing in web and mobile app development, custom software, and digital transformation.',
    achievements: [
      <><Text isBold>Designed and developed custom React and WordPress components</Text> to support the company's Health Insurance Lead Generation API.</>,
      <><Text isBold>Worked closely with stakeholders</Text> to gather requirements and deliver tailored solutions using React, WordPress, PHP, HTML5, CSS3, and JavaScript.</>,
      <><Text isBold>Ensured pixel-perfect implementation</Text> of visually striking designs from Adobe XD and Figma.</>,
      <><Text isBold>Applied Agile methodologies</Text> to maintain efficiency and meet project deadlines.</>,
      <><Text isBold>Offered solution of ease to marketing department</Text> with the help of Oxygen.</>,
      <><Text isBold>Delved into Accessibility Driven development</Text> (ADA/AODA).</>,
    ],
    skills: ['WordPress Development', 'PHP', 'JavaScript', 'MySQL', 'CSS3', 'HTML Emails', 'Online Lead Generation', 'Jira', 'GIT', 'WordPress Design'],
  },
  akson: {
    projectName: 'Web Agency',
    from: 'Apr 2018',
    to: 'Jan 2020',
    title: 'Wordpress Developer',
    company: 'Akson',
    clientProblem: 'Akson is a web agency specializing in WordPress development, offering custom website design, theme and plugin development, and optimization services. They focus on creating responsive, SEO-friendly websites that align with clients\' business goals.',
    achievements: [
      <><Text isBold>Collaborated with clients</Text> to understand their requirements and implemented custom solutions using PHP, HTML, CSS, and JavaScript.</>,
      <><Text isBold>Developed custom WordPress theme and plugins</Text>.</>,
      <><Text isBold>Implemented a responsive design</Text> that ensured the web application was accessible on all devices with high page speed optimisation results.</>,
      <><Text isBold>Created custom backends</Text> with Advanced Custom Field for ease of client use in WordPress.</>,
      <><Text isBold>Achieved close to maximum scores</Text> on page speed and core web vitals tests like Lighthouse and GT-Matrix.</>,
    ],
    skills: ['WordPress', 'PHP', 'CSS3', 'HTML 5', 'PhpMyAdmin', 'Search Engine Optimization (SEO)', 'Landing Page Optimization', 'WordPress Development', 'WordPress Design'],
  },
}
