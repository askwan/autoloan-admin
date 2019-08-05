import Base from "./Base";

export default class CompanyInfo extends Base {
  constructor(option={}){
    super();
    /**
     * 单位名称
     */
    this.companyName = '';
    /**
     * 单位电话
     */
    this.companyPhone = '';
	/**
	 * 单位所在区域
	 */
	this.companyAddressArea = '请选择';
    /**
     * 单位地址
     */
    this.companyAddress = '';
    /**
     * 单位性质
     */
    this.companyNature = 1;
    /**
     * 工作年限
     */
    this.workYears = '';
    /**
     * 职务
     */
    this.position = '';

    Object.assign(this,option);
  }
}