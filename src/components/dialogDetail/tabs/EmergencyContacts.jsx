import React, { Component } from 'react'
import { Form,Typography } from 'antd';
import * as models from '@/services/mode'
const {Title} = Typography;



const formLayout = {
  labelCol:{span:4},
  wrapperCol:{span:16}
}

const PeopleContent = ({people,title})=>{
  return (<div>
    <Title level={4}>{title}</Title>
    <Form {...formLayout}>
      <Form.Item label="姓名">
        <span>{people.name}</span>
      </Form.Item>
      <Form.Item label="联系电话">
        <span>{people.phone}</span>
      </Form.Item>
      <Form.Item label="是否电联">
        <span>{people.callUp?'是':'否'}</span>
      </Form.Item>
      <Form.Item label="联系地址">
        <span>{people.addressArea}&nbsp;{people.companyName}</span>
      </Form.Item>
      <Form.Item label="与联系人关系">
        <span>{people.relation}</span>
      </Form.Item>
    </Form>
  </div>)
}


export class EmergencyContacts extends Component {
  render() {
    const {order} = this.props;
    let emergencyContacts = order.emergencyContacts || new models.EmergencyContacts();
    console.log(emergencyContacts,444)
    // console.log(emergencyContacts);
    // const people = {};
    let qs = emergencyContacts[0]||{};
    let ts = emergencyContacts[1]||{};
    let py = emergencyContacts[2]||{};
    return (
      <div>
        <PeopleContent people={qs} title="直系亲属" key="1" />
        <PeopleContent people={ts} title="同事" key='2' />
        <PeopleContent people={py} title="朋友" key='3' />
      </div>
    )
  }
}

export default EmergencyContacts
