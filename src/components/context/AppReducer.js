const AppReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_SELECTED_DATA':
        return {
          ...state,
          selectedData: [action.payload, ...state.selectedData]
        }
      
      default:
        return state;
    }
  }

  export default AppReducer;