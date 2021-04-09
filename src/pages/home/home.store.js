import { makeAutoObservable } from 'mobx'

export class HomeStore {
    state = {
    }
    constructor() {
        makeAutoObservable(this)
    }

}