import React, { Component } from 'react'
import { Form,Typography } from 'antd';
import {imagePath} from '@/services'
const {Title} = Typography

const formLayout = {
  labelCol:{span:8},
  wrapperCol:{span:16}
}

const ListPlu = ({list,title})=>{
  const openImage = (url)=>{
    window.open(url);
  }
  return <div>
    <Title level={4}>{title}</Title>
    {
      list.map(el=>(<Form.Item label={el.name} key={el.id}>
        <div className="flex">
          {
            el.uri.map((ev,i)=>(<div key={i} className="pointer">
              <img onClick={()=>openImage(imagePath+ev)} className='basinfo-img' src={imagePath+ev} alt=""/>
            </div>))
          }
        </div>
        
      </Form.Item>))
    }
  </div>
}


export class BaseInfo extends Component {
  
  render() {
    const {order} = this.props;
    console.log(order,'order');
    let baseInfo = order.baseInfo||{};
    let authorization = baseInfo.authorization || [];
    let bankCard = baseInfo.bankCard || [];
    let car = baseInfo.car || [];
    let lawNet = baseInfo.lawNet || [];
    let travelLicense = baseInfo.travelLicense || [];

    return (
      <div>
        <Form {...formLayout}>
          <ListPlu list={authorization} title="授权书" />
          <ListPlu list={lawNet} title="人法网" />
          <ListPlu list={bankCard} title="银行卡" />
          <ListPlu list={car} title="车辆照片" />
          <ListPlu list={travelLicense} title="行驶证" />
        </Form>
      </div>
    )
  }
}

export default BaseInfo
