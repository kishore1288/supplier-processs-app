

/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');

var AgrCreation = React.createClass({
    getInitialState: function() {
        return {

        }
    }

    , render: function() {

        var submitted
        if (this.state.submitted !== null) {
            submitted = <div className="alert alert-success">
                <p>Agreement Create</p>
                <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
            </div>
        }

        return  <Container id='container'>

            <Grid>

                <Row>
                    <Col  xs={12} md={3} collapseLeft>
                        <PanelContainer>
                            <Panel>
                                <PanelHeader>
                                    <h3 className="panel-title pull-left">Create Agreement</h3>
                                </PanelHeader>
                                <PanelBody>
                                    <AgrrementCreation ref="agreementCreation"/>
                                </PanelBody>
                                <PanelFooter>
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Save</button>
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Cancel</button>
                                </div>

      {submitted}
                            </PanelFooter>
                        </Panel>
                    </PanelContainer>
                </Col>
            </Row>
        </Grid>

    }

    , handleChange: function(field, e) {
        var nextState = {}
        nextState[field] = e.target.checked
        this.setState(nextState)
    }

    , handleSubmit: function() {
        if (this.refs.agreementCreation.isValid()) {
            this.setState({submitted: this.refs.agreementCreation.getFormData()})
        }
    }
})

/**
 * A contact form with certain optional fields.
 */
var AgreementCreation = React.createClass({
    getDefaultProps: function() {
        return {

        }
    }
    , getInitialState: function() {
        return {errors: {}}
    }

    , isValid: function() {
        var fields = ['agrtype', 'descrition', 'validfrom', 'validto', 'currency', 'salesorg', 'distchannel','distdivision']


        var errors = {}
        fields.forEach(function(field) {
            var value = trim(this.refs[field].getDOMNode().value)
            if (!value) {
                errors[field] = 'This field is required'
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
        var agrpdata = {
            agrtype: this.refs.agrtype.getDOMNode().value
            , descrition: this.refs.descrition.getDOMNode().value
            , validfrom: this.refs.validfrom.getDOMNode().value
            , validto: this.refs.validto.getDOMNode().value
            , currency: this.refs.currency.getDOMNode().value
            , salesorg: this.refs.salesorg.getDOMNode().value
            , distchannel: this.refs.distchannel.getDOMNode().value
            , distdivision: this.refs.distdivision.getDOMNode().value
            , currentCustomer: this.refs.currentCustomerYes.getDOMNode().checked
        }

        return agrpdata
    }

    , render: function() {
        return <div className="form-horizontal">
      {this.renderSelect('agrtype', 'Agr Type', AGRTYPES)}
      {this.renderTextInput('descrition', 'Descrition')}
      {this.renderTextInput('validfrom', 'Valid From')}
        {this.renderTextInput('validto', 'Valid To')}
      {this.renderTextInput('currency', 'Currency')}
      {this.renderTextInput('salesorg', 'Sales Org')}
        {this.renderTextInput('distchannel', 'Dist Channel')}
            {this.renderTextInput('distdivision', 'Dist Division')}


        </div>
    }

    , renderTextInput: function(id, label) {
        return this.renderField(id, label,
            <input type="text" className="form-control" id={id} ref={id}/>
        )
    }

    , renderTextarea: function(id, label) {
        return this.renderField(id, label,
            <textarea className="form-control" id={id} ref={id}/>
        )
    }

    , renderSelect: function(id, label, values) {
        var options = values.map(function(value) {
            return <option value={value}>{value}</option>
        })
        return this.renderField(id, label,
            <select className="form-control" id={id} ref={id}>
        {options}
            </select>
        )
    }

    , renderRadioInlines: function(id, label, kwargs) {
        var radios = kwargs.values.map(function(value) {
            var defaultChecked = (value == kwargs.defaultCheckedValue)
            return <label className="radio-inline">
                <input type="radio" ref={id + value} name={id} value={value} defaultChecked={defaultChecked}/>
        {value}
            </label>
        })
        return this.renderField(id, label, radios)
    }

    , renderField: function(id, label, field) {
        return <div className={$c('form-group', {'has-error': id in this.state.errors})}>
            <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
            <div className="col-sm-6">
        {field}
            </div>
        </div>
    }
})
var AGRTYPES = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
    'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
    'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
    'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

module.exports = AgrCreation;
