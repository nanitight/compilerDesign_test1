import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ReactComponent } from '*.svg';
// import Addition from './Addition' ;

// import Todo from './todo'
// import FlashCards from './FlashCards' ; 

// import Clock from './Clock' ;
// import Todo from './todo' ;
import Exchange from './exchange' ;

// class Count extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       num:0
//     } ;  
//   }


// componentDidMount(){
//   this.setState({num:42}) ;
// }

// componentDidUpdate(){
//   alert("Update!") ;
// }

//   inc = () => {
//     this.setState(oldState => ({
//       num:oldState.num+1
//     }));
//   } 

//   //avoids race condition //prevent against potential bugs

//   dec = () =>{
//     this.setState(state =>({
//       num: state.num-1
//     }));
//   }
//   render(){
//     return <div>
//       <p> Number is now: {this.state.num} </p>
//       <button onClick={this.inc}>Increase The Number!</button>
//       <button onClick={this.dec}>Decrement </button>
//       </div> ;
//   }
// }


 // eslint-disable-next-line
// const elem = <Converter />;
// const count = <Count /> ;
ReactDOM.render(  
  <Exchange /> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
