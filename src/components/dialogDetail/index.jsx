import React, { Component } from 'react'
import { Modal, Button, Input, Tabs } from 'antd';
import './detail.scss'

import BaseInfo from './tabs/Baseinfo';
import BuyerInfo from './tabs/Buyer';
import MateInfo from './tabs/Mateinfo';
import CarInfo from './tabs/Carinfo';
import BondmanInfo from './tabs/Bondman';

export class index extends Component {
  state={
    show:false,
    reason:''
  }
  handleClose = () => {
    this.props.onClose();
  }
  handleOk = () => {

  }
  handleRefuse=()=>{
    this.setState({show:true,reason:''})
  }
  close=()=>{
    this.setState({show:false})
  }
  saveRefuse=()=>{
    console.log(this.state.reason);
  }
  changeReason=(e)=>{
    let reason = e.target.value;
    this.setState({reason});
  }
  render() {
    const { visible, title } = this.props;
    const {show,reason} = this.state;
    const Footer = (<div className='dialog-footer flex-center' key='confirm'>
      <Button type="primary" className='mg-right-large'>通过</Button>
      <Button type="danger" onClick={this.handleRefuse} className="mg-left-large">拒绝</Button>
    </div>)
    const list = [
      {key:'baseinfo',tab:'基本信息',component:<BaseInfo />},
      {key:'buyer',tab:'购车人',component:<BuyerInfo />},
      {key:'mateinfo',tab:'配偶信息',component:<MateInfo />},
      {key:'carinfo',tab:'车辆信息',component:<CarInfo />},
      {key:'bondman',tab:'担保人信息',component:<BondmanInfo />}
    ];

    return (
      <Modal width={800} maskClosable visible={visible} onOk={this.handleOk} onCancel={this.handleClose} title={title}
        footer={[Footer]}
      >
        <Tabs defaultActiveKey='baseinfo'>
          {
            list.map(item=>(<Tabs.TabPane tab={item.tab} key={item.key}>
              <div className="detail-box">
                {item.component}
              </div>
            </Tabs.TabPane>))
          }
        </Tabs>
        <Modal maskClosable title='拒绝' visible={show} onOk={this.saveRefuse} onCancel={this.close}>
          <div className='flex-align'>
            <span className='pd-right-big'>备注:</span>
            <div className='grow'><Input value={reason} onChange={this.changeReason} /></div>
          </div>
        </Modal>
      </Modal>
    )
  }
}

export default index
