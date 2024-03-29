import config from './config';
import Base from './Base';
import {OrderInfo} from './mode'
class OrderServer extends Base {
  constructor(){
    super();
    this.url = config.baseUrl+'/order'
  }
  query(option){
    return new Promise((resolve,reject)=>{
      Object.assign(option,{loadBaseInfo:true})
      this.get('/query',option).then(res=>{
        this._handle(resolve,reject,res,OrderInfo);
      }).catch(err=>reject(err));
    })
  }
  repulse(option){
    return new Promise((resolve,reject)=>{
      let formdata = this.toformdata(option)
      this.post('/repulse',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err))
    })
  }
  pass(option){
    return new Promise((resolve,reject)=>{
      let formdata = this.toformdata(option)
      this.post('/pass',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  exportOrder(option={}){
    let defalutOption = {
			loadBaseInfo:true
		}
    let obj = Object.assign({},defalutOption,option);
    return new Promise((resolve,reject)=>{
      this.get('/export',obj).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  deleteOrder(option={}){
    return new Promise((resolve,reject)=>{
      let formdata = this.toformdata(option);
      this.post('/delete',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}

export default new OrderServer();