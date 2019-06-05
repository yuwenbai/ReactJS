import axios from 'axios'
let http = {
    post: '',
    get: ''
}
http.post = function(url, data){
    let params = JSON.stringify(data);
    return new Promise((resolve,reject) => {
        axios.post(url, params).then((res) => {
            resolve(res)
        })
    })
}
http.get = function(url,data){
    let params = JSON.stringify(data);
    return new Promise((resolve,reject) => {
        axios.get(url, params).then((res) => {
            resolve(res)
        })
    })
}
export default http;