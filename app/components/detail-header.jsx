
/** @jsx React.DOM */
var React = require('react')
var Details = require('app/components/detailsagrementpage');
var Actions=require('app/actions/loaddetail')
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');
var DetailsHeader = React.createClass({
    render: function () {
        return this.transferPropsTo (
            <Container id ="container">
                <div id="detailspage">
                    <Grid>
                        <Row>

                            <Row>
                                <Col xs={8} md={10} visible='xs'>
                                    <h3> Agreement Details{this.state.version}</h3>
                                </Col>
                                <Col xs={4} md={2} >
                                    <img src='images/v-img.png' alt='vstxlogo'/>
                                </Col>

                            </Row>
                            <Row>
                                <Col xs={8} md={10} visible='xs'>
                                    <p class="agrid text-left"></p></br>
                                <p class="agrdesc text-left"></p>
                                <p class="agrdate text-left"></p>
                            </Col>
                            <Col xs={4} md={10} sm={4}>
                                <p class="agrprice text-left"></p></br>
                            <p class="agrcrncy text-right"></p>
                            <p class="agrstatus text-right"></p>
                        </Col>
                    </Row>

                </Grid>


            </Container>
        );
    }
});



module.exports = DetailsHeader;

