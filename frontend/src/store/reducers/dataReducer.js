import { updateDataProcessor, updateOpenStatus } from "../../utils/dataHanlder";
import {
  SEARCH_DATA,
  TOGGLE_FOLDER,
  UPDATE_DATA_TABLE,
  UPDATE_DATA_TABLE_CHILDREN,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  searchData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DATA_TABLE:
      return {
        ...state,
        data: payload.map((val) => ({ ...val, open: false })),
      };
    case UPDATE_DATA_TABLE_CHILDREN:
      const newData = updateDataProcessor(
        state?.data,
        payload.id,
        payload.newChild.map((val) => ({ ...val, open: false }))
      );
      return {
        ...state,
        data: [...newData],
      };
    case TOGGLE_FOLDER:
      return {
        ...state,
        data: [...updateOpenStatus(state?.data, payload?.id)],
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    default:
      return state;
  }
};

export default reducer;
