import React from "react";
import './frame.less';

class FrameBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className={`${'frame-body'}`}>

            </div>
        )
    }
}

module.exports = FrameBody;