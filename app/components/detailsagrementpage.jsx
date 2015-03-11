
/** @jsx React.DOM */
var React = require('react');
var Sidebar = require('app/components/agreement');
var AgrTabs=require('app/components/detail-navtabs')
var DetailsHeader=require('app/components/detail-header')
var AgrTabs=require('app/components/detail-navtabs')
var Footer=require('app/components/footer')

var Details = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <Container>
                <Grid>
                    <Row>
                        <Col md={9}>
                            <DetailsHeader/>
                        </Col >
                   </Row>
                    <Row>
                        <Col md={9}>
                            <DetailsHeader/>
                        </Col >
                    </Row>
                    <Row>
                        <Col md={9}>
                            <DetailsHeader/>
                            <AgrTabs/>
                            <TabsContent/>
                            <Footer />
                        </Col >
                    </Row>
                </Grid>
            </Container>
        );
    }
});

module.exports = Details;
