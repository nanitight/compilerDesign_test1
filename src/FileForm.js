import React from 'react' ;
import propTypes from 'prop-types';

class FileForm extends React.Component{


    constructor(props){
        super(props) ; 
        this.state = {
            textFromFile : ""
        }
    }


    submitFile = (event) =>{
        event.preventDefault() ; 
        this.props.onSubmitFile(this.state.textFromFile) ; 
    }

    updateFileEntered = (event) =>{
        event.preventDefault() ;
        const reader = new FileReader()
        reader.onload = async (event) =>{
            const text = (event.target.result) ; 
            //validation should  entero here
            if (text.length>0){
                console.log(text) ; 
            }
            else{
                alert('empty text file submitted, reload to try again- because empty I/O') ;
            }

            this.setState({
                textFromFile : text
            }) ; 
        } ; 
        reader.readAsText(event.target.files[0]) ;

    }

    render(){
        return(
            <form onSubmit={this.submitFile}>
                <input type="file"
                onChange={this.updateFileEntered}
                name="filename"
                id="textfile"
                accept=".txt"
                
                />
                <input type="submit"/>
            </form>
        )
    }

}


FileForm.propTypes={
    onSubmitFile : propTypes.func.isRequired ,
}

FileForm.defaultProps ={
    onSubmitFile : ()=>{},
 
}

export default FileForm ;