import React from 'react' ;
import './FileForm' ;

class CompilerTest1 extends React.Component{

    constructor(props){
        super(props) ; 

        this.state = {
            textfile : "",
            submitted:false 
        }
    }

    render(){

        if (!this.state.submitted){ //do not showw
            return(
                <div>
                    FORM GOES HERE!    
                    <FileForm onSubmit={this.receiveFile} />
                </div>
            )    
        }
        else{
            return (
                <div>
                    TEXTFILE UNDER PROCESSING
                </div>
            )
        }
        
    }

    receiveFile = (event)=>{
        this.setState({
            textfile : event.target.value
        })
    }

}

export default CompilerTest1 ; 