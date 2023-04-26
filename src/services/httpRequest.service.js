import { getData, postData } from './index'

class HttpRequest {

    getAllItemTasksService = () => {
        return getData('/allItemTasks')
    }

    changeTaskStatus = (params) => {
        return postData('/changeStatus', params)
    }

    getAllProjects = () => {
        return getData('/allProjects')
    }

    getAllUserName = () => {
        return getData('/allUserName')
    }

    createTask = (params) => {
        return postData('/createTask', params)
    }
}

const service = new HttpRequest();

export default service;