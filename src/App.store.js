import { makeObservable, observable, action } from 'mobx'

export default class AppStore {

    @observable
    num = 0;

    constructor() {
        makeObservable(this);
    }

    @action
    addNum = () => {
        this.num++;
    }
}