
/** @jsx React.DOM */
var React = require('react');
var AppDispatcher = require('app/Dispatchers/statusdispatcher'),
    StatusActions;

StatusActions = {

    initail: function() {
        AppDispatcher.handleViewAction({
            actionType: 'Initial',
            customProperty: 'Status:Initial'
        });
    },


    blocked: function() {
        AppDispatcher.handleViewAction({
            actionType: 'Blocked',
            customProperty: 'Status-Blocked'
        });
    }
};

module.exports = StatusActions;