import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

export const addPlace = (index) => {
  return {
    type: ADD_PLACE,
    index: index
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectPlace = (index) => {
  return {
    type: SELECT_PLACE,
    index: index
  };
};

export const deselectPlace = (index) => {
  return {
    type: DESELECT_PLACE,
    index: index
  };
};