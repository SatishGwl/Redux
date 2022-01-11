import { connect } from 'react-redux'
import Home from '../Home'
import { addToCart, removeToCart } from '../services/Actions/actions'

const mapStateToProps=state=>({
  // data: state.cardData
  data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
  //addToCartHandler function we will used in our react Component
  addToCartHandler:data=>dispatch(addToCart(data)),
  removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home
  );