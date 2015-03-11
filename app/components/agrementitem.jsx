
/** @jsx React.DOM */
var React = require('react');
var Sidebar = require('app/components/agreement');
var AgreementItem = React.createClass({
    render: function() {
        return (
            <div className={"agreement " + (this.props.agreement.statusupdate)}>
        <span className="agrid">{this.props.agmnt.id}</span>
        <span className="agrprice">{this.props.agmnt.price}</span>
        <span className="agrdesc">{this.props.agmnt.desc}</span>
        <span className="agrcrncy">{this.props.agmnt.agrcrncy}</span>
        </div>
        );
    },
    getDefaultProps: function () {
        return {
            agreement: {
                agrid: "",
                agrprice: 0,
                agrdesc: 0,
                agrcrncy: 0
            }
        };
    }
});

module.exports =AgreementItem;
