var React = require('react');
var Details = require('app/components/detailsagrementpage');
var AgrTabs=require('app/components/detail-navtabs')
var Griddle = require('griddle-react');
var GriddleWithCallback = require('GriddleWithCallback.jsx');
var StructuredFilter = require('/app/main.jsx');

var ExampleData = require('./ExampleData.jsx');

var ExampleTable = React.createClass({
    getInitialState: function() {
        return {
            filter: ""
        }
    },


    getJsonData: function(filterString, sortColumn, sortAscending, page, pageSize, callback) {
        thisComponent = this;

        if (filterString==undefined) {
            filterString = "";
        }
        if (sortColumn==undefined) {
            sortColumn = "";
        }

        // Normally you would make a Reqwest here to the server
        var results = this.refs.ExampleData.filter(filterString, sortColumn, sortAscending, page, pageSize);
        callback(results);
    },


    updateFilter: function(filter){
        // Set our filter to json data of the current filter tokens
        this.setState({filter: JSON.stringify(filter)});
    },


    getConditiontypeOptions: function() {
        return this.refs.ExampleData.getConditiontypeOptions();
    },

    getPayerOptions: function() {
        return this.refs.ExampleData.getPayerOptions();
    },

    getCustomerNoOptions: function() {
        return this.refs.ExampleData. getCustomerNoOptions();
    },


    render: function(){
        return (
            <div>
                <StructuredFilter
                    placeholder=""
                    options={[
                        {category:"ConditionType", type:"text", options:this.getConditionTypeOptions},
                        {category:"Payer",type:"text",options:this.getPayerOptions},
                        {category:"CustomerNo",type:"number",options:this.getCustomerNoOptions},
                        {category:"CustomerName",type:"text"},
                        {category:"MaterialNo", type:"number"},
                        {category:"MaterialGroup", type:"text"},
                        {category:"NewRate", type:"number"},
                        {category:"ConditionNewRate", type:"number"},
                        {category:"MaterialDescription", type:"text"},
                    ]}
                    customClasses={{
                        input: "filter-tokenizer-text-input",
                        results: "filter-tokenizer-list__container",
                        listItem: "filter-tokenizer-list__item"
                    }}
                    onTokenAdd={this.updateFilter}
                    onTokenRemove={this.updateFilter}
                />
                <GriddleWithCallback
                    getExternalResults={this.getJsonData} filter={this.state.filter}
                    resultsPerPage={10}
                />
                <ExampleData ref="ExampleData" />
            </div>
        )
    }
});
module.exports = ExampleTable;

