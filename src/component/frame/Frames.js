import React from 'react';

import './frame.less';
import '../../global/css/theme.less';

import FrameBody from './FrameBody';
import FrameDrag from './FrameDrag';
import FrameMusic from './FrameMusic';

class Frames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dragOpen: false};
        this.openDrag = this.openDrag.bind(this);
        this.closeDrag = this.closeDrag.bind(this);
    }

    openDrag() {
        this.setState({dragOpen: true});
    }

    closeDrag() {
        this.setState({dragOpen: false});
    }

    render() {
        return (
            <div className={`${'frame'}`}>
                <div className={`${'frame-head'}`}>
                    <div className={`${'frame-head-top'}`}>
                        <button onClick={this.openDrag}
                                className={`${'frame-head-top-open'}`}>
                            ~
                        </button>
                        <div className={`${'frame-head-top-center'}`}>
                            <div className={`${'frame-head-item'} ${'active'}`}>我的</div>
                            <div className={`${'frame-head-item'}`}>音乐馆</div>
                            <div className={`${'frame-head-item'}`}>发现</div>
                        </div>
                        <button className={`${'frame-head-top-plus'}`}>
                            +
                        </button>
                    </div>
                    <div className={`${'frame-head-bottom'}`}>
                        <div>搜索</div>
                    </div>
                </div>
                <FrameBody/>
                <FrameDrag
                    open={this.state.dragOpen}
                    closeDrag={this.closeDrag}
                />
                <FrameMusic/>
            </div>
        )
    }
}

module.exports = Frames;