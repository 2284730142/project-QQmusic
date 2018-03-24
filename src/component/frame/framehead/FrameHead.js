import React from 'react';

import './frameHead.less';
import '../../../global/css/theme.less';

import FrameHeadItem from './FrameHeadItem';

class FrameHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    activeChange(id) {
        this.setState({active: id});
        this.props.bodyChange(id);
    }

    render() {
        const frameHeadItem = ['我的', '音乐馆', '发现'];

        return (
            <div className={`${'frame-head'}`}>
                <div className={`${'frame-head-top'}`}>
                    <button onClick={this.props.openDrag}
                            className={`${'frame-head-top-open'}`}>
                        ~
                    </button>
                    <div className={`${'frame-head-top-center'}`}>
                        {
                            // 这个绑定方式为了传入参数
                            frameHeadItem.map((item, id) => {
                                return (
                                    <FrameHeadItem
                                        key={id}
                                        id={id}
                                        item={item}
                                        active={this.state.active}
                                        activeChange={this.activeChange.bind(this, id)}
                                    />
                                )
                            })
                        }
                    </div>
                    <button className={`${'frame-head-top-plus'}`}
                            onClick={this.props.openPlus}
                    >
                        +
                    </button>
                </div>
                <div className={`${'frame-head-bottom'}`}>
                    <div onClick={this.props.openSearch}>搜索</div>
                </div>
            </div>
        )
    }
}

module.exports = FrameHead;