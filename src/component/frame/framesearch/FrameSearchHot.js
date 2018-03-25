import React, {Component} from 'react';

import './frameSearch.less';
import '../../../global/css/theme.less';

class FrameSearchHot extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const hot = ['歌手第二季', '起风了', 'BIGBANG', '在人间', '易燃易爆炸', 'DJ', '男孩'];
        return (
            <div className={`${'frame-search-hot'}`}>
                <div className={`${'title'}`}>
                    热门搜索
                </div>
                <div className={`${'main'}`}>
                    <div className={`${'main-container'}`}>
                        {
                            hot.map((item, id) => {
                                return (
                                    <div key={id}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = FrameSearchHot;