import React, { Component } from 'react'
import { Form } from 'antd';


const formLayout = {
  labelCol:{span:4},
  wrapperCol:{span:16}
}


export class CarInfo extends Component {
  render() {
    const {order} = this.props;
    const {carInfo} = order;
    return (
      <div>
        <Form {...formLayout}>
          <Form.Item label="车牌号">
            <span>{carInfo.carNumber}</span>
          </Form.Item>
          <Form.Item label="车架号">
            <span>{carInfo.vin}</span>
          </Form.Item>
          <Form.Item label="品名型号">
            <span>{carInfo.commodityType}</span>
          </Form.Item>
          <Form.Item label="发动机号">
            <span>{carInfo.engineNumber}</span>
          </Form.Item>
          <Form.Item label="厂牌">
            <span>{carInfo.brand}</span>
          </Form.Item>
          <Form.Item label="车身颜色">
            <span>{carInfo.carColor}</span>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default CarInfo
