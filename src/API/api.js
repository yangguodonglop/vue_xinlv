// api.js
import request from '@/util/request'
 
const api= {
  // 接口1
  login(data) {
    return request('http://mapi.xinlv123.com/xltx/mobile/banner', data,'get')
  },
  // 接口2
  logout(data) {
    return request('user/logout', data)
  }
}
 
export default api
