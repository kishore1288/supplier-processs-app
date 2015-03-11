
/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagrementpage');
var AgrTabs=require('app/components/detail-navtabs')
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');

var DataStore = require('app/stores/AGRRULESDATASTORE');
var ViewActionCreators = require('app/actions/agrrulesactionscreation');



function getStateFromStore() {
    return { data: DataStore.getData() };
}

var AGRTable = React.createClass({
    keys: [ 'Condition Type', 'Payer', 'Customer Number','Material Number', 'Material Group ', 'New Rate', 'Condition Price','Material Description',],

    columns: [
        { title: 'Condition Type', prop: 'CONDITION TYPE'  },
        { title: 'Payer', prop: 'PAYER' },
        { title: 'Customer Number', prop: 'CUSTOMER NUMBER' },
        { title: 'Material Number', prop: 'MATERIAL NUMBER' },
        { title: 'Material Group',   prop: 'MATERIAL GROUP' },
        { title: 'New Rate', prop: 'NEW RATE' },
        { title: 'Condition Price', prop: 'CONDITION PRICE' },
        { title: 'Material Description', prop: 'MATERIAL DESCRIPTION' },
    ],

    getInitialState() {
        return getStateFromStore();
    },

    componentWillMount() {
        DataStore.addChangeListener(this.handleStoreChange);
    },

    componentWillUnmount() {
        DataStore.removeChangeListener(this.handleStoreChange);
    },

    handleStoreChange() {
        this.setState(getStateFromStore());
    },

    render() {
        var {data} = this.state;

        return (
            <Container id ="container">
                <Grid>
                    <Row>
                        <Col  md={6} text-left>
                            <Label bsStyle="default">Default</Label>
                        </Col>
                        <Col  md={6} text-right>
                            <Button bsStyle="primary" bsSize="sm" active  onClick={this.handleToggle}>Create Rule</Button>

                        </Col>


                    </Row>
                    <Row>
                        <Col  md={9} visible='xs'>
                            <h2>Example stock data</h2>
                            <ExampleTable/>
                            <hr/>
                            <Table
                                className="table table-bordered"
                                columns={this.columns}
                                keys={this.keys}
                                dataArray={data.page}
                                sortBy={data.sortBy}
                                onSort={AGRRULESDATASTORE.sort}
                            />

                        </Col>

                    </Row>
                    <Row>
                        <Col  md={9} visible='xs' text-right>
                            <p><a href="#"> <Button sm outlined style={{marginBottom: 5}} bsStyle='default'>Clause Prievew</Button>{' '}</a> </p>
                            <p><a href="#"> <Button sm outlined style={{marginBottom: 5}} bsStyle='primary'>Save Agreement</Button>{' '}</a> </p>

                        </Col>

                    </Row>




                </Grid>
            </Container>

        );
    }

});

module.exports = AGRTable;

