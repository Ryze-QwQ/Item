import { makeAutoObservable } from 'mobx';
import { projectStatus } from '../../../definition';

class ProjectStore {
    data = {
        inProcessItems: [
            {
                id: '1',
                name: '369安全卫士',
                featureOwner: 'honji.liu',
                description: '描述...',
                tasks: [
                    {
                        id: '1',
                        title: '病毒查杀',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.PENDING,
                        level: 1,
                        type: 1
                    },
                    {
                        id: '2',
                        title: '病毒查杀',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.INPROCESS,
                        level: 2,
                        type: 2
                    }
                ]
            },
            {
                id: '2',
                name: '团队项目管理系统',
                featureOwner: '开发负责人',
                description: '描述...',
                tasks: [
                    {
                        id: '1',
                        title: '病毒查杀',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.BLOCKED,
                        level: 3,
                        type: 1
                    },
                    {
                        id: '2',
                        title: '病毒查杀',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.FINISHED,
                        level: 3,
                        type: 2
                    }
                ]
            }
        ],
        finishItems: [
            {
                id: '1',
                name: '369安全卫士',
                featureOwner: '开发负责人',
                description: '描述...',
                tasks: [
                    {
                        id: '1',
                        title: '表格数据不更新',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.FINISHED,
                        level: 3,
                        type: 1
                    },
                    {
                        id: '2',
                        title: '病毒查杀',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.FINISHED,
                        level: 3,
                        type: 1
                    }
                ]
            },
            {
                id: '2',
                name: '团队项目管理系统',
                featureOwner: '开发负责人',
                description: '描述...',
                tasks: [
                    {
                        id: '1',
                        title: '密码修改失败',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.FINISHED,
                        level: 2,
                        type: 1
                    },
                    {
                        id: '2',
                        title: '项目管理模块开发',
                        owner: 'hongji.liu',
                        startTime: '2021-04-17',
                        spendDay: '8d',
                        usedDay: '5d',
                        status: projectStatus.FINISHED,
                        level: 2,
                        type: 2
                    }
                ]
            }
        ]
    }
    constructor() {
        makeAutoObservable(this)
    }

}

export default ProjectStore;