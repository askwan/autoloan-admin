import React, { Component } from 'react'
import { Form } from 'antd';

const formLayout = {
  labelCol:{span:4},
  wrapperCol:{span:16}
}

export class Spouse extends Component {
  
  render() {
    const {order} = this.props;
    const {spouse} = order;
    return (
      <div>
        <Form {...formLayout}>
          <Form.Item label="配偶姓名">
            <span>{spouse.username}</span>
          </Form.Item>
          <Form.Item label="性别">
            <span>{spouse.sex}</span>
          </Form.Item>
          <Form.Item label="年龄">
            <span>{spouse.age}</span>
          </Form.Item>
          <Form.Item label="身份证号">
            <span>{spouse.idnumber}</span>
          </Form.Item>
          <Form.Item label="户籍归属地">
            <span>{spouse.familyAddress}&nbsp;{spouse.familyAddressDetail}</span>
          </Form.Item>
          <Form.Item label="手机号">
            <span>{spouse.phone}</span>
          </Form.Item>
          <Form.Item label="邮箱">
            <span>{spouse.email}</span>
          </Form.Item>
        </Form>        
      </div>
    )
  }
}

export default Spouse
