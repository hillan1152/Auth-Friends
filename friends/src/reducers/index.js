const initialState = {
    friends: [], 
    isLoading: false, 
    error: null,
    login: '',
    password: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;