import React from 'react'

function Home(props) {
	console.log('---home--', props.data)
	return (
		<div>
			<h1>Home Component</h1>
			<div className="add-to-cart">
				<span>{props.data.length}</span>
				<svg xmlns="http://www.w3.org/2000/svg" className="red" width="50" height="50" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
				</svg>
				{/* <img src="https://www.istockphoto.com/vector/shopping-cart-icon-isolated-on-white-background-gm1206806317-348188144"/> */}
			</div>
			<div className="cart-wrapper">
				<div className="img-wrapper item">
					<img src="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dhe5aeyhk.jpeg?q=70" />
				</div>
				<div className="text-wrapper item">
					<span>
						i phone
							</span>
					<span>
						Price: $1000.00
							</span>
				</div>
				<div className="btn-wrapper item">
					<button className="add-cart-btn"
						onClick={
							() => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
						}>
						Add To Cart</button>
						<button className="remove-cart-btn"
						onClick={
							() => { props.removeToCartHandler() }
						}>
						Remove To Cart</button>
				</div>
		</div>
		</div >
	)
}
export default Home
