import React from 'react';

import './framePlus.less';
import '../../../global/css/theme.less';
import '../../../global/css/iconfont.less';

class FramePlus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.listen = this.listen.bind(this);
        this.sao = this.sao.bind(this);
    }

    listen() {
        console.log('听')
    }

    sao() {
        console.log('扫')
    }

    render() {
        return (
            <div className={`${'frame-plus'}`}
                 style={{
                     zIndex: this.props.open ? '110' : '-1',
                 }}>
                <div className={`${'frame-plus-main'}`}>
                    <div className={`${'frame-plus-main-item'}`}
                         onClick={this.listen}>
                        <span className={`${'icon-xuanquyinle'}`}>
                        </span>
                        听歌识曲
                    </div>
                    <div className={`${'frame-plus-main-item'}`}
                         onClick={this.sao}>
                        <span className={`${'icon-saoyisao'}`}>
                        </span>
                        扫一扫
                    </div>
                    <div className={`${'arrow'}`}>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = FramePlus;