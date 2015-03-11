
/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var Sidebar = require('app/components/agreement');
var Footer = React.createClass({
    getInitialState: function() {
        return {
            version: 0
        };
    },
    componentDidMount: function() {
        this.setState({
            version: document.getElementsByTagName('body')[0].getAttribute('data-version')
        });
    },
    render: function() {
        return (
            <div>
                <Grid gutterBottom></Grid>
                <Grid id='footer' className='text-center'>
                    <Row>
                        <Col xs={12} md={3} pull-left>
                            <Row>
                                <Col md={4}><a href="#"> <img src='images/arrow.jpg' alt='arw' class="text-left"/></a> </Col>
                                <Col md={4}><a href="#"> <img src='images/simble.jpg' alt='simble' class="text-center"/> </a> </Col>
                                <Col md={4}><a href="#"> <img src='images/plus.jpg' alt='cresymbl' class="text-right"/></a>  </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={9}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

module.exports = Footer;

