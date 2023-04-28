import React, { useEffect, useState, useContext } from 'react'
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Svg,
  Rect,
  Path,
  Image,
} from '@react-pdf/renderer'
import person from './person.png';

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: 40,
    },
    section: {
      marginBottom: 20,
    },
    title: {
      color: '#1a1a1a',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      color: '#1a1a1a',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    content: {
      color: '#333333',
      fontSize: 12,
      lineHeight: 1.5,
    },
    sectionHeader: {
      backgroundColor: '#0E312F',
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 'bold',
      padding: 5,
      textTransform: 'uppercase',
    },
    image: {
		width: '10%',
		borderColor : 'black',
    borderRadius: 50
	},
  });
  


const CVTemplateTwo = () => (
    <Document style={styles.doc}>
       <Page style={styles.page}>
        <View style={styles.section}>
        <Image style={styles.image} src={person} />
          <Text style={styles.title}>John Doe</Text>
          <Text style={styles.content}>Software Engineer</Text>
          <Text style={styles.content}>123 Main Street, Anytown USA</Text>
          <Text style={styles.content}>john.doe@example.com | (123) 456-7890</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Work Experience</Text>

          <View style={styles.content}>
            <Text style={styles.subtitle}>Software Engineer</Text>
            <Text style={styles.content}>ABC Company</Text>
            <Text style={styles.content}>Jan 2018 - Present</Text>
            <Text style={styles.content}>Developed web applications using React and Node.js</Text>
            <Text style={styles.content}>Managed a team of 5 developers</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.subtitle}>Web Developer</Text>
            <Text style={styles.content}>XYZ Company</Text>
            <Text style={styles.content}>Jan 2016 - Dec 2017</Text>
            <Text style={styles.content}>Designed and developed responsive websites using HTML, CSS, and JavaScript</Text>
            <Text style={styles.content}>Created and managed WordPress websites for clients</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Education</Text>

          <View style={styles.content}>
            <Text style={styles.subtitle}>Bachelor's Degree in Computer Science</Text>
            <Text style={styles.content}>ABC University</Text>
            <Text style={styles.content}>2012 - 2016</Text>
            <Text style={styles.content}>GPA: 3.9/4.0</Text>
          </View>
        </View>
      </Page>

  </Document>
  )

  export default CVTemplateTwo;