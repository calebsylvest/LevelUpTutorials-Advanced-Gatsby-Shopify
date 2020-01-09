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
  const { isCartOpen, toggleCartOpen } = useContext(StoreContext)
  const transitions = useTransition(isCartOpen, null, {
    from: { transform: 'translate3d(100%, 0, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(110%, 0, 0)' },
  })

  return (
    <header
      className="navbar"
      style={{ background: "var(--purp)", boxShadow: "var(--elevation-2)" }}
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            style={{ height: 60, maxHeight: "none", marginBottom: 0 }}
            src={logo}
            alt="Level Up Logo"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <button onClick={toggleCartOpen}>
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
