import React from 'react';

import './frameHead.less';
import '../../../global/css/theme.less';

class FrameHeadItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${'frame-head-item'} ${this.props.id === this.props.active ? 'active' : ''}`}
                 onClick={this.props.activeChange}>
                {this.props.item}
            </div>
        )
    }
}

module.exports = FrameHeadItem;