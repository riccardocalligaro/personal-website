import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaEnvelope, FaFlickr, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            mail
            instagram
            flickr
          }
        }
      }
    }
  `)

  return (
    <div className="container py-12 md:flex md:items-center md:justify-between">
      <ul className="flex justify-center md:order-2">
        <FooterLink href={links.mail} icon={FaEnvelope} label="Mail" />
        <FooterLink
          href={links.instagram}
          icon={FaInstagram}
          label="Instagram"
        />

        <FooterLink href={links.flickr} icon={FaFlickr} label="Flickr" />
      </ul>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          &copy; {new Date().getFullYear()} Riccardo Calligaro. All rights
          reserved.
        </p>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer
