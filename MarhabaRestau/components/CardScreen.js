import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { StyleSheet,TouchableOpacity,Text} from "react-native"
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';




const Repas = () => (
    <Card style={styles.container}>
       <Card.Content>
        <Title style={styles.title}>Pizza</Title>
        <Paragraph style={styles.title}>40 DH</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/pizza.png")} />
      <Card.Actions>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Order Now</Text>
        </TouchableOpacity>
      </Card.Actions>


      <Card.Content>
        <Title style={styles.title}>Pizza</Title>
        <Paragraph style={styles.title}>40 DH</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/pizza.png")} />
      <Card.Actions>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Order Now</Text>
        </TouchableOpacity>
      </Card.Actions>


      <Card.Content>
        <Title style={styles.title}>Pizza</Title>
        <Paragraph style={styles.title}>40 DH</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/pizza.png")} />
      <Card.Actions>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Order Now</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );


  const styles = StyleSheet.create({
    container:{
        marginLeft:4,
        padding:8,
        borderRadius:10,
        margin:6
    },
    text:{
        fontWeight:'bold',
        fontSize:17 
    }, 
    // picon:{
    //     backgroundColor:'#EFD345',
    //     width:200,
    //     height:200
    // }
})
export default Repas;