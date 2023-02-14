import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Home"
        description="Portfolio of Riccardo Calligaro"
      />

      <Hero />

      <div className="bg-gray-200 py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
      {/* <Newsletter /> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
