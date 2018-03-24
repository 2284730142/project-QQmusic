import React from 'react';

import './frameSearch.less';
import '../../../global/css/theme.less';

class FrameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${'frame-search'}`}
                 style={{top: this.props.open ? 0 : '13.33rem'}}
            >
                <button onClick={this.props.closeSearch}>close</button>
            </div>
        )
    }
}

module.exports = FrameSearch;