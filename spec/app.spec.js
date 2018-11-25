'use strict';

const Utils = require("../src/logics/utils");

describe("Test Suite", function() {
    it("test getDayNumberByDay", function() {
    	
	    expect(Utils.getDayNumberByDay("monday")).toEqual(1);
    });
    
    it("test getDayByDate", function() {
    	
	    expect(Utils.getDayByDate("2018-11-25")).toEqual(0);
    });
    
    it("test getStartDateDifferent", function() {
    	
	    expect(Math.ceil(Utils.getStartDateDifferent(new Date("2018-11-25"), new Date("2018-11-20"))/ (24*60*60*1000))).toEqual(5);
    });
    
    it("test getRentAmount", function() {
    	
	    expect(Utils.getRentAmount(1400, 2)).toEqual('400.00');
    });
    
    it("test getDateDifferent", function() {
    	
	    expect(Utils.getDateDifferent(new Date("2018-11-25"), new Date("2018-11-29"))).toEqual(5);
    });
    
    it("test getFirstRecord", function() {
    	let paymentObj = {
    		    id: "lease-a",
    		    start_date: "2018-07-01",
    		    end_date: "2018-12-01",
    		    rent: 820,
    		    frequency: "fortnightly",
    		    payment_day: "wednesday"
    		};
    	
    	let payments = [];
    	payments = Utils.getFirstRecord(paymentObj, payments);
	    expect(payments[0].amount).toEqual('234.29');
    });
    
    it("test getDatePerodArray", function() {
    	let paymentObj = {
    		    id: "lease-a",
    		    start_date: "2018-07-01",
    		    end_date: "2018-12-01",
    		    rent: 820,
    		    frequency: "fortnightly",
    		    payment_day: "wednesday"
    		};
    	
    	let payments = [];
    	payments = Utils.getDatePerodArray(new Date("2018-07-04"), new Date("2018-12-01"), payments, paymentObj);
	    expect(payments[3].days).toEqual(14);
    });
});

