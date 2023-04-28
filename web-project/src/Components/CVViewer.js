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
  Path,
  Image,
} from '@react-pdf/renderer'
import person from './person.png';
import { Height } from '@material-ui/icons';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    color: '#2d2d2d',
   
  },
  sectionO: {
    flexDirection : 'row',
    backgroundColor: '#027e74',
    height : 105,
  },

  sectionT: {
    
    backgroundColor: '#F5F5F5',
    height : 735,
    width : 160,
    borderRightColor : 'black'
    
    
  },

  sectionU: {
    
    
    height : 735,
    width : 460,
   flexDirection : 'column'
    
    
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft : 50,
    marginTop : 2,
    
  },
  titleT: {
    color: '#2d2d2d',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft : 10,
    marginTop : 40,
    textDecoration :'underline'
    
  },
  titleU: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft : 40,
    marginTop : 40,
   
    
  },
  subtitle: {
    color: '#2d2d2d',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft : 100,
    marginLeft : 10,
    marginTop : 2,
  },
  content: {
    color: 'white',
    fontSize: 10,
    lineHeight: 1.5,
    marginLeft : 50,
  },
  contentT: {
    color: '#2d2d2d',
    fontSize: 10,
    lineHeight: 1.5,
    marginLeft : 10,
  },

  contentU: {
    color: '#2d2d2d',
    fontSize: 10,
    lineHeight: 1.5,
    marginLeft : 40,
    marginBottom: 100,
    marginRight: 10
  },

  sectionHeader: {
    backgroundColor: '#2d2d2d',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textTransform: 'uppercase',
  },
  sectionParent : {
    flexDirection : 'row',
  },
  divider: {
    borderBottomColor: '#2d2d2d',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  
  },
  skill: {
    backgroundColor: '#2d2d2d',
    color: '#ffffff',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 12,
  },
  image: {
		width: '18%',
		borderColor : 'black',
    borderRadius: 50,
    marginLeft : 10,
    marginTop : 2,
    marginBottom : 5,
	},
  container: {
    flexDirection: 'row',
    marginBottom: 10
  },
  bulletPoint: {
    width: 10,
    fontSize: 20,
    marginLeft: 40,
    marginRight : 10,
   
  },
  text: {
    fontSize: 14,
    textDecoration : 'underline'
  },
});


const CVViewer = () => (
    <Document style={styles.doc}>
   <Page  style={styles.page}>
   <View style={styles.sectionO}>
   <Image style={styles.image} src={person} />
     <View>
          <Text style={styles.title}>John Doe</Text>
          <Text style={styles.content}>Software Engineer</Text>
          <Text style={styles.content}>123 Main Street, Anytown USA</Text>
          <Text style={styles.content}>john.doe@example.com | (123) 456-7890</Text>
     </View>
   </View>

<View style={styles.sectionParent}>
          <View style={styles.sectionT}>
          <Text style={styles.titleT}>Contact</Text>
          <Text style={styles.contentT}>0309 4283955</Text>
          <Text style={styles.contentT}>nisanadeem90@gmail.com</Text>
          <Text style={styles.contentT}> (123) 456-7890</Text>

          <Text style={styles.titleT}>Education</Text>
          <Text style={styles.contentT}>O Levels -- Beaconhouse</Text>
          <Text style={styles.contentT}>A Levels -- Beaconhouse</Text>
          <Text style={styles.contentT}>BS SE -- FAST NUCES</Text>

          <Text style={styles.titleT}>Languages</Text>
          <Text style={styles.contentT}>Python</Text>
          <Text style={styles.contentT}>JavaScript</Text>
          <Text style={styles.contentT}>Html/Css</Text>


          </View>

          <View style={styles.sectionU}>
          <Text style={styles.titleU}>Experience</Text>
          <View style={styles.container}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <Text style={styles.contentU}>Hello this is nisa bla bla bla bla bla bla bla bla bla bpofgjkighgb kdghkdhgkuhgiudhguhltgjdhgkftngf</Text>
      
      <View style={styles.container}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.text}>Item 2</Text>
      </View>
      <Text style={styles.contentU}>Hello this is nisa bla bla bla bla bla bla bla bla bla bpofgjkighgb kdghkdhgkuhgiudhguhltgjdhgkftngf</Text>
      

      <View style={styles.container}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.text}>Item 3</Text>
      </View>
      <Text style={styles.contentU}>Hello this is nisa bla bla bla bla bla bla bla bla bla bpofgjkighgb kdghkdhgkuhgiudhguhltgjdhgkftngf</Text>
      

          </View>

</View>

          
          </Page>
  </Document>
  )

  export default CVViewer;