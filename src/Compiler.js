import React from 'react' ;
import FileForm from './FileForm' ;
import Lexer from './Lexer'

class CompilerTest1 extends React.Component{

    constructor(props){
        super(props) ; 

        this.state = {
            textFromFile : "",
            submitted:false 
        }
    }

    render(){

        if (!this.state.submitted){ //do not showw
            return(
                <div>
                    <label> Select file from device </label>
                    <FileForm onSubmitFile={this.receiveTextFromFile} />
                </div>
            )    
        }
        else{
            //provide lexer button
            return(
                <Lexer textFileString={this.state.textFromFile} />
            )
        }
        
    }

    receiveTextFromFile = (text)=>{
        this.setState({
                submitted:!this.state.submitted,
                textFromFile:text
            }) ;

        }



}

export default CompilerTest1 ; 