

/** @jsx React.DOM */
var React = require('react');
var React = require('react/addons');
var Sidebar = require('app/components/agreement');
var Action=require('app/actions/loadagreement')
var reactAsync = require('react-async');
var Link = require('react-router-component').Link

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var AppDispatcher = require('js/Dispatchers/srchappdispatcher');
var AppConstants = require('js/constants/srchappconstants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

debugger;
/**
 * Created by kishore.vuyyala on 12/16/2014.
 */
/** @jsx React.DOM */
var Sidebar = React.createClass({
    filterList: function(event){
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    getInitialState: function(){
        return {
            initialItems: [
                {"argId":"RT12345","argPrice":1000,"argDesc":"sample","argCurr":"USD"},{"argId":"KT345678","argPrice":10001,"argDesc":"sample","argCurr":"USD"},{"argId":"U87890","argPrice":2000,"argDesc":"sample","argCurr":"USD"},{"argId":"KT345678","argPrice":10001,"argDesc":"sample","argCurr":"USD"},{"argId":"LK8907","argPrice":1700,"argDesc":"YUG","argCurr":"USD"}

            ],
            items: []
        }
    },
    componentWillMount: function(){
        this.setState({items: this.state.initialItems})
    },
    refreshSearch: function (e) {
        this.setState({
            searchString: e.searchString,
            searchResults: e.searchResults
        })
    },
    onChange: function(e){
        this.setState({
            currentInput: e.target.value
        });
    },

    //submit on enter
    onKeyPress: function(e){
        // console.log('onKeyPress');
        if(event.which === 2){
            this.onSubmit();
        }
    },

    onSearchChange: function(e){
        this.setState({
            query: e.target.value
        });
    },
    render: function(){
        return (
            <Container id='container'>
                <Grid>
                    <Row>
                        <Col  xs={12} md={3} collapseLeft>

                            <div className="filter-list">
                                <input type="text" placeholder="Search" onChange={this.filterList}/>
                                <button class="btn btn-default" type="button" ><i  class="glyphicon glyphicon-search"></i></button>
                                <button class="btn btn-default" type="button" ><i  class="glyphicon glyphicon-refresh"></i></button>


                                <List items={this.state.items}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Container>

        );
    }
});

var List = React.createClass({
    render: function(){
        return (
            <Grid>
                <Row>
                    <Col  xs={12} md={3} collapseLeft>
                        <ul>
      {
          this.props.items.map(function(item) {
              return <li key={item}>{item}</li>
          })
          }
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col   md={6} text-left >
                        <Button onClick={this.handleToggle}> <img src='images/arrow.jpg' alt='clpseleft'/></Button>
                    </Col>
                    <Col   md={3} text-right >
                        <Button onClick={this.handleToggle}> <img src='images/simble.jpg' alt='clsprvw'/></Button>
                    </Col>

                    <Col   md={3} text-right >
                        <Button onClick={this.handleToggle}> <img src='images/plus.jpg' alt='crteagr'/></Button>
                    </Col>
                </Row>
            </Grid>


        )
    }
});


module.exports =Sidebar;



