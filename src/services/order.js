import config from './config';
import Base from './Base';

class OrderServer extends Base {
  constructor(){
    super();
    this.url = config.baseUrl+'/order'
  }
  query(option){
    return new Promise((resolve,reject)=>{
      this.get('/query',option).then(res=>{
        console.log(resolve);
      }).catch(err=>reject(err));
    })
  }
}

export default new OrderServer();