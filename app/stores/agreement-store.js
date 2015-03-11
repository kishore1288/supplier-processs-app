

/** @jsx React.DOM */
var React = require('react');
var AppDispatcher = require('app/dispatchers/srchappdispatcher');
var AppConstants = require('app/constants/srchappconstants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var STATUS_UPDATE= 'change';
var _agrmntList = [
    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    },

    {
        agrid: 'agr1110',
        agrprice: '3000',
        agrdesc:'agreement is op to date',
        agrcrncy:'USD'
    }
];

var SearchResults = React.createClass({

    mixins: [reactAsync.Mixin, Reflux.ListenerMixin],

    getInitialStateAsync: function (cb) {
        AppActions.searchUpdate(this.props.query)
        AppStore.listen(function (data) {
            try {
                return cb(null, {
                    searchString: data.searchString,
                    searchResults: data.searchResults
                })
            } catch (err) {
                console.log(err)
            }
        })
    },

    componentDidMount: function () {
        this.listenTo(AppStore, this.refreshSearch)
    },

    componentWillReceiveProps: function (nextProps) {
        if (typeof(nextProps.query) !== "undefined") {
            AppActions.searchUpdate(nextProps.query)
        }
    },

    refreshSearch: function (data) {
        this.setState({
            searchString: data.searchString,
            searchResults: data.searchResults
        })
    },

    render: function () {
        if (this.state.searchResults.length) {
            var results = []
            this.state.searchResults.forEach(function (agrmnt) {
                if (agrmnt.uid) {

                    results.push(<div key={agrmnt.uid} className="search-result clearfix">
                        <p className="searchagid"></p>
                        <p className="search-agmoney"></p>
                        <p className="search-desck"></p>
                        <p className="search-agcrncy"></p>
                    </div>)
                }
            })
        } else {
            var results = <div className="no-results">No Agreements Matching '{this.state.searchString}'</div>
        }
        var searchTitle = 'Search: ' + this.state.searchString
        return (
            <DocumentTitle title={searchTitle}>
                <div className="search-results clearfix">
                    <ReactCSSTransitionGroup transitionName="css-transition">
            {results}
                    </ReactCSSTransitionGroup>
                </div>
            </DocumentTitle>
        )
    }

});


module.exports = SearchResults
