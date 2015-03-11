'use strict';
/** @jsx React.DOM */
var React = require('react');
var Dispatcher  = require('app/Dispatchers'),
    assign      = require('object-assign');
AppDispatcher;

AppDispatcher = assign({}, Dispatcher.prototype, {

    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;