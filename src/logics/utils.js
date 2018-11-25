'use strict';



const getDayByDate = (date) => {
	
	let date_ = new Date(date);
	let day = date_.getDay();
	
	return day;
}

const getDayNumberByDay = (day) => {
	
	let dayList = new Array( "sunday", "monday" , "tuesday" , "wednesday" , "thursday" , "friday", "saturday" );
	let dayNum = dayList.indexOf(day);
	
	return dayNum;
}

const getStartDateDifferent = (leaseStartDate, paymentStartDate) => {
	let diff = 0;
	if(paymentStartDate > leaseStartDate){
		diff = paymentStartDate - leaseStartDate;
	}else{
		diff = leaseStartDate - paymentStartDate;
	}
	
	if(diff == 0){
		diff = diff;
	}else{
		diff = diff-1;
	}

	return diff;
}

const getRentAmount = (amount, days) => {
	let amountForOneDay = amount/7;
	let rentAmount = amountForOneDay * days;
	return rentAmount.toFixed(2);
}

const getEndDateOfFirstPriod = (startDate, days) => {
	
	let endDateofFirstPeriod = new Date(startDate);
	
	endDateofFirstPeriod = endDateofFirstPeriod.setDate(endDateofFirstPeriod.getDate() + (days-1));
	return new Date(endDateofFirstPeriod);
}

const getNextPeriod = (date, frequency) => {
	date = new Date(date);
	if(frequency === 'weekly'){
		return new Date(date.setDate(date.getDate() + 7));
	}else if(frequency === 'fortnightly'){
		return new Date(date.setDate(date.getDate() + 14));
	}if(frequency === 'monthly'){
		return new Date(date.setMonth(date.getMonth() + 1));
	}
}

const getDateDifferent = (date1, date2) => {
	
	let msDay = 60*60*24*1000;
	let timeOffsetInMS1 = date1.getTimezoneOffset() * 60000;
	let timeOffsetInMS2 = date2.getTimezoneOffset() * 60000;
	let days = (Math.floor(((date2 - timeOffsetInMS2) - (date1 - timeOffsetInMS1)) / msDay));
	return days + 1;
	
	
}


const getPaymentList = (paymentObj) => {
	let payments  =  [];
	
	
	payments = getFirstRecord(paymentObj, payments);
	let startDaySecondRow;
	
	if(payments.length > 0){
		startDaySecondRow = payments[0].to;
	}else{
		startDaySecondRow = new Date(paymentObj.start_date);
	}
	payments = getDatePerodArray(startDaySecondRow, new Date(paymentObj.end_date), payments, paymentObj);
	
	let payments_  =  [];
	
	for (let i in payments) {
		let pay = payments[i];
		pay.from = formatDate(pay.from);
				
		if(payments.length === (parseInt(i)+1)){
			pay.to = formatDate(pay.to);
		}else{
			pay.to = formatDate(new Date(pay.to.setDate((pay.to).getDate() - 1)));
		}
		payments_.push(pay);
	
	}
	
	return payments_;
	
	
}

const getFirstRecord = (paymentObj, payments) => {
	
	let payment = {
			count: '',
			from: '',
			to: '',
			days: '',
			amount: ''
	};
	
	let paymentStartDate = getDayByDate(paymentObj.start_date);
	let leaseStartDate = getDayNumberByDay(paymentObj.payment_day);
	let firstPeriodDiff = getStartDateDifferent(paymentStartDate, leaseStartDate);
	
	payment.from = new Date(paymentObj.start_date);
	payment.to = (getEndDateOfFirstPriod(paymentObj.start_date, (firstPeriodDiff)));
	payment.days = getDateDifferent(payment.from, payment.to );
	payment.amount = getRentAmount(paymentObj.rent, payment.days);
	
	payment.count = 0;
	
    if(payment.days != 0){
    	payments.push(payment);
    }
    
	return payments;
	
}

const getDatePerodArray = (startDate, endPeriodDate, payments, paymentObj) => {
	
	let endDate_ = endPeriodDate;
	let count = 1;
	while (startDate.getTime() <= endPeriodDate.getTime()) {
		
		let payment = {
				count: '',
				from: '',
				to: '',
				days: '',
				amount: ''
		};
		
		startDate = new Date(startDate.setDate((startDate).getDate() + 1)); 
		payment.from = startDate;

		payment.to = getNextPeriod(startDate, paymentObj.frequency);
		payment.to = new Date(payment.to.setDate((payment.to).getDate() - 1)); 
		
		if(payment.to > endDate_){
			payment.to = new Date(paymentObj.end_date);
		}

		startDate = payment.to;
		payment.days = getDateDifferent(payment.from, payment.to );
		payment.amount = getRentAmount(paymentObj.rent, payment.days);
		payment.count = count;
		
		payments.push(payment);
				
		count++;	
		if(payment.to >= endDate_){
			break;
		}
    }
		
	return payments;
}

const formatDate = (date) => {
	const dateFormat = require('dateformat');
	
	return dateFormat(date, "mmmm, dddd dS, yyyy");
	
}



module.exports = {
		'getDayByDate': getDayByDate,
		'getDayNumberByDay': getDayNumberByDay,
		'getStartDateDifferent': getStartDateDifferent,
		'getPaymentList': getPaymentList,
		'getFirstRecord': getFirstRecord,
		'getDateDifferent': getDateDifferent,
		'getRentAmount': getRentAmount,
		'formatDate': formatDate,
		'getDatePerodArray': getDatePerodArray,
		'getNextPeriod': getNextPeriod,
		'getEndDateOfFirstPriod': getEndDateOfFirstPriod
};
