/** @jsx React.DOM */
var React = require('react');
var Dispatcher = require('app/Dispatchers/dispatcher');
var merge = require('react/lib/merge');
var {PayloadSources} = require('app/constants/AppConstants');

class AppDispatcher extends Dispatcher {

    handleServerAction(action) {
        this.dispatch({
            source: PayloadSources.SERVER_ACTION,
            action: action
        });
    }

    handleViewAction(action) {
        this.dispatch({
            source: PayloadSources.VIEW_ACTION,
            action: action
        });
    }

}

module.exports = new AppDispatcher();
