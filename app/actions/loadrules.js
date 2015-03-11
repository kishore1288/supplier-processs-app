
/** @jsx React.DOM */
var React = require('react');
var AppDispatcher = require('app/Dispatchers/rulesappdispatchers')
var loadRules = {
    loadAgreement:function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.LOAD_RULES,
            index: index
        })
    }
}
module.exports = LoadRules;