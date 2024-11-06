import { Component } from "react";
import { ThemedText } from "./ThemedText";
import { StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

interface OperationProps {
    handleOperation: (e:any)=>void
}
 
interface OperationState {
    
}
 
class Operation extends Component<OperationProps, OperationState> {
    constructor(props: OperationProps) {
        super(props);
    }
    render() { 
        return ( 
            <TouchableOpacity style={styles.operations}>
                <TouchableOpacity id="clear" style={[styles.operation,styles.clear]} onPress={()=>this.props.handleOperation('AC')}><ThemedText>AC</ThemedText></TouchableOpacity>
                <TouchableOpacity id="add" style={styles.operation}   onPress={()=>this.props.handleOperation('+')}><ThemedText>+</ThemedText></TouchableOpacity>
                <TouchableOpacity id="subtract" style={styles.operation}   onPress={()=>this.props.handleOperation('-')}><ThemedText>-</ThemedText></TouchableOpacity>
                <TouchableOpacity id="multiply" style={styles.operation}   onPress={()=>this.props.handleOperation('*')}><ThemedText>*</ThemedText></TouchableOpacity>
                <TouchableOpacity id="TouchableOpacityide" style={styles.operation}  onPress={()=>this.props.handleOperation('/')} ><ThemedText>/</ThemedText></TouchableOpacity>
                <TouchableOpacity id="equals" style={[styles.operation,styles.equals]}   onPress={()=>this.props.handleOperation('=')}><ThemedText>=</ThemedText></TouchableOpacity>
            </TouchableOpacity>
         );
    }
}
 
export default Operation;


const { width } = Dimensions.get('window');
const isSmallScreen = width <= 768;

const styles = StyleSheet.create({
  operations: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  operation: {
    width: '100%',
    height: '15%',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isSmallScreen ? 18 : 30,
    marginVertical: 5, // Spacing between operation buttons (equivalent to row-gap)
  },
  clear: {
    backgroundColor: 'rgb(119, 0, 0)',
  },
  equals: {
    backgroundColor: 'rgb(192, 102, 0)',
  },
  operationHover: {
    // Alternative styling for hover effect if needed for non-touch platforms
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});