import Base from "./Base";

export default class LoanUser extends Base {
  constructor(option={}){
    super();
    /**
     * id
     */
    this.id = '';
	
	this.purpose = 1;
    /**
     * 名称
     */
    this.username = '';
    /**
     * 性别
     */
    this.sex = '男';
    /**
     * 年龄
     */
    this.age = '';
    /**
     * 学历
     */
    this.education = 1;
    /**
     * 子女数量
     */
    this.childrenAmounts = '';
    /**
     * 邮箱
     */
    this.email = '';
    /**
     * 身份证号
     */
    this.idnumber = '';
    /**
     * 户籍归属地
     */
    this.familyAddress = '请选择';
    /**
     * 银行卡号
     */
    this.cardNumber = '';
    /**
     * 开户行
     */
    this.cardBank = '';
    /**
     * 居住证地址
     */
    this.address = '请选择';
	/**
	 * 居住详细地址
	 */
	this.addressDetail = '';
	/**
	 * 居住区域
	 */
	this.realAddressArea = '请选择';
	
    /**
     * 实际居住地址
     */
    this.realAddress = '';
    /**
     * 家庭固定电话
     */
    this.familyPhone = '';
	/**
	 * 户籍归属地详细地址
	 */
	this.familyAddressDetail = '';
    /**
     * 单位固定电话
     */
    this.companyPhone = '';
    /**
     * 手机号
     */
    this.phone = '';
    /**
     * 婚姻状况
     */
    this.maritalStatus = '';
	/**
	 * 住房情况
	 */
	this.houseType = 1;
	
	/**
	 * 房屋所在区域
	 */
	this.houseAddressArea = '请选择';
	
	/**
	 * 房屋地址
	 */
	this.houseAddress = '';
	
	this.houseSpace = '';
	
	this.amount = '';
    
    Object.assign(this,option);
  }
}