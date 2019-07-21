export default class Base {
  constructor(){

  }
  clone(){
    return Object.assign({},this);
  }
}