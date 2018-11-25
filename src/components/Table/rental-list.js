import React, { Component } from 'react';
import * as axios from 'axios';
const PaymentService = require('../../services/rental-list.service');
const Utils = require('../../logics/utils');

//Displaying Lease Payments in a Table
const RentalList = (props) => {	
	
	const payment_list = props.payment_list;
	
	const paymentRows = payment_list.map(rent => {

        
        return (
        		
        	<tr key={rent.count.toString()}>
        	  <td>{(rent.from)}</td>
		      <td>{(rent.to)}</td>
		      <td>{rent.days}</td>
		      <td>${rent.amount}</td>
		    </tr>

        );
    });


	
  
    return (
    		
    	<table className="table table-striped">
  		  <thead>
  		    <tr>
  		      <th scope="col">From</th>
  		      <th scope="col">To</th>
  		      <th scope="col">Days</th>
  		      <th scope="col">Amount</th>
  		    </tr>
  		  </thead>
  		  <tbody>
  		  		{paymentRows}
  		
  		  </tbody>
  		</table>
   
    );
  
}

export default RentalList;
