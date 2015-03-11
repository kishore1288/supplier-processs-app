/** @jsx React.DOM */

var Details = require('js/components/detailspage');
var Sidebar = require('js/components/srchresult');
var Footer = require('js/components/footer');

var Body = React.createClass({

    componentDidMount: function() {
        this.getRouting().navigate('js/components/search');
    },
    render: function() {
        return (
            <Container id='container'>

            </Container>
        );
    }
});
var Body = React.createClass({

    render: function() {
        var classes = React.addons.classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Details />
                <Body>

                    <Footer />
                </Body>
            </Container>
        );
    }
});
module.exports = Body;
