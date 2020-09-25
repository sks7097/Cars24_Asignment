export const anotherName = () => {
    return (dispatch) => {
        fetch("https://picsum.photos/v2/list?page=2&limit=30")
            .then(res => res.json())
            .then(res2 => {
                dispatch({
                    type: "CHANGE_NAME",
                    payload: JSON.stringify(res2)
                })
            })
    }
}