import React, { Component } from 'react'
import { connect } from 'dva'
import './style.scss'
import { Form, Input,Button } from 'antd';
import {Link} from 'dva/router'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};

export class index extends Component {
  state={

  }
  login=(e)=>{
    e.preventDefault();
    const {dispatch,form,history} = this.props;
    form.validateFields((err,values)=>{

      if(!err){
        console.log(values,'value');
        new Promise((resolve,reject)=>{
          dispatch({type:'global/login',payload:{resolve,values}})
        }).then(err=>{
          history.push('/');
          console.log(err);
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='fill'>
        <div className="login-box shadow pd-big">
          <div className="logo"></div>
          <Form onSubmit={this.login} {...formItemLayout}>
            <Form.Item label='用户名'>
              {
                getFieldDecorator('username',{
                  rules:[{required:true,'message':'请输入用户名'}]
                })(
                  <Input />
                )
              }
            </Form.Item>
            <Form.Item label='密码'>
              {
                getFieldDecorator('password',{
                  rules:[{required:true,'message':'请输入密码'}]
                })(
                  <Input />
                )
              }
            </Form.Item>
            <Form.Item wrapperCol={{span:24}}>
              <Button type="primary" htmlType="submit" block>登陆</Button>
              <div className='pull-right pointer-underline pointer'>
                <Link to='/regist'>注册</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.global
})

export default connect(mapStateToProps)(Form.create({})(index))
