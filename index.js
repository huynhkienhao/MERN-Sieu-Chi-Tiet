createStore = () => {
    let state = 0;

    const dispatch = (action) => {
        // logic here
        if (action.type === 'INCREMENT') {
            state = state + action.payload;
        } else if (action.type === 'DECREMENT') {
            state = state - action.payload;
        }
    }

    const getState = () => {
        return state;
    }

    return {
        dispatch,
        getState
    }
}

const store = createStore();
console.log(store.getState());

store.dispatch({
    type: 'INCREMENT',
    payload: 3
})
store.dispatch({
    type: 'DECREMENT',
    payload: 1
})
console.log(store.getState());