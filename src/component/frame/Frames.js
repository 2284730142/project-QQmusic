import React from 'react';

import './frame.less';
import '../../global/css/theme.less';

import '../../global/js/screenFix';

import FrameHead from './framehead/FrameHead';
import FrameBody from './framebody/FrameBody';
import FrameDrag from './framedrag/FrameDrag';
import FrameMusic from './framemusic/FrameMusic';
import FrameSearch from './framesearch/FrameSearch';
import FramePlus from './frameplus/FramePlus';
import FrameBack from './frameback/FrameBack';

class Frames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dragOpen: false,
            searchOpen: false,
            plusOpen: false,
            backOpen: false,
            bodyState: 0
        };
        this.openDrag = this.openDrag.bind(this);
        this.closeDrag = this.closeDrag.bind(this);
        this.openSearch = this.openSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.openPlus = this.openPlus.bind(this);
        this.closePlus = this.closePlus.bind(this);
        this.openBack = this.openBack.bind(this);
        this.closeBack = this.closeBack.bind(this);
        this.bodyChange = this.bodyChange.bind(this);
    }

    openDrag() {
        this.setState({dragOpen: true});
    }

    closeDrag() {
        this.setState({dragOpen: false});
    }

    openSearch() {
        this.setState({searchOpen: true});
    }

    closeSearch() {
        this.setState({searchOpen: false});
    }

    openPlus() {
        this.setState({plusOpen: true});
    }

    closePlus() {
        this.setState({plusOpen: false});
    }

    openBack() {
        this.setState({backOpen: true});
    }

    closeBack() {
        this.setState({backOpen: false});
    }

    bodyChange(id) {
        this.setState({bodyState: id});
    }

    render() {
        return (
            <div className={`${'frame'}`}>
                <FrameHead openDrag={this.openDrag}
                           openSearch={this.openSearch}
                           openPlus={this.openPlus}
                           openBack={this.openBack}
                           bodyChange={this.bodyChange}/>
                <FrameBody bodyState={this.state.bodyState}/>
                <FrameDrag open={this.state.dragOpen}/>
                <FrameMusic/>
                <FrameSearch open={this.state.searchOpen}
                             closeSearch={this.closeSearch}/>
                <FramePlus open={this.state.plusOpen}/>
                <FrameBack open={this.state.backOpen}
                           closeBack={this.closeBack}
                           closePlus={this.closePlus}
                           closeDrag={this.closeDrag}/>
            </div>
        )
    }
}

module.exports = Frames;