const reducer = (state=null, action)=> {
    if(action.type==='done'){
        return state.payload = true
    }
    else if(action.type==='undone'){
        return state.payload = false
    }
    else{
        return state;
    }
}

export default reducer;