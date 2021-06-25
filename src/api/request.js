import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  // baseURL: '/api',
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    if(window.localStorage.getItem('token')){
      config.headers.common['token'] = window.localStorage.getItem('token')
    }
console.log(config,"config")
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if(res.tokenCode ==5000){
    //   Message({
    //     message:'登陆超时，请重新登陆',
    //     type:'error',
    //     duration:3*1000
    //   })
    //   //清楚本地数据
    //   removeToken();
    //   router.replace({path:'/login'});
    //   return Promise.reject()
    // }else{
    //   return res
    // }
console.log(res,'res')
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

// 请求分为get/post
// axios对于get和post的参数的处理方式是不同的
function http(config){
  if(config.method.toLowerCase() === 'post'){
    // 针对对象 是无法直接处理的 ; qs是一个js库,可以方便的对对象进行序列化处理
    // myAjax  {name:'zx',age:20} ==> name=zs&age=20
    // config.data = qs.stringify(config.data,{arrayFormat: 'repeat',allowDots: true});
    // console.log(config.data,'config.data')
    config.data = config.data;
  }else{
    config.params = config.data;
  }
  return service(config);
}


export default http
