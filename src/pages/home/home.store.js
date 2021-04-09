import { makeAutoObservable, action } from 'mobx'

export class HomeStore {
    navTitles = ['任务清单', '团队任务', '数据统计', '个人中心'];
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