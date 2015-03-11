
/** @jsx React.DOM */
var React = require('react');
var Sidebar = require('app/components/agreement');
var AgreementItem=require('components/agreementlist');
var AgreementList = React.createClass({
    render: function() {
        var content;
        if (this.props.items.length > 0) {
            var items = this.props.items.map(function(item) {
                return <li>{item}</li>;
            });
            content = <ul>{items}</ul>
        } else {
            content = <p>No items matching this filter</p>;
        }
        return (
            <div className="agrlistitems">
            {Items}
            </div>
        );
    }
});

module.exports = AgreementList

