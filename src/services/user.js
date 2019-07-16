import config from './config';
import Base from './Base';

class UserServer extends Base {
  constructor(){
    super();
    this.url = config.baseUrl+'/user'
  }
  login(option){
    let formdata = this.toformdata(option);
    this.setHeader({'content-Type':"application/x-www-form-urlencoded"})
    return new Promise((resolve,reject)=>{
      this.post('/login',formdata).then(res=>{
        resolve(res);
      }).catch(err=>reject(err));
    })
  }
  regist(option){
    let formdata = this.toformdata(option);
    this.setHeader({'content-Type':"application/x-www-form-urlencoded"})
    return new Promise((resolve,reject)=>{
      this.post('/register',formdata).then(res=>{
        resolve(res);
      }).catch(err=>reject(err));
    })
  }
}

export default new UserServer();