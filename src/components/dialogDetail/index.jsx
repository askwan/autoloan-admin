import React, { Component } from 'react'
import { Modal, Button, Input, Tabs, message } from 'antd';
import './detail.scss'

import BaseInfo from './tabs/BaseInfo';
import LoanUser from './tabs/LoanUser';
import Spouse from './tabs/Spouse';
import CarInfo from './tabs/CarInfo';
import EmergencyContacts from './tabs/EmergencyContacts';
import CompanyInfo from './tabs/CompanyInfo';

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
    const {dispatch,order} = this.props;
    new Promise((resolve,reject)=>{
      dispatch({type:'order/repulse',payload:{
        option:{orderId:order.id,reason:this.state.reason,type:''},
        resolve:resolve,
        reject:reject
      }})
    }).then(res=>{
      message.success('审核成功');
      dispatch({type:'order/reload'});
      this.handleClose();
    }).catch(err=>{
      message.error(err.message);
    })
  }
  changeReason=(e)=>{
    let reason = e.target.value;
    this.setState({reason});
  }
  pass=()=>{
    const {dispatch,order} = this.props;
    new Promise((resolve,reject)=>{
      dispatch({type:'order/pass',payload:{
        option:{orderId:order.id},
        resolve:resolve,
        reject:reject
      }})
    }).then(res=>{
      message.success('已提交');
      dispatch({type:'order/reload'});
      this.handleClose();
    }).catch(err=>{
      message.error(err.message);
    })
  }
  render() {
    const { visible, title,order } = this.props;
    const {show,reason} = this.state;
    const Footer = (<div className='dialog-footer flex-center' key='confirm'>
      <Button type="primary" className='mg-right-large' onClick={this.pass}>通过</Button>
      <Button type="danger" onClick={this.handleRefuse} className="mg-left-large">拒绝</Button>
    </div>)
    const list = [
      {key:'baseinfo',tab:'基本信息',component:<BaseInfo order={order} />},
      {key:'buyer',tab:'购车人',component:<LoanUser order={order} />},
      {key:'mateinfo',tab:'配偶信息',component:<Spouse order={order} />},
      {key:'companyinfo',tab:'单位信息',component:<CompanyInfo order={order} />},
      {key:'carinfo',tab:'车辆信息',component:<CarInfo order={order} />},
      {key:'bondman',tab:'紧急联系人',component:<EmergencyContacts order={order} />}
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
