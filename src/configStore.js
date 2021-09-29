import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./modules/homePage/reducers/movieReducer";
import { movieDetailReducer } from "./modules/detailPage/reducers/movieDetailReducer";

import { registerReducer } from "./modules/register/reducer/registerReducer"

import { xemThemReducer } from "./modules/homePage/reducers/xemThemReducer"
import { loginReducer } from "./modules/login/reducers/loginReducer"
import { xemThemFeedBackReducer } from "./modules/detailPage/reducers/xemThemFeedBackReducer"
import { thongTinHeThongRapReducer } from "./modules/homePage/reducers/thongTinHeThongRapReducer"
import { lichChieuReducer } from "./modules/homePage/reducers/lichChieuReducer"
import { bannerReducer } from "./modules/homePage/reducers/bannerReducer"
import { cunRapReducer } from "./modules/homePage/reducers/cumRapReducer"
import { userReducer } from "./modules/admin/reducers/userReducer"
import { movieAdminReducer } from "./modules/admin/reducers/movieAdminReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers( applyMiddleware(thunk),);


const rootReducer = combineReducers({
    movieReducer,
    movieDetailReducer,
    registerReducer,
    loginReducer,
    xemThemReducer,
    xemThemFeedBackReducer,
    thongTinHeThongRapReducer,
    cunRapReducer,
    lichChieuReducer,
    bannerReducer,
    userReducer,
    movieAdminReducer
});

const store = createStore(rootReducer, enhancer);

export default store;
