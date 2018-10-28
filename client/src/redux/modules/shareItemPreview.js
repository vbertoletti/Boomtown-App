//Actions
const UPDATE_NEW_ITEM = 'UPDATE_NEW_ITEM';
const RESET_NEW_ITEM = 'RESET_NEW_ITEM';
const RESET_NEW_ITEM_IMAGE = 'RESET_NEW_ITEM_IMAGE';

//Actions creators 
export const UpdateNewItem = item => ({
  type: UPDATE_NEW_ITEM,
  payload: item
});

export const ResetNewItem = () => ({
  type: RESET_NEW_ITEM
});

export const ResetNewItemImage = ()=> ({
  type: RESET_NEW_ITEM_IMAGE
});

const initialState = {
  title: 'new item',
  description: 'items description',
  date: new Date(),
  imageurl: 'http://uetitalia.it/wp-content/uploads/2018/09/blog-placeholder.png',
  itemowner: {},
  tags: []
};

//Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_ITEM: 
      return {...state, ...action.payload}
      
    case RESET_NEW_ITEM:
      return {...initialState}

    case RESET_NEW_ITEM_IMAGE:
      return {...state, imageurl: initialState.imageurl};

    default: 
      return state;  
  }
};

