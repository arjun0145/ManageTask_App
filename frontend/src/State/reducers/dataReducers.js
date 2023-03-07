let data = localStorage.getItem("data")
data = JSON.parse(data)
const initialState = data  
const setdata = (state = initialState, action) => {
   switch (action.type) {
      case "setdata":
         state = state + action.payload;
         return state
      default: return state
   }
}

export default setdata 