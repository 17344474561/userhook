const initialState = {
    data:[],
    datas:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'FETCH_LOG':
        return { ...state, data:payload }
        
    case 'FETCH_REG':
        return { ...state, datas:payload }
    default:
        return state
    }
}
