const initialState = {
    friends: [], 
    isLoading: false, 
    error: null,
    username: '',
    password: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;