import React from 'react' ;
import FileForm from './FileForm' ;

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
                    FORM GOES HERE!    
                    <FileForm onSubmitFile={this.receiveTextFromFile} />
                </div>
            )    
        }
        else{
            return (
                <div>
                    <p style={{font:'64em'}} >
                        {
                            this.state.textFromFile
                        }
                    </p>
                </div>
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