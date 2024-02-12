import * as React from "react"
import './index.scss'
import logo from '../images/logo/Endo_Corporate_Primary_Logo_RGB 1.png'
import Search from "../components/searchbar"
import Checkbox from "../components/checkbox"
import checkboxBrands from "../data/checkboxBrands"
import checkboxCategories from "../data/checkboxCategories"

const IndexPage = () => {
  return (
    <>
      <div className="container">
        <div className="site-header">
          <img src={logo} alt="endo logo" className="logo" />
          <h1>PARC</h1>
          <p>Welcome to the Patient Access Resource Center.</p>
        </div>
        <div className="site-wrapper">
          <div className="search">
            <Search />
          </div>
          <div className="checkbox-brands">
            <p>Brands:</p>
            {checkboxBrands.map((item) => <Checkbox id={item.id} label={item.label} />)}
          </div>
          <div className="checkbox-categories">
            <p>Categories:</p>
            {checkboxCategories.map((item) => <Checkbox id={item.id} label={item.label} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
