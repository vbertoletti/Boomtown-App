import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import shareItemPreviewReducer from './modules/shareItemPreview';

const middleware = [];

const store = createStore(
  combineReducers({
    shareItemPreview: shareItemPreviewReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
