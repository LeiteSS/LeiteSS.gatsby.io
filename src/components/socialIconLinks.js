import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconEmail from "./images/email"


const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
    <a href="mailto:leite.silassantos@gmail.com" target="_blank" rel="noopener noreferrer">
        <IconEmail classes={`${iconClasses}`}  />
      </a>
      <a href="https://github.com/LeiteSS" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/silas-leite-08a669a9/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://twitter.com/themilkstripes" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.instagram.com/themilkstripes" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a>
    </>
  )
}

export default SocialIconLinks
