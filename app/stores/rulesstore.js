
/** @jsx React.DOM */
var React = require('react');
var AppDispatcher = require('app/Dispatchers/rulesappdispatcher');
var ActionTypes  = require('app/actions/loadrules');
var EventEmitter = require('events').EventEmitter;
var  sort, filter  = require('../../app').utils;
var assign = require('react/lib/Object.assign');
var Taffy = require('./taffy-min.js').taffy;


/*******************************************************************************
 * WARNING: DO NOT DO WHAT THIS FILE DOES
 * You should NOT put all of your data in a local file like this.
 * You should query a server.  This is purely for demo purposes.
 ******************************************************************************/

var ExampleData = React.createClass({
    componentWillMount: function() {
        // Create instance variable of static data
        this.db = Taffy([

            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},{"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},{"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},{"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},
            {"ConditionType":"ZU", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 14, 	 "CustomerName": vstx, 	 "MaterialNo":013, 		 "MaterialGroup":"Consumer Services", 	 "NewRate":"787", "ConditionNewRate":"898","MaterialDescription":"Desc"},
            {"ConditionType":"UI", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 68, 	 "CustomerName": blwre, 	 "MaterialNo":813, 		 "MaterialGroup":"  Tool Services", 	 "NewRate":"889", "ConditionNewRate":"456","MaterialDescription":"Desc"},
            {"ConditionType":"JS", 	 "Payer": "zulily, inc.", 	 "CustomerNo": 24, 	 "CustomerName":hwky, 	 "MaterialNo":389, 		 "MaterialGroup":"Food Services", 	 "NewRate":"090", "ConditionNewRate":"89887","MaterialDescription":"Desc"},




        ]);
    },

    filter: function(filterString, sortColumn, sortAscending, page, pageSize) {
        console.log("Filter: "+filterString);

        // Apply filters
        var filteredData = this.db();

        if (filterString != "") {
            var filterArray = JSON.parse(filterString);
            for (i = 0; i < filterArray.length; i++) {
                filter = filterArray[i];

                // Filter ConditionType
                if (filter.category == "ConditionType") {
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({ConditionType:{'==':filter.value}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({ConditionType:{'!==':filter.value}});
                    }
                }

                // Filter Payer
                else if (filter.category == "Payer") {
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({Payer:{'==':filter.value}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({Payer:{'!==':filter.value}});
                    } else if (filter.operator == "contains") {
                        filteredData = filteredData.filter({Payer:{'likenocase':filter.value}});
                    } else if (filter.operator == "!contains") {
                        filteredData = filteredData.filter({Payer:{'!likenocase':filter.value}});
                    }
                }

                // Filter MaterialNo
                else if (filter.category == "MaterialNo") {
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({MaterialNo:{'==':filter.value}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({MaterialNo:{'!==':filter.value}});
                    }
                }

                // Filter CustomerName
                else if (filter.category == "CustomerNo") {
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({CustomerNo:{'==':filter.value}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({CustomerNo:{'!==':filter.value}});
                    }
                }

                // Filter NewRate
                else if (filter.category == "NewRate") {
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({NewRate:{'==':filter.value}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({NewRate:{'!==':filter.value}});
                    } else if (filter.operator == "<") {
                        filteredData = filteredData.filter({NewRate:{'<':filter.value}});
                    } else if (filter.operator == "<=") {
                        filteredData = filteredData.filter({NewRate:{'<=':filter.value}});
                    } else if (filter.operator == ">") {
                        filteredData = filteredData.filter({NewRate:{'>':filter.value}});
                    } else if (filter.operator == ">=") {
                        filteredData = filteredData.filter({NewRate:{'>=':filter.value}});
                    }
                }

                // Filter MaterialGroup
                else if (filter.category == "MaterialGroup") {
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({MaterialGroup:{'==':filter.value}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({MaterialGroup:{'!==':filter.value}});
                    } else if (filter.operator == "<") {
                        filteredData = filteredData.filter({MaterialGroup:{'<':filter.value}});
                    } else if (filter.operator == "<=") {
                        filteredData = filteredData.filter({MaterialGroup:{'<=':filter.value}});
                    } else if (filter.operator == ">") {
                        filteredData = filteredData.filter({MMaterialGroup:{'>':filter.value}});
                    } else if (filter.operator == ">=") {
                        filteredData = filteredData.filter({MaterialGroup:{'>=':filter.value}});
                    }
                }

                // Filter ConditionNewRate
                else if (filter.category == "ConditionNewRate") {
                    year = filter.value.substring(0, 4);
                    if (filter.operator == "==") {
                        filteredData = filteredData.filter({ConditionNewRate:{'==':year}});
                    } else if (filter.operator == "!=") {
                        filteredData = filteredData.filter({ConditionNewRate:{'!==':year}});
                    } else if (filter.operator == "<") {
                        filteredData = filteredData.filter({ConditionNewRate:{'<':year}});
                    } else if (filter.operator == "<=") {
                        filteredData = filteredData.filter({ConditionNewRate:{'<=':year}});
                    } else if (filter.operator == ">") {
                        filteredData = filteredData.filter({ConditionNewRate:{'>':year}});
                    } else if (filter.operator == ">=") {
                        filteredData = filteredData.filter({ConditionNewRate:{'>=':year}});
                    }
                }



            }
        }


        // Get count
        var totalResults = filteredData.count();

        // Set ordering
        var ordering = "ConditionType asec";
        if (sortColumn != "") {
            ordering = sortColumn;
            if (sortAscending) {
                ordering += " asec";
            } else {
                ordering += " desc";
            }
        }
        // Get data with limits
        var results = filteredData.order(ordering).start(pageSize*page).limit(pageSize).get();

        // Taffy returns my data with "___id" and "___s" added, so delete those things.
        // (There is likely a cleaner way to do this)
        for (i = 0; i < results.length; i++) {
            delete results[i]["___id"];
            delete results[i]["___s"]
        }

        return {
            results: results,
            totalResults: totalResults,
            pageSize: pageSize
        };
    },

    getConditionTypeOptions: function() {
        return this.db().distinct("Symbol");
    },

    getPayerOptions: function() {
        return this.db().distinct("Payer");
    },

    getCustomerNoOptions: function() {
        return this.db().distinct("CustomerNo");
    },

    render: function() {
        return (<div/>);
    }
});

module.exports = ExampleData;
