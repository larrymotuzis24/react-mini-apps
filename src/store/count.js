

const count = (state = 0, action) => {
    if(action.type === 'SET_COUNT'){
        state = action.count
    }
    return state
}

export default count