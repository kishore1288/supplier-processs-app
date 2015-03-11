

/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');
var AgrTabs = React.createClass({
    getInitialState: function() {
        return {
            agrnavtabs: [
                {title: 'Details', content: 'DetailsContent'},
                {title: 'Rules', content: 'RulesContent'},
                {title: 'Status', content: 'StatusContent'}
            ],
            active: 0
        };
    },
    render: function() {
        return <Grid>
            <Row>
                <Col xs={12}  md={4}>
                    <TabsSwitcher agrtabitems={this.state.agrnavtabs} active={this.state} onTabClick={this.handleTabClick}/>
                    <TabsContent agrtabitems={this.state.agrnavtabs} active={this.state}/>
                </Col>
            </Row>
        </Grid>;
    },
    handleTabClick: function(index) {
        this.setState({active: index})
    }
});

var TabsSwitcher = React.createClass({
    render: function() {
        var active = this.props.active;
        var agrtabitems = this.props.agrtabitems.map(function(item, index) {
            return <a href="#" className={'agrnavtab ' + (active === index ? 'agrnavtab_selected' : '')} onClick={this.onClick.bind(this, index)}>
				{agrtabitem.title}
            </a>;
        }.bind(this));
        return <div>{agrtabitems}</div>;
    },
    onClick: function(index) {
        this.props.onTabClick(index);
    }
});

var TabsContent = React.createClass({
    render: function() {
        var active = this.props.active;
        var agrtabitems = this.props.agrtabitems.map(function(item, index) {
            return <div className={'tabs-panel ' + (active === index ? 'tabs-panel_selected' : '')}>{agrtabitem.content}</div>;
        });
        return <div>{agrtabitems}</div>;
    }
});
module.exports = AgrTabs;

