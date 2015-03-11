
/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');
var AgrTabs=require('app/components/detail-navtabs')
var AgrDetailscrtn = React.createClass({
    getDefaultProps: function() {
        return {

        }
    },
    getInputDOMNode: function() {
        return this.refs.textarea.getDOMNode();
    },
    getValue: function() {
        return this.getInputDOMNode().value;
    },
    getInitialState: function() {
        return {errors: {}}
    }
    , getDetailsData: function() {
        var agrdetaildata = {
            owner: this.refs.owner.getDOMNode().value
            , salesorganisation: this.refs.salesorganisation.getDOMNode().value
            , distchannel: this.refs.distchannel.getDOMNode().value
            , companycode: this.refs.companycode.getDOMNode().value

        }

        return agrdetaildata
    }

    , render: function() {
        return   <Container id='container'>
            <Grid>
                <Row>
                    <Col sm={9} >
      {this.renderText('owner', 'Owner:')}
      {this.renderText('salesorganisation', 'SalesOrganisation:')}
      {this.renderText('distchannel', 'DistChannel:')}
                    {this.renderText('companycode', 'CompanyCode:')}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={9} text-right>
                        <Button  onClick={this.handleToggle}>ClausePreview</Button>
                        <Button bsStyle='Primary' onClick={this.handleToggle}>SaveAgreement</Button>
                    </Col>
                </Row>
            </Grid>
        </Container>
    }

    , renderText: function(id, label) {
        return this.renderField(id, label,
            <input type="text" className="form-control" id={id} ref={id}/>
        )
    }
})

module.exports = AgrDetailscrtn;