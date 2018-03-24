import React from 'react';

import './framePlus.less';
import '../../../global/css/theme.less';

class FramePlus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${'frame-plus'}`}
                 style={{
                     zIndex: this.props.open ? '100' : '-1',
                     opacity: this.props.open ? '0.4' : '0'
                 }}
                 onClick={this.props.closeSearch}
            >
            </div>
        )
    }
}

module.exports = FramePlus;