import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { useTransition, animated } from 'react-spring'
import { FaShoppingCart } from "react-icons/fa"
import "../style.scss"
import { StoreContext } from '../context/StoreContext'
import logo from "../images/logo.svg"
import Cart from './Cart/Cart'

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)
  

  const transitions = useTransition(isCartOpen, null, {
    from: { transform: 'translate3d(100%, 0, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(110%, 0, 0)' },
  })
  const qty = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <header
      className="level is-mobile"
      style={{ background: "var(--purp)", boxShadow: "var(--elevation-2)" }}
    >
      <div className="level-left">
        <Link to="/" className="navbar-item">
          <img
            style={{ height: 60, maxHeight: "none", marginBottom: 0 }}
            src={logo}
            alt="Level Up Logo"
          />
        </Link>
      </div>
      <div className="level-right">
        <div className="navbar-item">
          <button
            className="button"
            style={{
              position: "relative",
              background: "transparent",
              border: "none"
            }}
            onClick={toggleCartOpen}
          >
            {qty > 0 &&
              <div
                style={{
                  color: "white",
                  position: "absolute",
                  top: -5,
                  right: -5,
                  background: "var(--red)",
                  borderRadius: 999,
                  textAlign: "center",
                  width: 30,
                  height: 30,
                  lineHeight: "30px"
                }}>
                {qty}
              </div>
            }
            <FaShoppingCart style={{ color: "white", height: 30, width: 30 }} />
          </button>
          
        </div>
      </div>
      {transitions.map(
        ({ item, key, props }) => item && <Cart key={key} style={props} />
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
