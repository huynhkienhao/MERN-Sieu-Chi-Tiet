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
    let listeners = [];

    const dispatch = (action) => {
        // logic here
        state = reducer(state, action);

        for (i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }

    const subcribe = (listener) => {
        listeners.push(listener);
    }

    const getState = () => {
        return state;
    }

    return {
        dispatch,
        getState,
        subcribe
    }
}

const store = createStore(reducer, initialState);

console.log(store.getState());

store.subcribe(() => {
    console.log('store change');
})

store.dispatch({
    type: 'INCREMENT',
    payload: 3
})
store.dispatch({
    type: 'DECREMENT',
    payload: 1
})
console.log(store.getState());