import React from 'react' ;
import './Clock.css'

class Clock extends React.Component {
    constructor(props){
        super(props) ;
        this.state = {
            time: new Date().toLocaleTimeString() 
        }
    }

    componentDidMount(){
            this.intervalID = setInterval(()=>
            this.updateTime() , 1000) ;
    }
    componentWillUnmount(){
        clearInterval(this.intervalID) ;
    }

    updateTime(){
        this.setState(state => {
            time: new Date().toLocaleString()
        });
    }

    render(){
        return (
            <div className="Clock">
                <div className="Time">
                    <p> {this.state.time} </p>
                </div>
            </div>
        );
    }
}

export default Clock ;