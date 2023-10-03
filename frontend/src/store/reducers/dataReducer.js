import { UPDATE_DATA_TABLE } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DATA_TABLE:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default reducer;
