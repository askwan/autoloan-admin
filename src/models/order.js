import {orderServer} from '@/services'
export default {

  namespace: 'order',

  state: {
    filter:{
      pageSize:5,
      pageNum:1,
      total:0
    },
    list:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        if(location.pathname === '/admin/waitcheck'){
          dispatch({type:'getList',payload:{option:{pageSize:5,pageNum:1}}});
        }
      })
    },
  },

  effects: {
    *getList({payload},{call,put}){
      if(!payload.option.orderTypes) payload.option.orderTypes = '32,2,8,4';
      let res = yield call(()=>orderServer.query(payload.option));
      let option = Object.assign({},payload.option,res)
      yield put({type:'setList',payload:option});
    },
    *pass({payload},{call}){
      try {
        let res = yield call(()=>orderServer.pass(payload.option));
        payload.resolve(res);
      } catch (error) {
        payload.reject(error);
      }
    },
    *repulse({payload},{call,put}){
      try {
        let res = yield call(()=>orderServer.repulse(payload.option));
        payload.resolve(res);
      } catch (error) {
        payload.reject(error);      
      }
    },
    *reload({payload},{call,select,put}){
      let filter = yield select(state=>{
        return state.order.filter;
      });
      yield put({type:'getList',payload:{option:filter}})
    },
    *deleteOrder({payload},{call,put}){
      let res = yield call(()=>orderServer.deleteOrder(payload));
      console.log(res,'res')
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    setList(state,{payload}){
      const {list,pageNum,total,orderTypes} = payload;
      let filter = Object.assign({},state.filter,{pageNum,total,orderTypes})
      return {...state,list,filter}
    }
  },

};
