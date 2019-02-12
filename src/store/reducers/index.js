import { ADD_ARTICLE } from '../actions/actionTypes'

const initialState = {
  articles: []
};

function reducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    state.articles.push(action.payload);
  }
  return state;
}

export default reducer;