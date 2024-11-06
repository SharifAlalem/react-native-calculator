import { Component } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { StyleSheet, Dimensions } from 'react-native';

type DisplayProps = {
    calculation: string
}

class Display extends Component<DisplayProps> {
    constructor(props: DisplayProps) {
        super(props);
    }
    render() { 
        return ( 
            <ThemedView style={styles.display} id="display"><ThemedText type="title">{this.props.calculation !== '' ? this.props.calculation : '© 2024 Sharif Alalem'}</ThemedText></ThemedView>
         );
    }
}
 
export default Display;

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 768;

const styles = StyleSheet.create({
  display: {
    height: '30%',
    backgroundColor: 'rgba(0, 0, 0,.2)',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});