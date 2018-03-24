import React from "react";
import './frame.less';

class FrameDrag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.closeDrag = this.closeDrag.bind(this);
    }

    closeDrag(){

    }

    render() {

        return (
            <div className={`${'frame-drag'}`} style={{left: this.props.open ? 0 : '-7.5rem'}}>
                <button onClick={this.closeDrag}>close</button>
            </div>
        )
    }
}

module.exports = FrameDrag;