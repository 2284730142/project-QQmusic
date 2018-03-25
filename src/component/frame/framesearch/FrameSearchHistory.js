import React, {Component} from 'react';

import './frameSearch.less';
import '../../../global/css/theme.less';
import '../../../global/css/iconfont.less';

class FrameSearchHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${'frame-search-history'}`}
                 style={{display: this.props.searchHistory.length > 0 ? 'block' : 'none'}}>
                <div className={`${'title'}`}>
                    <span>
                        搜索历史
                    </span>
                    <span onClick={this.props.clearHistory}>
                        清空历史
                    </span>
                </div>
                <div className={`${'main'}`}>
                    {
                        this.props.searchHistory.map((item, id) => {
                            return (
                                <div className={`${'item'}`}
                                     key={id}>
                                    <span>
                                        {item}
                                    </span>
                                    <span className={`${'icon-chacha'}`}
                                          onClick={this.props.deleteTarget.bind(this, id)}>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

module.exports = FrameSearchHistory;