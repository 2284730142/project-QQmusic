import React, {Component} from "react";

import './frameDrag.less';
import '../../../global/css/theme.less';

class FrameDragSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${'switch-box'}`}>
                <input id={this.props.name} className={`${'switch-box-input'}`} type="checkbox"/>
                <label htmlFor={this.props.name} className={`${'switch-box-slider'}`}>
                </label>
                <label htmlFor={this.props.name} className={`${'switch-box-label'}`}>
                </label>
            </div>
        )
    }
}

module.exports = FrameDragSelect;