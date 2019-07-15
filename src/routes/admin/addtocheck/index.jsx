import React, { Component } from 'react'
import { connect } from 'dva'

export class index extends Component {

  render() {
    return (
      <div>
        补录
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(index)
