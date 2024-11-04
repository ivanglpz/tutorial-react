export type Action = "ADD_ITEM" | "REMOVE_ITEM";

const ADD_ITEM_KEY = "ADD_ITEM";

const REMOVE_ITEM_KEY = "REMOVE_ITEM";

export type PAYLOAD = {
  index: number;
  value: string | number;
};
export type Selector = {
  items: PAYLOAD[];
};
export type ITEM_ACTION = {
  type: Action;
  payload: PAYLOAD;
};

export const ADD_ITEM = (value: string) => {
  return {
    type: ADD_ITEM_KEY,
    payload: { value, index: Date.now() },
  };
};

export const REMOVE_ITEM = (index: number) => {
  return {
    type: REMOVE_ITEM_KEY,
    payload: { index },
  };
};
