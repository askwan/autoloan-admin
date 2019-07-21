import Base from "./Base";

/**
 * @author askwan
 * @nickName String
 * @password String
 */

export default class User extends Base {
  constructor(option={}){
    super();
    this.id = '';
    /**
     * 账号
     */
    this.username = '';
    /**
     * 昵称
     */
    this.nickName = '';
    this.password = '';
    this.token = '';
    this.email = '';
    this.phone = '';
    Object.assign(this,option);
  }
}