import React from 'react';

import './frame.less';
import '../../global/css/theme.less';

import FrameBody from './FrameBody';
import FrameDrag from './FrameDrag';

class Frames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dragOpen: false};
        this.openDrag = this.openDrag.bind(this);
    }

    openDrag() {
        this.setState({dragOpen: true});
    }

    render() {
        return (
            <div className={`${'frame'}`}>
                <div className={`${'frame-head'}`}>
                    <button onClick={this.openDrag}>open</button>
                </div>
                <FrameBody/>
                <FrameDrag
                    open={this.state.dragOpen}
                />
            </div>
        )
    }
}

module.exports = Frames;