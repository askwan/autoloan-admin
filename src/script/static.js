import cardBanks from './selects/cardBanks.json'
import companyNatures from './selects/companyNatures.json'
import educations from './selects/educations.json'
import houseType from './selects/houseTypes.json'
import maritalStatuss from './selects/maritalStatuss.json'
import purposes from './selects/purposes.json'
import workYearss from './selects/workYearss.json'

export default {
  // orderTypes:[{name:'草稿',id:1,color:'#999'},{name:'已完成',id:32,color:'#87d068'},{name:'审核中',id:2,color:'#f50'},{name:'修改待审核',id:4,color:'#f50'},{name:'已拒绝',id:8,color:'f00'}],
  orderTypes:[{name:'已完成',id:32,color:'#87d068'},{name:'审核中',id:2,color:'#f50'},{name:'修改待审核',id:4,color:'#f50'},{name:'已拒绝',id:8,color:'f00'}],
  getCarBank(id){
    let result = cardBanks.find(el=>el.value === id);
    if(result) return result;
    return {};
  },
  getCompanyNature(id){
    let result = companyNatures.find(el=>el.value === id);
    if(result) return result;
    return {};
  },
  getEducation(id){
    let result = educations.find(el=>el.value === id);
    if(result) return result;
    return {};
  },
  getHouseType(id){
    let result = houseType.find(el=>el.value === id);
    if(result) return result;
    return {};
  },
  getmaritalStatus(id){

    let result = maritalStatuss.find(el=>el.value === id);
    if(result) return result;
    return {};
  },
  getpurpose(id){
    let result = purposes.find(el=>el.value === id);
    if(result) return result;
    return {};
  },
  getworkYears(id){
    let result = workYearss.find(el=>el.value === Number(id));
    if(result) return result;
    return {};
  }
}