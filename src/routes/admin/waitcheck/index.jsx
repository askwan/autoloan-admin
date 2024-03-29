import React, { Component } from 'react'
import { connect } from 'dva'

import DialogDetail from '@/components/dialogDetail'
import { Table, Input, Tag, Button, Modal } from 'antd';
import staticInfo from '@/script/static'
import {orderServer} from '@/services'

const getType = (type)=>{
  const {orderTypes} = staticInfo;
  let result = orderTypes.find(el=>el.id === type);
  if(result) return result;
  return {}
}

export class index extends Component {
  state={
    visible:false,
    currentOrder:{},
    searchValue:''
  }
  showDetail=()=>{
    this.setState({visible:true})
  }
  close = ()=>{
    this.setState({visible:false})
  }
  changeList=(a,b,c)=>{
    const {dispatch,filter} = this.props;
    let option = {};
    option.pageNum = a.current;
    option.pageSize = filter.pageSize;

    if(b.orderType){
      option.orderTypes = b.orderType.join(',');
      if(filter.orderTypes!==option.orderTypes){
        option.pageNum = 1;
      }
    }
    
    dispatch({type:'order/getList',payload:{option:option}})
  }
  changeSearch=(e)=>{
    this.setState({
      searchValue:e.target.value
    })
  }
  startSearch=()=>{
    const {dispatch,filter} = this.props;
    filter.keyword = this.state.searchValue;
    dispatch({type:'order/getList',payload:{option:filter}})
  }
  selectIt=(order)=>{
    this.setState({
      visible:true,
      currentOrder:order
    })
  }
  downloadIt=(order)=>{
    window.open(orderServer.url+'/export?loadBaseInfo=true&id='+order.id)
  }
  deleteIt=(order)=>{
    Modal.confirm({
      title:'提示',
      content:`是否删除订单：${order.id}`,
      onOk:()=>{
        const {dispatch,filter} = this.props;
        dispatch({type:'order/deleteOrder',payload:{orderId:order.id}}).then(res=>{
          dispatch({type:'order/getList',payload:{option:filter}})
        }).catch(err=>{
          console.log(err,'err')
        })
      },
      maskClosable:true
    })
    
  }
  render() {
    const {list,filter} = this.props;
    let filters = staticInfo.orderTypes.map(el=>({value:el.id,text:el.name}))
    const column = [{
      title:'订单号',
      dataIndex:'id',
      align:'left',
    },{
      title:'客户姓名',
      align:'center',
      dataIndex:'loanUser.username'
    },{
      title:'性别',
      align:'center',
      dataIndex:'loanUser.sex'
    },{
      title:'贷款金额',
      align:'center',
      dataIndex:'loanUser.amount'
    },{
      title:'身份证',
      align:'left',
      dataIndex:'loanUser.idnumber'
    },{
      title:'手机号',
      align:'left',
      dataIndex:'loanUser.phone'
    },{
      title:'单位',
      align:'center',
      dataIndex:'companyInfo.companyName'
    },{
      title:'助贷机构',
      align:'cneter',
      dataIndex:'loanUser.cardBank'
    },{
      title:'状态',
      dataIndex:'orderType',
      align:'center',
      filters:filters,
      render:(type,item)=>{
        let obj = getType(type);
        // return <span className="pointer" onClick={()=>this.selectIt(item)}>{getType(type).name}</span>
        return <div className="flex-center pointer"><Tag className="pointer" color={obj.color} onClick={()=>this.selectIt(item)}>{obj.name}</Tag></div>
      }
    },{
      title:'操作',
      align:'center',
      render:(type,item)=>{
        let obj = getType(type);
        // return <span className="pointer" onClick={()=>this.selectIt(item)}>{getType(type).name}</span>
        return <div className="flex-center">
          <Button type='link' onClick={()=>this.selectIt(item)}>审核</Button>
          <Button type='link' onClick={()=>this.downloadIt(item)}>导出</Button>
          <Button type='link' onClick={()=>this.deleteIt(item)}>删除</Button>
        </div>
      }
    }]
    return (
      <div >
        {/* <div onClick={this.showDetail}>待审核</div> */}
        <div className="mg-bottom-big">
          <Input.Search placeholder="请输入订单号、贷款人姓名" onChange={this.changeSearch} onSearch={this.startSearch} onBlur={this.startSearch} />
        </div>
        <Table bordered columns={column} dataSource={list} rowKey="id"
          pagination={{
            pageSize:filter.pageSize,
            current:filter.pageNum,
            total:filter.total
          }}
          onChange={this.changeList}
        />
        <DialogDetail visible={this.state.visible} order={this.state.currentOrder} {...this.props} title='审核' onClose={this.close} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.order
})

export default connect(mapStateToProps)(index)
