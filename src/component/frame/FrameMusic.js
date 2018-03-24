import React from 'react';

import './frame.less';
import '../../global/css/theme.less';

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
                    *
                </div>
                <div className={`${'frame-music-menu'}`}>
                    ∧
                </div>
            </div>
        )
    }
}

module.exports = FrameMusic;