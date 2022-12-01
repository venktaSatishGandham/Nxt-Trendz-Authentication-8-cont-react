import CartItem from '../CartItem'

import './index.css'

import CartContext from '../../context/CartContext'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <div>
          {cartList.length > 0 ? (
            <ul className="cart-list">
              {cartList.map(eachCartItem => (
                <CartItem
                  key={eachCartItem.id}
                  cartItemDetails={eachCartItem}
                />
              ))}
            </ul>
          ) : (
            <h1 className="empty-cart">Cart is Empty</h1>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
