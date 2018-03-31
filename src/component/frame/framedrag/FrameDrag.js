import React from "react";

import './frameDrag.less';
import '../../../global/css/theme.less';
import '../../../global/css/iconfont.less';

import FrameDragSelect from './FrameDragSelect';

class FrameDrag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className={`${'frame-drag'}`}
                 style={{left: this.props.open ? 0 : '-7.5rem'}}
            >
                <div className={`${'frame-drag-main'}`}>
                    <div className={`${'frame-drag-main-item'}`}>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        个性装扮
                        <span>
                            默认套装
                        </span>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        消息中心
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        免流量服务
                        <span>
                            王卡听歌免流量
                        </span>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        定时关闭
                        <span>
                            <FrameDragSelect
                                name={'TimingClosure'}
                            />
                        </span>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        仅Wi-Fi联网
                        <span>
                            <FrameDragSelect
                                name={'onlyWiFi'}
                            />
                        </span>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        流量提醒
                        <span>
                            <FrameDragSelect
                                name={'TrafficReminding'}
                            />
                        </span>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        听歌偏好
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        微云音乐网盘
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        导入外部歌单
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        清理空间
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        帮助与反馈
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                        关于QQ音乐
                    </div>
                    <div className={`${'frame-drag-main-item'}`}>
                    </div>
                    <div className={`${'frame-drag-main-bottom'}`}>
                        <div className={`${'set'}`}>
                            <span className={`${'icon-shezhi'}`}>
                            </span>
                            设置
                        </div>
                        <div className={`${'out'}`}>
                            <span className={`${'icon-tuichu'}`}>
                            </span>
                            退出登录/关闭
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = FrameDrag;