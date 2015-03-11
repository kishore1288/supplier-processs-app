
/** @jsx React.DOM */

var React = require('react');
var AppDispatcher = require('app/Dispatchers/rulesappdispatchers')
var loadDetail = {
    loadDetail:function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.LOAD_DETAIL,
            index: index
        })
    }
}
module.exports = LoadDetail;