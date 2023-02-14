import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About me
            </h1>

            <h2 className="text-md leading-tight font-semibold tracking-tight text-gray-600 sm:text-xl">
              Italiano
            </h2>
            <div className="mt-4 leading-loose">
              Sono Riccardo Calligaro, un fotografo di 20 anni di Venezia,
              appassionato di street e travel photography.
              <br />
              <br />
              Ho sempre avuto una forte curiosità verso le persone e le loro
              storie, e questo mi ha spinto ad esplorare il mondo attraverso
              l'obiettivo della mia macchina fotografica. Per me, la fotografia
              è molto più di un semplice scatto. È l'arte di catturare l'essenza
              del momento e di trasmettere emozioni che possono durare una vita
              intera. Attraverso le mie fotografie, cerco di raccontare storie
              autentiche e di cogliere l'energia e la bellezza della vita
              quotidiana.
              <br />
              <br />
              Spero che le mie fotografie possano ispirare gli altri a
              viaggiare, a scoprire e ad esplorare il mondo, e a cogliere le
              emozioni e le esperienze uniche che la vita ha da offrire.
              <br />
              <br />
              Info e contatti:
              <br />
              <a
                href="mailto:riccardocalligaro@gmail.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                riccardocalligaro@gmail.com
              </a>
              &nbsp;/ 3382393853
              <h1 className="mt-8 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                About me
              </h1>
              <h2 className="text-md leading-tight font-semibold tracking-tight text-gray-600 sm:text-xl">
                English
              </h2>
              <div className="mt-4 leading-loose">
                I am Riccardo Calligaro, a 20-year-old photographer from Venice,
                passionate about street and travel photography.
                <br />
                <br /> I have always had a strong curiosity towards people and
                their stories, which has driven me to explore the world through
                the lens of my camera. For me, photography is much more than
                just taking a picture. It is the art of capturing the essence of
                the moment and conveying emotions that can last a lifetime.
                <br />
                <br />
                Through my photographs, I strive to tell authentic stories and
                capture the energy and beauty of everyday life. I hope that my
                photographs can inspire others to travel, discover, and explore
                the world, and to seize the unique emotions and experiences that
                life has to offer.
                <br />
                <br />
                Get in touch with me at:
                <br />
                <a
                  href="mailto:riccardocalligaro@gmail.com"
                  className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
                >
                  riccardocalligaro@gmail.com
                </a>
                &nbsp;/ +393382393853
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Riccardo"
              className="shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <Newsletter /> */}
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
