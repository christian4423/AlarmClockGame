import { createStore, combineReducers } from 'redux';
import red from "../reducers/reducer";
const reducer = combineReducers({
    red
});

export default () => {
    const store = createStore(
        reducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    // const unsubscribe = store.subscribe(() => {
    //     console.log(store.getState());
    // });

    return store;
}