import React, { Component } from 'react'
import { connect } from 'dva'
import './style.scss'
import { Form, Input,Button,message } from 'antd';
import { Link } from 'dva/router';
import logo from '../../assets/logo.png'
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};


export class index extends Component {
  state={

  }
  validator = (rule,value,callback)=>{
    let password = this.props.form.getFieldValue('password');
    if(password !== value){
      callback('密码不一致')
    }else{
      callback();
    }
  }
  login=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      values.serviceType = 2;
      if(!err){
        new Promise((resolve,reject)=>{
          this.props.dispatch({type:'global/regist',payload:{
            values,resolve,reject
          }});
        }).then(res=>{
          message.success('注册成功')
          this.props.history.push('/login');
        }).catch(err=>{
          message.error(err.message);
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='fill'>
        <div className="height-200"></div>
        <div className="login-box shadow pd-big">
          <div className="logo">
            <img className="img-auto" src={logo} alt="" />
          </div>
          <Form onSubmit={this.login} {...formItemLayout}>
            <Form.Item label='用户名'>
              {
                getFieldDecorator('username',{
                  rules:[{required:true,'message':'请输入用户名'}]
                })(
                  <Input autoComplete="off" />
                )
              }
            </Form.Item>
            <Form.Item label='密码'>
              {
                getFieldDecorator('password',{
                  rules:[{required:true,'message':'请输入密码'}]
                })(
                  <Input.Password autoComplete="off" />
                )
              }
            </Form.Item>
            <Form.Item label='确认密码'>
              {
                getFieldDecorator('repassword',{
                  rules:[{required:true,'message':'请确认密码'},{validator:this.validator}]
                })(
                  <Input.Password autoComplete="off" />
                )
              }
            </Form.Item>
            <Form.Item wrapperCol={{span:24}}>
              <Button type="primary" htmlType="submit" block>注册</Button>
              <div className='pull-right pointer-underline pointer'>
                <Link to='/login'>登陆</Link>
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
