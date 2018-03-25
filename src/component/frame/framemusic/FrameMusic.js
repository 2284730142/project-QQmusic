import React from 'react';

import './frameMusic.less';
import '../../../global/css/theme.less';
import '../../../global/css/iconfont.less';

class FrameMusic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${'frame-music'}`}>
                <div className={`${'frame-music-img'}`}>
                    <img src="src/img/293317914359799776.jpg"
                         alt=""/>
                </div>
                <div className={`${'frame-music-name'}`}>
                    MOMOENT
                </div>
                <div className={`${'frame-music-singer'}`}>
                    白色限购
                </div>
                <div className={`${'frame-music-op'}`}>
                    <span className={`${'icon-bofang'}`}>
                    </span>
                </div>
                <div className={`${'frame-music-menu'}`}>
                    <span className={`${'icon-zhankaicaidan'}`}>
                    </span>
                </div>
            </div>
        )
    }
}

module.exports = FrameMusic;