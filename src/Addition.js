import React from 'react' ;
// import ReactDOM from 'react-dom';
import './Addition.css' ;


class AdditionApp extends React.Component{

    constructor(props){
        super(props) ;

        this.state = {
            num1 :1 ,
            num2 : 1 ,
            answer : "" ,
            score : 0,
            incorrect: false
        }
    }

    //ternary expression 
    //boolean_expression ? value_if_true : value_if_false
    renderProblem(){
        return(
            <div>
                <h1 className ={this.state.incorrect ? "incorrect": ""}> {this.state.num1} + {this.state.num2} </h1>
                <input onKeyPress={this.inputPress}  onChange={this.updateAnswer} value ={this.state.answer}/>
                <div>
                    Score: {this.state.score} 
                </div>
            </div>
        ) ;
    }

    renderWin(){
        return(
            <h1> Congradulations! You win!</h1>
        )
    }

    render(){
        if (this.state.score >= 5){
            return this.renderWin() ;
        }
        else{
            return this.renderProblem() ;
        }
    }

    inputPress = (event) => {
        if (event.key === "Enter") { //use === 
             // check if answer is right
             const ans = parseInt(this.state.answer) ; 

             if (ans === (this.state.num1 + this.state.num2)){
                // Answer is right //chnage state
                this.setState(state => ({
                   score: state.score + 1 ,
                   num1 : Math.ceil(Math.random() * 10) ,
                   num2 : Math.ceil(Math.random() * 10),
                   answer:"" ,
                   incorrect:false
                
                }));
             }
             else{
                  //if Answer is wrong
                this.setState(state=>({
                    answer : "" ,
                    incorrect:true
                })) ;
             }
        }
    }

    updateAnswer = (event) => { //because it is has its own eventhandler , it needs to receive the event
        this.setState({
            answer: event.target.value
        });
    }
}


export default AdditionApp ;