
/** @jsx React.DOM */
var React = require('react');
var AppConstants = require('app/constants/agrdata.js');
var AppDispatcher = require('app/dispatchers/srchappdispatcher.js');

var loadAgreement = {
    loadAgreement:function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.LOAD_AGREEMENT,
            index: index
        })
    }
}
module.exports = LoadAgreement;




