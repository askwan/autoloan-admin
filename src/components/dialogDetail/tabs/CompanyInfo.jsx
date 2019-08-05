import React, { Component } from 'react'
import { Form } from 'antd';

import utils from '@/script/static'

const formLayout = {
  labelCol:{span:4},
  wrapperCol:{span:16}
}
export class CompanyInfo extends Component {
  render() {
    const {order} = this.props;
    const {companyInfo} = order;
    console.log(utils.getworkYears(companyInfo.workYears),'workyear')
    return (
      <div>
        <Form {...formLayout}>
          <Form.Item label="单位名称">
            <span>{companyInfo.companyName}</span>
          </Form.Item>
          <Form.Item label="单位电话">
            <span>{companyInfo.companyPhone}</span>
          </Form.Item>
          <Form.Item label="单位地址">
            <span>{companyInfo.companyAddressArea}&nbsp;{companyInfo.companyAddress}</span>
          </Form.Item>
          <Form.Item label="单位性质">
            <span>{utils.getCompanyNature(companyInfo.companyNature).name}</span>
          </Form.Item>
          <Form.Item label="工作年限">
            <span>{utils.getworkYears(companyInfo.workYears).name}</span>
          </Form.Item>
          <Form.Item label="职务">
            <span>{companyInfo.position}</span>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default CompanyInfo
