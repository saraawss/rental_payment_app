'use strict';
import * as axios from 'axios';
const Utils = require('../logics/utils');

const findLeasePaymentLIst = async (id) => {
	let payment = await findLeasePaymentById(id);
	let payments = Utils.getPaymentList(payment);
	return payments;
}

const findLeasePaymentById = (id) => {
	
	return new Promise((resolve, reject) => {
        axios
            .get('https://hiring-task-api.herokuapp.com/v1/leases/${id}')
            .then(response => {
            	resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });
 
};

const findLeasePayments = () => {
	
	return new Promise((resolve, reject) => {
        axios
            .get('https://hiring-task-api.herokuapp.com/v1/leases')
            .then(response => {
            	console.log('response>> '+JSON.stringify(response.data));
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });
 
};



module.exports = {
		'findLeasePaymentLIst': findLeasePaymentLIst,
	    'findLeasePaymentById': findLeasePaymentById,
	    'findLeasePayments': findLeasePayments
};
