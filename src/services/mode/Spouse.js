import Base from "./Base";

export default class Spouse extends Base {
  constructor(option={}){
    super();
    /**
     * 配偶姓名
     */
    this.username = '';
    /**
     * 性别
     */
    this.sex = '女';
    /**
     * 年龄
     */
    this.age = '';
    /**
     * 身份证号
     */
    this.idnumber = '';
    /**
     * 户籍归属地
     */
    this.familyAddress = '请选择';
    /**
     * 手机号
     */
    this.phone = '';
    /**
     * 邮箱
     */
    this.email = '';
    Object.assign(this,option);
  }
}