import Base from "./Base";

export default class CarInfo extends Base {
  constructor(option={}){
    super();
    /**
     * 车牌号
     */
    this.carNumber = '';
    /**
     * 车架号
     */
    this.vin = '';
    /**
     * 品名型号
     */
    this.commodityType = '';
    /**
     * 发动机号
     */
    this.engineNumber = '';
    /**
     * 厂牌
     */
    this.brand = '';
    /**
     * 车身颜色
     */
    this.carColor = '';
    
    Object.assign(this,option)
  }
}