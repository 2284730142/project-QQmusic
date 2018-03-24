import React from "react";

import './frameBody.less';
import '../../../global/css/theme.less';

import BodyOne from './body/BodyOne';
import BodyTwo from './body/BodyTwo';
import BodyThree from './body/BodyThree';

class FrameBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const renderItem = [<BodyOne key={0}/>, <BodyTwo key={1}/>, <BodyThree key={2}/>];
        const renderId = this.props.bodyState;
        return (
            <div className={`${'frame-body'}`}>
                {renderItem.filter(function (currentValue, index, arr) {
                    return index === renderId;
                })}
            </div>
        )
    }
}

module.exports = FrameBody;