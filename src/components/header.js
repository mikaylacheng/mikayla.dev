import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-between max-w-6xl m-auto mt-8">
      <div></div>
      <div className="flex justify-between">
        <p className="mx-5 text-1xl">home</p>
        <p className="mx-5 text-1xl">projects</p>
        <p className="mx-5 text-1xl">experience</p>
        <p className="mx-5 text-1xl">contact</p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
