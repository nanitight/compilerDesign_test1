import React from 'react'

class Lexer extends React.Component {
    constructor(props){
        super(props) ;
        this.state = {
            output: [],
            abort:false
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.analizeInput}>Produce Lex Analysis</button>
            </div>
        )
    }

    analizeInput = () =>{
        var data = this.props.textFileString ; 

        //reserved words
        const reserved1 = ["eq" ,"<",">"]
        const reserved2 = ['and',"or","not"]
        const reserved3 = ["add" , "sub","mult"]
        const reserved4 = ["\"","\""]
        const reserved5 = [" ", "\n"]
        const reserved6 = ["(",")","{","}"]
        const reserved7 = ["="]
        const reserved8 =[ "if","then","while","for" ]
        const reserved9 =["input","output"]
        const reserved10 = ["halt"]
        const reserved11 = ["proc"]

        if (data.length >0 ){
            // perform analysis
            var words = data.split("") ; 
            console.log(words)

            var tokken ='' ; 
            let stateString =0 ;
            let innerString = "" ;
            for (let elem = 0 ; elem < words.length ; elem++){
                tokken += words[elem] ;
                if (reserved5.indexOf(tokken) !==-1) {
                    tokken=""} 
                else if (reserved1.indexOf(tokken) !==-1){
                    this.itemize(this.state.output,tokken,"Comparison_symb") ; 
                    tokken = "" ;
                }
                else if(reserved2.indexOf(tokken) !== -1){
                    this.itemize(tokken,"Boolean_Op")
                    console.log("BOOL") ;
                    tokken = "" ;
                }
                else if (reserved3.indexOf(tokken) !== -1){
                    this.itemize(tokken,"Number_Op") ; 
                    tokken = "" ;
                }
                //start of string
                else if (reserved4.indexOf(tokken) !== -1){
                    // this.itemize(tokken,"String_indicator")
                    // tokken = "" ;
                    if (stateString === 0 ){
                        stateString = 1 ; 
                        tokken = "" ;
                    }
                    else if (stateString === 1){
                        if (innerString.length > 8 ){
                            //break and error
                            this.longText(innerString) ; 
                        }
                        this.itemize(innerString,"String_Literal")
                        innerString="" ;
                        tokken = "" ;
                        stateString = 0 ;
                    }
                }
                else if (stateString === 1){
                    innerString += words[elem] ; 
                    tokken = "";
                    console.log('We are here') 
                }//////

                else if (reserved6.indexOf(tokken) !== -1){
                    this.itemize(tokken,"Gruoping_symb") ;
                    tokken = "" ;
                }
                else if (reserved7.indexOf(tokken) !== -1){
                    this.itemize(tokken,"Assignment")
                    tokken = "" ;
                }
                else if (reserved8.indexOf(tokken) !==-1){
                    this.itemize(tokken,"Control_Structure")
                    tokken = "" ;
                }
                else if (reserved9.indexOf(tokken) !== -1){
                    this.itemize(tokken,"I/O_commands")
                    tokken = "" ;
                }
                else if (reserved10.indexOf(tokken) !== -1){
                    this.itemize(tokken,"special_command")
                    tokken = "" ;
                }
                else if (reserved11.indexOf(tokken) !== -1){
                    this.itemize(tokken,"Procedure")
                    tokken = "" ;
                }
                //IntegerNumbers(0|[0..9]*)
                // else if (){

                // }

                //User-Def-Names
                // else if (){
                    
                // }

                //shortString - max 8
                console.log(elem,':',tokken,':',stateString,innerString)
                
            }
            console.log(this.state.output) ;

        }
        else{
            //input was empty
            console.log('Empty')
            
        }
        this.textFileOutString() ;
    }

    itemize = (word,categ) =>{
        console.log('itemize works Myb',word)
        this.setState({
            output:this.state.output.push(`[${word},${categ}]`) 
            } );
    }

    longText = (word) =>{
        this.setState({
            output: this.state.output.splice(0,this.state.output.length,`${word} = string too long, Scanning aborted`) , 
            abort:true 
        }, this.textFileOutString())
    }

    illegalChar = (word) =>{
        this.setState({
            output: this.state.output.splice(0,this.state.output.length,`${word} = illegal character, Scanning aborted`) , 
            abort:true 
        }, this.textFileOutString())
        
    }

    textFileOutString = () =>{
        const element = document.createElement("a") ; 
        const file = new Blob(this.state.output,{type:'text/plain'}) ; 
        element.href = URL.createObjectURL(file) ;
        element.download = "LEX-IR.txt" 
        document.body.appendChild(element) ;
        element.click() ;
    }
}

export default Lexer ;