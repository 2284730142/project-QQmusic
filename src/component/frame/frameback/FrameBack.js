import React from 'react';

import './frameBack.less';
import '../../../global/css/theme.less';
import '../../../global/css/iconfont.less';

class FrameBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${'frame-back'}`}
                 style={{
                     zIndex: this.props.open ? '100' : '-1',
                     opacity: this.props.open ? '0.4' : '0'
                 }}
                 onClick={() => {
                     this.props.closeBack();
                     this.props.closePlus();
                     this.props.closeDrag();
                 }}>
            </div>
        )
    }
}

module.exports = FrameBack;