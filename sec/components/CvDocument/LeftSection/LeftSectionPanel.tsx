import React from "react";
import {StyleSheet, View} from '@react-pdf/renderer'
import Text from "../elements/Text";

interface LeftSectionPanelProps {
  title: string
}

const LeftSectionPanel: React.FC<LeftSectionPanelProps> = ({title, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text contrast style={styles.headingText}>{title}</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '8px 10px'
  },
  heading: {
    paddingBottom: 10,
    borderBottom: '2px solid #8e8e8f'
  },
  headingText: {
    textTransform: 'uppercase',
    fontSize: 14,
  },
  content: {
    paddingTop: 10,
  }
})


export default LeftSectionPanel;
