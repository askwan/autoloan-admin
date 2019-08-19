import React from 'react';
import { connect } from 'dva';
import {Route, Link} from 'dva/router';
import { Layout, Breadcrumb,Typography, Button, message } from 'antd';

import Left from '@/components/leftTabs'
import Home from './admin/home'
import Waitcheck from './admin/waitcheck'
import AddtoCheck from './admin/addtocheck'
import Refused from './admin/refused'
const { Header, Content } = Layout;
const {Title,Text} = Typography

class IndexPage extends React.Component {
  componentDidMount(){
    this.props.dispatch({type:'global/checkoutToken'})
  }
  goBack = ()=>{
    this.props.history.push('/admin/home')
  }
  exit = ()=>{
    window.localStorage.clear();
    this.props.history.push('/login');
    message.success('已退出');
  }
  render() {
    const {match,position} = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Left {...this.props} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className="flex-between pd-big" style={{height:64}}>
              <div className='flex-align pointer' onClick={this.goBack}>
                <Title level={3} style={{marginBottom:0}}>鑫辰金融</Title>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Text>记录有趣的每一天</Text>
              </div>
              <Button type='link' onClick={this.exit}>退出登录</Button>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <Link to='/admin/home'>首页</Link>
              </Breadcrumb.Item>
              {position && <Breadcrumb.Item>{position}</Breadcrumb.Item>}
              
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>
              <Route path={`${match.path}/home`} component={Home} />
              <Route path={`${match.path}/waitcheck`} component={Waitcheck} />
              <Route path={`${match.path}/addtocheck`} component={AddtoCheck} />
              <Route path={`${match.path}/refused`} component={Refused} />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.global
})

export default connect(mapStateToProps)(IndexPage);
