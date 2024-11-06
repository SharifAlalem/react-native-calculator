import { Component } from "react";
import Numbers from "./Numbers"
import Display from "./Display";
import Operation from "./Operations";
import Mexp from 'math-expression-evaluator';
import { ThemedView } from "./ThemedView";
import { StyleSheet, Dimensions } from 'react-native';

type WrapperState = {
    leftZero: boolean,
    decimalApplied: boolean,
    result: number,
    display : string
}

const operations = new Set(['+', '-', '*','/','.']);

class Wapper extends Component<{},WrapperState> {
    constructor(props:any) {
        super(props);

        this.state= {
            leftZero: true,
            decimalApplied: false,
            result: 0,
            display: ''
        }
    }

    cleanExpression = (expression:string) => {
        return expression.replace(/([-+*/]){2,}/g, (match:any) => {
          return match.endsWith('-') ? match.slice(-2) : match.slice(-1);
        });
    };

    calculateResult = () => {
        const mexp = new Mexp();
        const evaluatedResult = mexp.eval(this.cleanExpression(this.state.display));
        this.setState({display: String(evaluatedResult),result: evaluatedResult});
    };

    resetCalculator = () => {
        this.setState({
            result: 0,
            display: '0',
            leftZero:true,
            decimalApplied: false,
        });
    }

    handleClick = (char:any)=>{
        if(char =='AC') this.resetCalculator();
        else if(char === '=') this.calculateResult();
        else {
            if(this.state.result != 0) this.setState({display: String(this.state.result)+ char,result:0});
            else {
                if(operations.has(char)){
                    if(char == '.' && this.state.decimalApplied == false)
                        this.setState({display: this.state.display + char, leftZero:true,decimalApplied:true})
                    else if(char == '.' && this.state.decimalApplied == true)
                        this.setState({display: this.state.display, leftZero:true,decimalApplied:true})
                    else  this.setState({display: this.state.display + char,decimalApplied:false, leftZero:true})
                }
                else {
                    if(this.state.leftZero == true && char !== '0' && this.state.display[this.state.display.length-1] == '0')
                        this.setState({display: this.state.display.slice(0,-1) + char,leftZero:false})
                    else if(this.state.leftZero == true && char == '0' && !operations.has(this.state.display[this.state.display.length-1])) 
                        this.setState({display: this.state.display.slice(0,-1) + char})
                    else if(this.state.leftZero == true && char == '0' && operations.has(this.state.display[this.state.display.length-1]))
                        this.setState({display: this.state.display + char, leftZero:true})
                    else this.setState({display: this.state.display + char, leftZero:false})
                }  
            } 
        }
    }

    render() { 
        return ( 
            <ThemedView style={styles.calculatorBase}>
                <Display calculation={this.state.display} />
                <ThemedView style={styles.row}>
                    <Numbers handleClick={this.handleClick}/>
                    <Operation handleOperation={this.handleClick}/>
                </ThemedView>
            </ThemedView>
         );
    }
}
 
export default Wapper;

const styles = StyleSheet.create({
    calculatorBase: {
      height: '100%', 
      width: '100%', 
      elevation: 5, // Use elevation for Android shadow
    },
    row: {
      flexDirection: 'row', // Align children in a row
      padding: 10,
      justifyContent: 'space-between', // Spacing between items
      height: '70%'
    },
  });