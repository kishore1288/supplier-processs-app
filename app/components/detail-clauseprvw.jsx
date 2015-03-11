
/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');

var Signature = React.createClass({
    getInputDOMNode: function() {
        return this.refs.textarea.getDOMNode();
    },
    getValue: function() {
        return this.getInputDOMNode().value;
    },
    render: function() {
        return this.transferPropsTo(
            <Container>
                <Grid>
                    <Row>
                        <Col xs={4} md={2} >
                            <h1 className='pg-title'>Clause preview</h1>
                        </Col>
                        <Col xs={4} md={2} >
                            <img src='images/v-img.png' alt='vstxlogo'/>
                        </Col>
                    </Row>
                    <Row>
                        <p  class="text-center"> No Data </P>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <h4 className='sgntr-heading'>Signature</h1>
                            <textarea ref='textarea' className='form-control' defaultValue=Sign Signature/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9} push-right>
                            <Button onClick={this.handleToggle} bsStyle="primary" bsSize="small" active>Clear</Button>
                            <Button onClick={this.handleToggle} bsStyle="primary" bsSize="small" active>Sign</Button>
                        </Col>

                    </Row>
                </Grid>
            </Container>
        );
    }
});

module.exports = Signature;
