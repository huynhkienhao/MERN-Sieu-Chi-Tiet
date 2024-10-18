const initialState = 0;

reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state + action.payload;
    } else if (action.type === 'DECREMENT') {
        return state - action.payload;
    }
}

createStore = (reducer, initialState) => {
    let state = initialState;

    const dispatch = (action) => {
        // logic here
        state = reducer(state, action);
    }

    const getState = () => {
        return state;
    }

    return {
        dispatch,
        getState
    }
}

const store = createStore(reducer, initialState);
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