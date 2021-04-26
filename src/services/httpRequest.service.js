import { getData } from './index'

class HttpRequest {

    getAllItemTasksService = () => {
        return getData('/allItemTasks')
    }
}

const service = new HttpRequest();

export default service;