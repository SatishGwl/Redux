import { ADD_TO_CART,REMOVE_TO_CART  } from '../constant'
const initialState = {
  cardData: [] //we want to add multiple data thats we will take array
}
export default function cardItems(state=[], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log('==reducer call',action)
      return [
        ...state,
        {cardData: action.data}
  ]
    case "REMOVE_TO_CART":
      state.pop()
      return [
        ...state,
      ]
      default:
        return state
  }
}