

const INITIAL_STATE = {
    users: [
        {
            name: "Ghulam Qadir",
            email: "gq@gmail.com"
        }
    ],
    // current_user:{}
}

export default (state = INITIAL_STATE, action) => {
    console.log("action", action)
    switch (action.type){
    case "Product":
        return ({
            ...state,
            current_user: action.payload,
            product: [...state.users,action.users]
        
        })
}

    return state;
}
