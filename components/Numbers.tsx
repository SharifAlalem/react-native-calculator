import { Component } from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ThemedText } from "./ThemedText";

type NumbersProps = {
    handleClick: (e:any)=>void
}

class Numbers extends Component<NumbersProps> {
    constructor(props: any) {
        super(props);
    }

    render() { 
        return ( 
            <TouchableOpacity style={styles.numbers}>
                <TouchableOpacity style={styles.numbersList}>
                    <TouchableOpacity id="seven" style={styles.number} onPress={()=>this.props.handleClick('7')}><ThemedText type="title">7</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="eight" style={styles.number} onPress={()=>this.props.handleClick('8')}><ThemedText type="title">8</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="nine" style={styles.number} onPress={()=>this.props.handleClick('9')}><ThemedText type="title">9</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="four" style={styles.number} onPress={()=>this.props.handleClick('4')}><ThemedText type="title">4</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="five" style={styles.number} onPress={()=>this.props.handleClick('5')}><ThemedText type="title">5</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="six" style={styles.number} onPress={()=>this.props.handleClick('6')}><ThemedText type="title">6</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="one" style={styles.number} onPress={()=>this.props.handleClick('1')}><ThemedText type="title">1</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="two" style={styles.number} onPress={()=>this.props.handleClick('2')}><ThemedText type="title">2</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="three" style={styles.number} onPress={()=>this.props.handleClick('3')} ><ThemedText type="title">3</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="zero" style={[styles.number,styles.largeNumber]} onPress={()=>this.props.handleClick('0')}><ThemedText type="title">0</ThemedText></TouchableOpacity>
                    <TouchableOpacity id="decimal" style={styles.number} onPress={()=>this.props.handleClick('.')}><ThemedText type="title">.</ThemedText></TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
         );
    }
}
 
export default Numbers;

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 768;

const styles = StyleSheet.create({
  numbers: {
    width: '80%',
    alignSelf: 'flex-start',
  },
  numbersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 0,
    padding: 0,
    gap: 10, // Space between items (React Native doesn’t support column-gap and row-gap separately)
  },
  number: {
    width: '30%',
    height: '29.5%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 60,
  },
  numberHover: {
    // Alternative styling for hover effect if needed for non-touch platforms
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  largeNumber: {
    width: '63%', // Doubled width for the last two items
  },
});
