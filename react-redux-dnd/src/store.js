import { createStore } from "redux";

import rootReducer from "./Components/Reducer/index";

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())

export default store;