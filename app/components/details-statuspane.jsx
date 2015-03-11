'use strict';
/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');

   var StatusActions = require('app/actions/loadstatus');
   var StatusStore = require('app/stores/statusstore');

var Status = React.createClass({

    getInitialState: function() {
        return getStateFromStore();
    },

    componentDidMount: function() {
        StatusStore.addChangeListener(this._handleChange);
    },

    componentWillUnmount: function() {
        StatusStore.removeChangeListener(this._handleChange);
    },

    _handleChange: function(text) {
        this.setState(getStateFromStore());
    },

    _setInitial: function(event) {
        event.preventDefault();
        StatusActions.initial();
    },

    _setBlocked: function(event) {
        event.preventDefault();
        StatusActions.blocked();
    },

    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                <h3>Status: <code>{this.state.status}</code></h3>
                <h3>Token: <code>{this.state.token}</code></h3>
                <a href="#" className="btn btn-xs btn-primary" onClick={this._setOnline}>Go Initial</a>
                <a href="#" className="btn btn-xs btn-default" onClick={this._setOffline}>Go Blocked</a>
            </div>
        );
        /* jshint ignore:end */
    }

});

function getStateFromStore() {
    return {
        status: StatusStore.getStatus(),
        token: StatusStore.getToken()
    }
}

module.exports = Status;
