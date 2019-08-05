import React, { Component } from 'react'
import { Form } from 'antd';

import utils from '@/script/static'

const formLayout = {
  labelCol:{span:4},
  wrapperCol:{span:16}
}

export class LoanUser extends Component {
  render() {
    const {order} = this.props;
    let loanUser = order.loanUser;

    return (
      <div>
        <Form {...formLayout}>
          <Form.Item label="姓名">
            <span>{loanUser.username}</span>
          </Form.Item>
          <Form.Item label="性别">
            <span>{loanUser.sex}</span>
          </Form.Item>
          <Form.Item label="年龄">
            <span>{loanUser.age}</span>
          </Form.Item>
          <Form.Item label="借款用途">
            <span>{utils.getpurpose(loanUser.purpose).name}</span>
          </Form.Item>
          <Form.Item label="借款金额（万）">
            <span>{loanUser.amount}</span>
          </Form.Item>
          <Form.Item label="学历">
            <span>{utils.getEducation(loanUser.education).name}</span>
          </Form.Item>
          <Form.Item label="婚姻状况">
            <span>{utils.getmaritalStatus(loanUser.maritalStatus).name}</span>
          </Form.Item>
          <Form.Item label="子女数量">
            <span>{loanUser.childrenAmounts}</span>
          </Form.Item>
          <Form.Item label="邮箱">
            <span>{loanUser.email}</span>
          </Form.Item>
          <Form.Item label="身份证号">
            <span>{loanUser.idnumber}</span>
          </Form.Item>
          <Form.Item label="户籍归属地">
            <span>{loanUser.familyAddress}&nbsp;{loanUser.familyAddressDetail}</span>
          </Form.Item>
          <Form.Item label="银行卡号">
            <span>{loanUser.cardNumber}</span>
          </Form.Item>
          <Form.Item label="开户行">
            <span>{loanUser.cardBank}</span>
          </Form.Item>
          <Form.Item label="实际居住地址">
            <span>{loanUser.realAddressArea}&nbsp;{loanUser.realAddress}</span>
          </Form.Item>
          <Form.Item label="家庭固定电话">
            <span>{loanUser.familyPhone}</span>
          </Form.Item>
          <Form.Item label="单位固定电话">
            <span>{loanUser.companyPhone}</span>
          </Form.Item>
          <Form.Item label="手机号">
            <span>{loanUser.phone}</span>
          </Form.Item>
          <Form.Item label="住房情况">
            <span>{utils.getHouseType(loanUser.houseType).name}</span>
          </Form.Item>
          <Form.Item label="房屋地址">
            <span>{loanUser.houseAddressArea}&nbsp;{loanUser.houseAddress}</span>
          </Form.Item>
          <Form.Item label="房屋面积（平方米）">
            <span>{loanUser.houseSpace}</span>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default LoanUser
