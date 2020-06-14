const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "HOME_DATA":

        return { ...state, data:payload.users  }

    default:
        return state
    }
}
