import axios from 'axios';
import { message } from 'antd';

const baseURL = 'http://localhost:8080';
const reqTimeout = 3000;

async function postData(url, params) {
    try {
        const result = await axios({
            url: baseURL + url,
            params: params,
            method: 'post',
            timeout: reqTimeout
        })
        return result.data;
    } catch (error) {
        message.error("请求错误")
        return null;
    }
}

async function getData(url) {
    try {
        const result = await axios({
            url: baseURL + url,
            method: 'get',
            timeout: reqTimeout
        })
        return result.data;
    } catch (error) {
        message.error("请求错误")
        return null;
    }
}

export { postData, getData }