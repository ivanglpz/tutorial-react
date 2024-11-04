import { ITEM_ACTION, PAYLOAD } from "./actions";

const initialState = {
  items: [] as PAYLOAD[],
};

//items = []
export const reducer = (state = initialState, actions: ITEM_ACTION) => {
  switch (actions.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, actions.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state?.items?.filter(
          (e) => e?.index !== actions?.payload?.index
        ),
      };
    default:
      return state;
  }
};
