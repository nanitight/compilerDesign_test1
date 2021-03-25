import React from 'react' ;
import PropTypes from 'prop-types';

class FileForm extends React.Component{


    constructor(props){
        super(props) ; 

        this.state = {
            textfile : ""
        }
    }


    submitFile = (event) =>{
        event.preventDefault() ;
        
        this.props.onSubmit(this.state.textfile)
    }

    updateFileEntered = (event) =>{
        this.setState({
            textfile : event.target.value 
        }) ; 
    }

    render(){
        return(
            <form onSubmit={this.submitFile}>
                <input type="file"
                onChange={this.updateFileEntered}
                id="myFile"
                name="filename"
                />
                <input type="submit">upload</input>
            </form>
        )
    }

}

FileForm.PropTypes={
    onSubmit : PropTypes.func.isRequired ,
}

FileForm.defaultProps ={
    onSubmit : ()=>{},
 
}