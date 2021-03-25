import React from 'react';

class Exchange extends React.Component{

    constructor(props){
        super(props);
        this.currencies = ["AUD","CAD","CHF","CNY","USD", "GBP" ,"JPY", "NZD", "ZAR"] ; 
        this.cached = {} ; 
        this.state={
            base:this.currencies[0],
            other:this.currencies[1] ,
            value:0 ,
            converted: 0
        } ;
    }

    render (){
        return (
            <div>
                <div>
                    <select onChange={this.makeSelection} name="base" value={this.state.base}>
                        {this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                    <input onChange={this.changeValue} value={this.state.value} />
                </div>
                <div>
                    <select onChange={this.makeSelection}  name="other" value={this.state.other} >
                        {this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                            
                    </select>
                    <input value={this.state.converted === null ? "Calcuating..": this.state.converted } disabled={true} />
                </div>
            </div>
        )
    }

    makeSelection = (event) =>{
        this.setState({
            [event.target.name]:event.target.value 
        }, this.recalculate) ;
    }
    
    changeValue = (event) =>{
        this.setState({
            value : event.target.value ,
            converted: null
        }, this.recalculate ) ; 
         
    }

    recalculate = () =>{
        //find exchange rate and update
        const value = parseFloat(this.state.value) 
        if (isNaN(value)){
            return ; //exit
        }

        //is base in cache? , hsa been less than a minute
        if (this.cached[this.state.base] !== undefined && Date.now()-this.cached[this.state.base].timestamp < 1000 * 60){
            this.setState({
                converted: this.cached[this.state.base].rates[this.state.other] * value 
            }) ;
            return ;
        }

        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then( response => response.json())
        .then(data => {

            this.cached[this.state.base] = {
                rates : data.rates , 
                timestamp: Date.now(),
                base : this.state.base
            }
            this.setState({
                converted: data.rates[this.state.other] * value 
            }) ; 
        });
    }
}

export default Exchange ;