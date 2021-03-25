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
                    <FileForm onSubmitFile={this.receiveFile} />
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
        
        const reader = new FileReader()
        reader.onload = async (event) =>{
            const text = (event.target.result) ; 
            console.log(text) ; 
            alert(text) ; 
        } ; 
        reader.readAsText(event.target.files[0])
    }

}

export default CompilerTest1 ; 