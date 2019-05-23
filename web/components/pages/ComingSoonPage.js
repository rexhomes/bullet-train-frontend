import React, { Component, PropTypes } from 'react';

const ComingSoon = class extends Component {
    static displayName = 'ComingSoon'

    componentWillMount() {
        API.trackPage(Constants.pages.COMING_SOON);
    }

    render() {
        return (
            <div className="app-container container">
                <h3>Coming Soon</h3>
            </div>
        );
    }
};

ComingSoon.propTypes = {};

module.exports = ComingSoon;
