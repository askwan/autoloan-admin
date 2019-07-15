import React, { Component } from 'react'
import { connect } from 'dva'
import './home.scss';

import {Typography, Row, Col} from 'antd'

const {Title} = Typography;

export class index extends Component {

  render() {
    return (
      <div className='home-content'>
        <Title level={4}>工作统计</Title>
        <Row>
          <Col span={6} offset={1} >
            <div className='select-box flex-column one'>
              <div className="num">0</div>
              <div className='tip'>今日提交</div>
            </div>
          </Col>
          <Col span={6} offset={2}>
            <div className='select-box flex-column two'>
              <div className='num'>0</div>
              <div className='tip'>今日成交</div>
            </div>
          </Col>
          <Col span={6} offset={2}>
            <div className='select-box flex-column three'>
              <div className='num'>0</div>
              <div className='tip'>本月成交</div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(index)
