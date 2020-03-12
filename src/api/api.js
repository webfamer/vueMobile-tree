import request from './request.js'

function checkTel(data){
    return request({
        url:'/api/register/'+data,
        method:'get',
    })
}
function getVerifyCode(data){
    return request({
        url:'/api/register/verifyCode/'+data,
        method:'get',
    })
}
function register(data){
    return request({
        url:'/api/register',
        method:'post',
        data
    })
}
function changePassword(data){
    return request({
        url:'/api/register',
        method:'put',
        data
    })
}
function login(data){
    return request({
        url:'/api/login',
        method:'post',
        data
    })
}
function getUserInfo(data){
    return request({
        url:'/api/user',
        method:'get',
        data
    })
}

function changeName(data){
    return request({
        url:'/api/user/username',
        method:'put',
        data
    })
}


export default{
    checkTel,getVerifyCode,register,changePassword,login,getUserInfo, changeName
}