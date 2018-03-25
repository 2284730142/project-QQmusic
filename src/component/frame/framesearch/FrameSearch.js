import React from 'react';

import './frameSearch.less';
import '../../../global/css/theme.less';
import '../../../global/css/iconfont.less';

import FrameSearchHot from './FrameSearchHot';
import FrameSearchHistory from './FrameSearchHistory';

class FrameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchHistory: []
        };
        this.speak = this.speak.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.deleteTarget = this.deleteTarget.bind(this);
    }

    speak() {
        // 语音录入按钮
    }

    search(e) {
        this.setState({searchValue: e.target.value});
    }

    saveHistory(e) {
        if (e.keyCode === 13) {
            if (this.state.searchValue.length > 0) {
                if (localStorage.getItem('searchHistory')) {
                    const searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
                    searchHistory.push(this.state.searchValue);
                    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                } else {
                    localStorage.setItem('searchHistory', JSON.stringify([this.state.searchValue]));
                }
                this.props.closeSearch();
                this.setState({
                    searchValue: '',
                    searchHistory: JSON.parse(localStorage.getItem('searchHistory'))
                });
            } else {
                alert('搜索内容不能为空');
            }
        }
    }

    clearHistory() {
        if (confirm('确认清空历史？')) {
            localStorage.clear('searchHistory');
            this.setState({searchHistory: []});
        }
    }

    deleteTarget(id) {
        if (confirm('删除此条记录？')) {
            const searchHistory = JSON.parse(localStorage.getItem('searchHistory')).filter((item, selfId) => {
                return selfId !== id;
            });
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            this.setState({
                searchHistory: JSON.parse(localStorage.getItem('searchHistory'))
            });
        }
    }


    componentWillMount() {
        if (localStorage.getItem('searchHistory')) {
            this.setState({
                searchHistory: JSON.parse(localStorage.getItem('searchHistory'))
            });
        }
    }

    render() {
        return (
            <div className={`${'frame-search'}`}
                 style={{top: this.props.open ? 0 : '13.33rem'}}>
                <div className={`${'frame-search-head'}`}>
                    <div className={`${'back'} ${'icon-zhixiangzuo'}`}
                         onClick={this.props.closeSearch}>
                    </div>
                    <div className={`${'input'}`}>
                        <input type="text"
                               value={this.state.searchValue}
                               placeholder={'搜索音乐、MV、歌单、用户'}
                               onChange={(e) => this.search(e)}
                               onKeyDown={(e) => this.saveHistory(e)}/>
                    </div>
                    <div className={`${'speak'} ${'icon-yuyin'}`}
                         onClick={this.speak}>
                    </div>
                </div>
                <FrameSearchHot/>
                <FrameSearchHistory
                    searchHistory={this.state.searchHistory}
                    clearHistory={this.clearHistory}
                    deleteTarget={this.deleteTarget}
                />
            </div>
        )
    }
}

module.exports = FrameSearch;