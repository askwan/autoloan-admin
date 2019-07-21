import React, { Component } from 'react'
import './style.scss'
import { connect } from 'dva'

import { Layout, Menu, Icon,Typography } from 'antd';

const { Sider } = Layout;

const {Title} = Typography

export class index extends Component {
  pathTo=(url)=>{
    const {history} = this.props;
    history.push(url);
  }
  render() {
    const {position,user} = this.props;
    let time  = new Date();
    
    return (
      <Sider>
          <div className='company-logo'>
            <Title level={3} className='info-title'>工作台</Title>
          </div>
          <div className='user-info'>
            <Title level={4} className='info-title'>用户信息</Title>
            <div className='flex font-gray mg-bottom-small'>
              <span>登陆人员：</span>
              <span className="font-white">{user.username}</span>
            </div>
            {/* <div className='flex font-gray  mg-bottom-small'>
              <span>所属部门：</span>
              <span className="font-white">客服部</span>
            </div> */}
            <div className='flex font-gray  mg-bottom-small'>
              <span>登录时间：</span>
              <span className="font-white">{user.loginTime}</span>
            </div>
            {/* <div className='flex font-gray  mg-bottom-small'>
              <span>个人代办：</span>
              <span className="font-white">askwan</span>
            </div> */}

          </div>
          <Menu theme="dark" selectedKeys={[position]} mode="inline">
            <Menu.Item key="待审核" onClick={()=>this.pathTo('/admin/waitcheck')}>
              <Icon type="pie-chart" />
              <span>待审核</span>
            </Menu.Item>
            {/* <Menu.Item key="补录待审核" onClick={()=>this.pathTo('/admin/addtocheck')}>
              <Icon type="desktop" />
              <span >补录待审核</span>
            </Menu.Item>
            <Menu.Item key="已拒绝" onClick={()=>this.pathTo('/admin/refused')}>
              <Icon type="desktop" />
              <span >已拒绝</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(index)
