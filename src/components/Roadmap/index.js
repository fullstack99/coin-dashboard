import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Roadmap = ({ data: { subHeading, heading, text, cta }, fluid }) => (
  <section className="cta">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <p className="u-color-primary u-weight-smb u-ls-lg">{subHeading}</p>
            <h2 className="mb-3 mt-2 u-color-white">{heading}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
    <Img fluid={fluid} alt="Timeline" className="cta__img" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/" className="btn">
            {cta}
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Roadmap
