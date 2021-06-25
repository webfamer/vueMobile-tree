import request from './request.js'

export function getGameData(data){
    return request({
        url:'/game/getGameContentList',
        method:'get',
        data:data
    })
}
export function getRankData(data){
    return request({
        url:'/game/getRank',
        method:'get',
        data:data
    })
}
export function saveResult(data){
    return request({
        url:'/game/saveResult',
        method:'post',
        data:data
    })
}
export function getName(data){
    return request({
        url:'/game/getRandomName',
        method:'get',
        data:data
    })
}
