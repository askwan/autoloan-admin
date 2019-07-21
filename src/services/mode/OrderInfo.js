import User from "./User";
import LoanUser from "./LoanUser";
import Spouse from "./Spouse";
import CompanyInfo from "./CompanyInfo";
import CarInfo from "./CarInfo";
import Base from "./Base";
import EmergencyContacts from './EmergencyContacts';

/**
 * @author askwan
 * @augments creator User
 */


export default class Order extends Base {
  constructor(option={}){
    super();
    this.id = option.id;
    this.baseInfo = option.baseInfo;
    this.creator = new User(option.creator);
    this.loanUser = new LoanUser(option.loanUser);
    this.spouse = new Spouse(option.spouse);
    this.companyInfo = new CompanyInfo(option.companyInfo);
    this.carInfo = new CarInfo(option.carInfo);
    this.orderType = option.orderType||1;
    this.deleteFlag =  option.orderType||false;
    this.repulseCount = option.repulseCount;
    this.repulseReason = option.repulseReason;
    this.repulseType = option.repulseType;
    this.assessor = new User(option.assessor);
	this.emergencyContacts = new EmergencyContacts(option.emergencyContacts)
  }
  clone(){

  }
}