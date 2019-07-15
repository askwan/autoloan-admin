

export default {

  namespace: 'global',

  state: {
    collapse:false,
    position:''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        let path = location.pathname;
        let position = ''
        if(path === '/admin/home'){
        }else if(path === '/admin/addtocheck'){
          position = '补录待审核';
        }else if(path === '/admin/waitcheck'){
          position = '待审核'
        }else if(path === '/admin/refused'){
          position = '已拒绝'
        }
        dispatch({type:'changePosition',payload:position})
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
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
    }
  },

};
