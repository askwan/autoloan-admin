import config from './config';
import Base from './Base';

class UserServer extends Base {
  constructor(){
    super();
    this.url = config.baseUrl+'/user'
  }
  login(option){
    let formdata = this.toformdata(option);
    // this.setHeader({'content-Type':"application/x-www-form-urlencoded"})
    return new Promise((resolve,reject)=>{
      this.post('/login',formdata).then(res=>{
        if(res.status === 200){
          resolve(res.data);
        }else{
          reject(res);
        }
      }).catch(err=>reject(err));
    })
  }
  regist(option){
    let formdata = this.toformdata(option);
    // this.setHeader({'content-Type':"application/x-www-form-urlencoded"})
    return new Promise((resolve,reject)=>{
      this.post('/register',formdata).then(res=>{
        if(res.status === 200){
          resolve(res.data);
        }else{
          reject(res);
        }
      }).catch(err=>reject(err));
    })
  }
  checkToken(){

    return new Promise((resolve,reject)=>{
      this.get('/getUserInfo',{},{}).then(res=>{
        if(res.status === 200){
          resolve(res.data);
        }else{
          reject(res)
        }
      }).catch(err=>reject(err))
    })
  }
  stat(){

    return new Promise((resolve,reject)=>{
      this.get('/stat',{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err))
    })
  }
}

export default new UserServer();