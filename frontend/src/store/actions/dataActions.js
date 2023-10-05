import {
  TOGGLE_FOLDER,
  UPDATE_DATA_TABLE,
  UPDATE_DATA_TABLE_CHILDREN,
} from "./actionTypes";

export const updateData = (payload) => ({
  type: UPDATE_DATA_TABLE,
  payload,
});

export const updateDataChildren = (payload) => ({
  type: UPDATE_DATA_TABLE_CHILDREN,
  payload,
});

export const toggleFolder = (payload) => ({
  type: TOGGLE_FOLDER,
  payload,
});
