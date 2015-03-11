

/** @jsx React.DOM */
var React = require('react');
var Details = require('app/components/detailsagreementpage');
var Sidebar = require('app/components/agreement');
var Footer = require('app/components/footer');
// Our custom component is managing whether the Modal is visible
var AgrSaveBox = React.createClass({
    getInitialState: function () {
        return {
            isModalOpen: false
        };
    },

    handleToggle: function () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },

    render: function () {
        return (
            <Button onClick={this.handleToggle} bsStyle="primary">Save Agreement</Button>
        );
    },

    // This is called by the `OverlayMixin` when this component
    // is mounted or updated and the return value is appended to the body.
    renderOverlay: function () {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <Container>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <Modal>
                                <ModalHeader>
                                </ModalHeader>
                                <ModalBody>
                                    Do want to Save Agreement
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={this.handleToggle}>Cancel</Button>
                                    <Button onClick={this.handleToggle}>Save</Button>
                                </ModalFooter>
                            </Modal>
                        </Col >

                    </Row>
                </Grid>
            </Container>
        );
    }
});

module.exports = AgrSaveBox;