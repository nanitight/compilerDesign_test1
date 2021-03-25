import React from 'react' ;


class Converter extends React.Component{
    state = {
      km: 0   
    }
  
    handleChange(event){
      this.setState({
        km: event.value
      }) ;
    }
  
    convert(){
      return (this.state.km/1.609).toFixed(2) ;
    }
  
    render(){
      return <div>
        <input type="number" value={this.state.km} onChange={this.handleChange} />
        <p>{this.state.km} km is {this.convert} miles  </p>
      </div>
    }
  }