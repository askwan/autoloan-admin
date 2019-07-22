export default class Base {
  constructor(){
    this.app = 'askwan';
  }
  clone(){
    return Object.assign({},this);
  }
}