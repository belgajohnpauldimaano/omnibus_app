import { createStore, compose } from 'redux';
// import {AsyncStorage} from 'react-native';
//import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducers';

var defaultState = {

};

export default configureStore = (initialState = defaultState) => {
    var store = createStore(reducer, initialState, compose(
        //autoRehydrate()
    ));

    //persistStore(store, {storage : AsyncStorage});
    return store;
}
