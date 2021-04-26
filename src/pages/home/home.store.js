import { makeAutoObservable, action } from 'mobx'

export class HomeStore {
    navTitles = ['我的任务', '冲刺面板', '项目总览', '数据统计', '个人中心'];
    state = {
        currentTitle: this.navTitles[0]
    }
    constructor() {
        makeAutoObservable(this)
    }
    @action
    getCurrentTitle = (title) => {
        this.state.currentTitle = title;
    }
}