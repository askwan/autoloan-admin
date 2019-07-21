import React, { Component } from 'react'
import { Form } from 'antd';


const formLayout = {
  labelCol:{span:4},
  wrapperCol:{span:16}
}
export class EmergencyContacts extends Component {
  render() {
    const people = {};
    return (
      <div>
        <div>直系亲属</div>
        <Form {...formLayout}>
          <Form.Item label="姓名">
            <span>{people.name}</span>
          </Form.Item>
          <Form.Item label="联系电话">
            <span>{people.phone}</span>
          </Form.Item>
          <Form.Item label="是否电联">
            <span>{people.callUp}</span>
          </Form.Item>
          <Form.Item label="联系地址">
            <span>{people.companyName}</span>
          </Form.Item>
          <Form.Item label="与联系人关系">
            <span>{people.relation}</span>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default EmergencyContacts
