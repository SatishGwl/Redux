import { ADD_TO_CART } from '../constant'
const initialState = {
  cardData: [] //we want to add multiple data thats we will take array
}
export default function cardItems(state=initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cardData: action.data,
      }
      break;
      default:
        return state
  }
}