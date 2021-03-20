import { makeObservable, observable } from 'mobx'

export default class AppStore {

    num = 0;

    constructor() {
        makeObservable(this);
    }
}