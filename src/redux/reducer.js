const istate = { name: [] }

const reduver = (state = istate, action) => {
    if (action.type === "CHANGE_NAME") {
        return {
            name: action.payload
        }
    }
    return state;
}

export default reduver;