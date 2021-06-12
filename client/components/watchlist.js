
import React, { Component } from 'react';
// import React, { useState,useEffect } from 'react'; // HOOKS
// import React from 'react';
// import "./stylesheet.css"
import axios from 'axios';



class Watchlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watch: "",
            stockList: []
        };

    }
   
    stockDetails = () => {
        axios.get('http://localhost:3000/api/stockDetails', {
            stockList: [this.state.stockList]
            
        }).then((res) =>{

            console.log('response', res)
            console.log(res.locals.symbol );
        })
        
    };

    onSubmitClick = () => {
        console.log(this.state);
        axios.post('http://localhost:3000/api/stock_watchlist', {
            symbol: this.state.watch
        }).then(() =>
        alert('Successfully Added'))
        
    };
    render() { 
        return (
            <div>
                <div>
                    <h1>Stocker
                        <div className="ui mini image">
                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/rocket_1f680.png"/>
                        </div>
                    </h1>
  
                </div>
 
                <div className="ui input">
                    <input value={this.state.watch} onChange={e => this.setState({
                        watch: e.target.value
                    })} placeholder="Enter stock symbol" />
                </div>
                    <button className="ui primary button basic" onClick={
                                    () => this.onSubmitClick()
                                    }>Add to watchlist
                    </button>
                     {this.state.stockList.map((val) => {
                        return this.state. stockList={val}
            })}
                    <table className="ui celled table">
                       <thead>
                           <tr><th>ID</th>
                               <th>Symbol</th>
                               <th>Company Name</th>
                               <th>Added On</th> </tr>
                       </thead>
                   </table>
                   <tbody></tbody>
 
   
                </div>
        
            
        )
    }
};



export default Watchlist;