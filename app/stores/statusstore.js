
/** @jsx React.DOM */
var React = require('react');
var AppDispatcher   = require('app/Dispatchers/statusdispatcher'),
    EventEmitter    = require('events').EventEmitter,
    assign          = require('object-assign'),
    CHANGE_EVENT    = 'change',
    status          = 'Initial',
    token           = '',
    StatusStore;

StatusStore = assign({}, EventEmitter.prototype, {

    emitChange: function(data) {
        this.emit(CHANGE_EVENT, data);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getStatus: function() {
        return status;
    },

    getToken: function() {
        return token;
    },

    generateToken: function() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {

        if(!payload.source === 'VIEW_ACTION') { return; }
        var action = payload.action;

        switch (action.actionType) {

            case 'Initial':
                if(status == 'OFF') {
                    token = StatusStore.generateToken();
                }
                status = 'ON';
                StatusStore.emitChange('ON');
                break;


            case 'Blocked':
                token = '';
                status = 'OFF';
                StatusStore.emitChange('OFF');
                break;
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })
});

module.exports = StatusStore;