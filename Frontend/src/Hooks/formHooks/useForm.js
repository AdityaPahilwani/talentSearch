/** @format */
/* eslint-disable no-redeclare */

/**
 * use this to handle text input changes
 * @param  key key of object to update
 * @param  value value of key
 */
export const CHANGE = "change";
/**
 * use this to edit values in chunk
 * @param  object object to update in useReducer
 */
export const EDITCHUNKVALUES = "editChunkValues";
/**
 * use to push values in array
 * @param  Array it can contain anything
 */
export const PUSHARRAY = "pushArray";
/**
 * use to pop from array based on index
 * @param  index index of array to pop
 */
export const POPWITHINDEXARRAY = "popWithIndexArray";

/**
 * serves like global hook to manage forms can handle textInput , array values
 */
export const useForm = (state, action) => {
  switch (action.type) {
    case CHANGE:
      const newstate = { ...state };
      newstate[action.data.key] = action.data.value;
      return newstate;
    case EDITCHUNKVALUES:
      var newState = { ...state, ...action.values };

      return newState;
    case PUSHARRAY:
      var newState = { ...state };

      newState[action.data.key] = [
        ...newState[action.data.key],
        action.data.value,
      ];

      return newState;
    case POPWITHINDEXARRAY:
      var newState = { ...state };
      const newSkills = [...(newState[action.data.key] || [])];
      newSkills.splice(action.data.index, 1);
      newState[action.data.key] = newSkills;
      return newState;

    default:
      return state;
  }
};

export const onChangehandler = (dispatch, key, value) => {
  dispatch({
    type: "change",
    data: {
      key: key,
      value: value,
    },
  });
};
