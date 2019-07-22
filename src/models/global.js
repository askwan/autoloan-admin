
import {userServer} from '@/services'
export default {

  namespace: 'global',

  state: {
    collapse:false,
    position:'',
    user:{},
    stat:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        let path = location.pathname;
        let position = '';
        
        if(path === '/admin/home'){
          dispatch({type:'stat'})
        }else if(path === '/admin/addtocheck'){
          position = '补录待审核';
        }else if(path === '/admin/waitcheck'){
          position = '待审核'
        }else if(path === '/admin/refused'){
          position = '已拒绝'
        }
        dispatch({type:'changePosition',payload:position});
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *regist({payload},{call,put}){
      try {
        let res = yield call(()=>userServer.regist(payload.values));
        payload.resolve(res);
      } catch (error) {
        payload.reject(error)
      }
    },
    *login({payload},{call,put}){
      try {
        let res = yield call(()=>userServer.login(payload.values));
        yield put({type:'setUser',payload:res})
        if(typeof payload.resolve === 'function'){
          payload.resolve(res);
        }
      } catch (error) {
        
        payload.reject(error)
      }
    },
    *checkoutToken({payload},{call,put}){
      try {
        let res = yield call(()=>userServer.checkToken());
        yield put({type:'setUser',payload:res})
      } catch (error) {
        
      }
    },
    *stat({payload},{call,put}){
      let res = yield call(()=>userServer.stat());
      console.log(res);
      yield put({type:'setStat',payload:res});
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    toggleSiderBar(state,action){
      const collapse = action.payload;
      return {...state,collapse}
    },
    changePosition(state,action){
      const position = action.payload;
      return {...state,position}
    },
    setUser(state,{payload}){
      let user = payload;
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth()+1;
      let day = time.getDate();
      // console.log(year,month,day);
      user.loginTime = `${year}-${month}-${day}`
      return {...state,user}
    },
    setStat(state,{payload}){
      const stat = payload;
      return {...state,stat}
    }
  },

};
