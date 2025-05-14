import {StyleSheet, View} from "@react-pdf/renderer";
import React from "react";
import Text from "../elements/Text";
import Hr from "./Hr";
import ProjectCard, {ProjectCardProps} from "./ProjectCard";
import Title from "../elements/Title";

const titleItems = [
  'WordPress Developer',
  'Contractor',
  'Freelancer',
];

// "JavaScript, NodeJS, PostgreSQL, ReactJS, Redux, Docker, AWS, Jenkins CI/CD, GitHub, Jira".split(', ').map(i => `'${i}'`).join(', ')

export interface RightSectionProps {
  projects: ProjectCardProps[];
  workExperienceTitle: string;
}

const RightSection: React.FC<RightSectionProps> = ({ projects, workExperienceTitle }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.name}>Mihai Zaporojan</Text>
        <View style={styles.titleContainer}>
          {titleItems.map((titleItem, index) => {
            return (
              <View key={titleItem} style={styles.titleItemContainer}>
                {!!index && <Text style={styles.titleSeparator}>•</Text>}
                <Text style={styles.titleItem}>{titleItem}</Text>
              </View>
            )
          })}
        </View>
      </View>

      <Hr />

      <Title style={styles.aboutMeTitle}>About Me</Title>
      <Text style={styles.aboutMeDescription}>I am WordPress developer / contractor / freelancer with <Text style={{fontWeight: 'black'}}>8+ years of experience</Text>, only interested in remote work.</Text>
      <Text style={styles.aboutMeDescription}><Text style={{fontWeight: 'black'}}>Hard skills:</Text> Speed Optimization (95%), SSL, Error Handling and Debugging ( Server Errors, CMS Conflicts, PHP core), SEO Optimization, API, Troubleshooting, WordPress Migration, Bug Fixing, Malware Remove, Component Development, WordPress Development, WordPress Themes, WordPress Plugins.</Text>
      <Text style={styles.aboutMeDescription}><Text style={{fontWeight: 'black'}}>Soft skills:</Text> Clear written and verbal communication, giving and receiving feedback, cross-functional collaboration, adaptability in communication, empathy and patience, team-oriented mindset, remote team collaboration, Proactive mindset, self-management, detail-oriented thinking, continuous learning, problem solving, Agile workflow participation async communication, documentation habits, ownership of deliverables, Slack, Jira, Trello, Zoom, Google Meet, Confluence, GitHub, Bitbucket, Figma.</Text>

      <Title style={styles.workExperience}>{workExperienceTitle}</Title>

      {projects.map((project, index) => (
        <ProjectCard key={project.projectName} isLastItem={index === projects.length - 1} {...project} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  header: {
    alignItems: 'center'
  },
  name: {
    fontSize: 32,
    textTransform: 'uppercase',
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center'
  },
  titleItemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleItem: {
    fontSize: 12,
  },
  titleSeparator: {
    paddingHorizontal: 2
  },

  aboutMeTitle: {
    marginBottom: 5
  },
  aboutMeDescription: {
    opacity: 0.7,
    marginTop: 2,
    marginBottom: 3,
  },

  workExperience: {
    marginTop: 15,
  },

})

export default RightSection;
