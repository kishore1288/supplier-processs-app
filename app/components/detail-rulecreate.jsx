
/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var AgrTabs=require('app/components/detail-navtabs')
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');

var AgrRuleCreation = React.createClass({
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

    , isValid: function() {
        var rulefields = ['SheetName', 'Material', 'Rate']


        var errors = {}
        rulefields.forEach(function(rulefield) {
            var value = trim(this.refs[rulefield].getDOMNode().value)
            if (!value) {
                errors[rulefield] = 'This field is required'
            }
        }.bind(this))
        this.setState({errors: errors})

        var isValid = true
        for (var error in errors) {
            isValid = false
            break
        }
        return isValid
    }

    , getFormData: function() {
        var agrruledata = {
            sheetname: this.refs.sheetname.getDOMNode().value
            , material: this.refs.material.getDOMNode().value
            , rate: this.refs.rate.getDOMNode().value

        }

        return agrruledata
    }

    , render: function() {
        return   <Container id='container'>
            <Grid>
                <Row>
                    <Col sm={9} >
      {this.renderSelect('sheetname', 'SheetName:', SHEETS)}
      {this.renderTextInput('material', 'Material:')}
      {this.renderTextInput('Rate', 'Rate:')}
                    </Col>
                </Row>
                <Row>
                    <Col md={9} text-right>
                        <br/>
                        <div>
                            <Button  bsStyle='Primary' onClick={this.handleToggle}>Save</Button>
                            <Button bsStyle='Danger' onClick={this.handleToggle}>Cancel</Button>
                        </div>
                        <br/>
                    </Col>
                </Row>
            </Grid>
        </Container>
    }

    , renderTextInput: function(id, label) {
        return this.renderField(id, label,
            <input type="text" className="form-control" id={id} ref={id}/>
        )
    }


    , renderSelect: function(id, label, values) {
        var options = values.map(function(value) {
            return <option value={value}>{value}</option>
        })
        return this.renderField(id, label,
            <select className="form-control" id={id} ref={id}>
        {rulefields}
            </select>
        )
    }


    , renderField: function(id, label, field) {
        return

        <div className={$c('form-group', {'has-error': id in this.state.errors})}>
            <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
            <Row>
                <Col sm={6} >
            {rulefields}
                </Col>
            </Row>
        </div>
    }
})
var SHEETS = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI'
]

module.exports = AgrCreation;
