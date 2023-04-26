import { makeAutoObservable, runInAction, action } from 'mobx';
import service from '@/services/httpRequest.service';
import { projectStatus } from '../../../definition';

export class DashboardStore {
    state = {
        allTasks: [],
        pendingTask: [
            // { key: '1', id: '1', title: '3D地球可交互预研', owner: 'hongji.liu', belongItem: 'xxx项目2.0.0', type: 1, level: 1 },
            // { key: '2', id: '2', title: '病毒查杀', owner: 'hongji.liu', belongItem: 'xxx项目2.0.0', type: 1, level: 2 }
        ],
        inProcessTask: [],
        blockedTask: [],
        finishedTask: [],
        allProjects: [],
        allUserName: [],
        formData: {
            title: '',
            owner: '',
            projectId: '',
            type: 1,
            level: 1,
            spendDay: 3,
            description: '',
            status: 1
        }
    }
    constructor() {
        makeAutoObservable(this)
        this.getAllItemTasks();
        this.getAllProjects();
        this.getAllUsers();
    }
    @action
    getAllItemTasks = () => {
        service.getAllItemTasksService().then(res => {
            runInAction(() => {
                if (res && res.data) {
                    this.state.allTasks = res.data.map(item => {
                        item.key = item.id;
                        return item;
                    });
                    this.sortTasks(this.state.allTasks);
                }
            })
        });
    }
    changeTaskStatus = (id, status) => {
        service.changeTaskStatus({ id, status });
    }
    getAllProjects = () => {
        service.getAllProjects().then(res => {
            runInAction(() => {
                if (res && res.data) {
                    this.state.allProjects = res.data;
                }
            })
        })
    }
    getAllUsers = () => {
        service.getAllUserName().then(res => {
            runInAction(() => {
                if (res && res.data) {
                    this.state.allUserName = res.data;
                }
            })
        })
    }
    createTask = () => {
        const { title, owner, spendDay, status, level, type, projectId } = this.state.formData;
        const req = {
            title,
            owner,
            spendDay,
            status,
            level,
            type,
            projectId
        }
        service.createTask(req).then(res => {
            if (res && res.success) {
                this.getAllItemTasks();
            }
        })
        this.clearFormData();
    }
    removePendingItem = (id) => {
        this.state.pendingTask = this.state.pendingTask.filter(item => item.id !== id);
    }
    appendInProcess = (item) => {
        this.changeTaskStatus(item.id, 2);
        this.state.inProcessTask.push(item);

    }
    appendFinished = (item) => {
        this.changeTaskStatus(item.id, 4);
        this.state.finishedTask.push(item);
    }
    appendInBlocked = (item) => {
        this.changeTaskStatus(item.id, 3);
        this.state.blockedTask.push(item);
    }
    removeInProcess = (id) => {
        this.state.inProcessTask = this.state.inProcessTask.filter(item => item.id !== id);
    }
    removeBlocked = (id) => {
        this.state.blockedTask = this.state.blockedTask.filter(item => item.id !== id);
    }
    @action
    sortTasks = (tasks) => {
        this.state.pendingTask = tasks.filter(item => item.status === projectStatus.PENDING);
        this.state.inProcessTask = tasks.filter(item => item.status === projectStatus.INPROCESS);
        this.state.blockedTask = tasks.filter(item => item.status === projectStatus.BLOCKED);
        this.state.finishedTask = tasks.filter(item => item.status === projectStatus.FINISHED);
    }
    handleChange = (key) => {
        return (value) => {
            this.state.formData[key] = value;
        }
    }
    handleInputChange = (e, key) => {
        this.state.formData[key] = e.target.value;
    }
    clearFormData = () => {
        this.state.formData.projectId = '请选择'
    }
}