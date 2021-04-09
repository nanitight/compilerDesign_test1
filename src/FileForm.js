import React from 'react' ;
import propTypes from 'prop-types';
// const fs = require(fs) ;

class FileForm extends React.Component{

    constructor(props){
        super(props) ; 
        this.state = {
            textFromFile : '',
            fileChosen : null
        }
    }

    submitFile = (event) =>{
        // this.setFileEntered(event) ;
        event.preventDefault() ; 
        this.props.onSubmitFile(this.state.textFromFile) ; 
        // NqBVXqo7YtgGpURD1bM0c82qM5tSGN
    }

    updateFileEntered = (event) =>{
        var fr = new FileReader();
        fr.onload = async ()=>{
            this.setState({
                textFromFile:fr.result 
            }) ;
        }

        fr.readAsText(event.target.files[0],'utf8')

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