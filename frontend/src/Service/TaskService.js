import axios from 'axios'
import { compose } from 'redux';
import { url } from './UrlManageMent';






// here is functions for calling api of task crud .........................



export async function save(userdata, token) {
    console.log(token)
    let userdetails = localStorage.getItem("data")
    userdetails = JSON.parse(userdetails)
    userdata = { ...userdata, userid: userdetails.userdetails._id }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    console.log(headers)
    const resp = await axios.post(`${url.BASE_URL}/save/task`, userdata,
        { headers: headers })
    return resp
}
export function GetTask(id , token ) {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    console.log(id)
    return axios.get(url.BASE_URL + '/fetch/task/' + id , {headers : headers});
}
export function DeleteTask(id) {
    return axios.delete(url.BASE_URL + '/task/delete/' + id);
}
export function incompleated() {
    return axios.get(url.BASE_URL + '/incompleated');
}
export function TotalCount() {
    return axios.get(url.BASE_URL + '/count/task/all');
}

export function MarkAscompleated(id) {
    return axios.put(url.BASE_URL + '/task/mark-complete/' + id);
}

// here we are calling apis  for user regisration and authentication  

export function Registeruser(data) {
    return axios.post(url.BASE_URL + '/user/savedata', data)

}


export function Login(data) {
    return axios.post(url.BASE_URL + '/user/auth', data)
}










