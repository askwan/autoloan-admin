import React, { Component } from 'react'
import { connect } from 'dva'

import DialogDetail from '@/components/dialogDetail'

export class index extends Component {
  state={
    visible:false
  }
  showDetail=()=>{
    this.setState({visible:true})
  }
  close = ()=>{
    this.setState({visible:false})
  }
  render() {
    return (
      <div >
        <div onClick={this.showDetail}>待审核</div>
        <DialogDetail visible={this.state.visible} title='审核' onClose={this.close} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(index)
