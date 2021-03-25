import React from 'react' ;
import './FlashCards.css';

class FlashCards extends React.Component{

    constructor(props){
        super(props) ;
        this.state = {
            editor:true ,
            cards : [] ,
            count: 0
        } ;
    }

    

    render(){
        if (this.state.editor){
            // if we are in the editor view
            return (
                <div>
                    <CardEditor 
                        cards={this.state.cards} 
                        switchMode={this.switchMode}
                        addCard = {this.addCard}
                        deleteCard = {this.deleteCard} 
                        />
                </div>
            )
        }
        else{
            //we want to see the card viewer
            return (
                <div>
                    <CardViewer 
                        switchMode={this.switchMode} 
                        cards = {this.state.cards}
                    />
                </div>
            ) ;
        }
    }

    switchMode = () =>{
        this.setState(state =>({
            editor: !state.editor 
        })) ;
    }

    addCard = (front,back) =>{
        this.setState(state =>({
            cards:[...state.cards,{front,back}]
        }))
    }

    deleteCard = (index) => {
        this.setState(state =>{
            const cards = [...state.cards]
            cards.splice(index,1) ;

            //cards:cards
            return{cards}
        }) ;
    }
}

class CardEditor extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            front:"",
            back:""
        }
    }

    deleteCard =(event) =>{
       this.props.deleteCard(event.target.dataset.index) ;
    }

    render(){

        //map each card object to a row and give it an index using the map function... 
        //the callback function s
        const rows = this.props.cards.map((card,i) => {
            return (
                <tr key={i}>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td><button data-index={i} onClick={this.deleteCard}>Delete</button></td>
                </tr>
            ) ;
        }) ;


        return(
            <div>
                This is Editor
                <h2>Card Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>

                </table>                
                <br/>

                <input name="front" onChange={this.handleChange} placeholder="Front of Card" value={this.state.front}/> 
                <input name="back" onChange={this.handleChange} placeholder="Back of Card" value={this.state.back} />
                <button onClick={this.addCard}>Add Card</button>
                <hr/>
                <button onClick={this.props.switchMode}>Go to Viewer</button>
            </div>
        );
    }

    addCard = () =>{
        this.props.addCard(this.state.front,this.state.back) ; 
        this.setState(state =>({
            front:"" , 
            back:""
        })) ;
    }

    handleChange = event => {

        this.setState(state =>({    
        [event.target.name]:event.target.value

        })) ;
    }

}

class CardViewer extends React.Component{
    constructor(props){
        super(props) ; 
        this.state ={
            front:true
        }
    }

    render(){
        const rows = this.props.cards.map((card,i)=>{
            return (
                <tr key={i}>
                    <td>{ this.state.front ?
                        card.front : card.back} 
                        </td>
                </tr> ) ; 
        }) ; 
        return(
            <div>
                This is Viewer
                <h2>Card Viewer</h2>
                <table>
                    <th>

                        <tr>
                            {this.state.front ? <th>Front</th> : <th>Back</th> }
                        </tr>
                    </th>
                    <tbody>
                        {rows}
                    </tbody>
                </table>

                <button >Next Card</button>
                <hr/>
                <button onClick={this.props.switchMode}>Go to Editor</button>
            </div>
        );
    }
}

export default FlashCards ;