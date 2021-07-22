import React from "react"
import styled from "@emotion/styled"

import { Container, theme, media } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.darkBlue};
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: left;
  padding-top: 15px;
  padding-bottom: 25px;

  ${media.medium} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${media.small} {
    flex-direction: column;
  }

`

const StyledContainer2 = styled(Container)`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;

  ${media.medium} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${media.small} {
    flex-direction: column;
  }

  h6 {
    font-size: 15px;
    color: white;
  }

  a {
    color: purple;
  }

  a:hover {
    transform: translateY(-2px);
    color: ${theme.colors.darkGray};
  }
`

const FooterCopy = styled.div`
  background: transparent;
  text-align: left;
  a.social {
    margin: 0 1rem;
    transition: transform 250ms;
    font-weight: 600;
    font-size: 18px;
    display: inline-block;
  }

  a.social:hover {
    transform: translateY(-2px);
    color: ${theme.colors.darkPurple};
  }

  a.twitter {
    color: white;
  }
  
  a.instagram {
    color: white;
  }

  a.github {
    color: white;
  }

  a.email {
    color: white;
  }
  
`


const Footer = ({ bgColor }) => {

  return (
    <StyledFooter bgColor={bgColor}>
      <StyledContainer>
        <FooterCopy>
          <a href="https://github.com/LeiteSS"
              target="_blank"
              className="github social"
              rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.twitter.com/themilkstripes" target="_blank" className="twitter social" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/themilkstripes" 
            target="_blank"
            className="instagram social"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a className="email social" href="mailto:leite.silassantos@gmail.com" target="_blank" rel="noopener noreferrer">leite.silassantos@gmail.com</a>
        </FooterCopy>
      </StyledContainer>
      <StyledContainer2>
        <FooterCopy>
          <h6>Silas Leite, 2021.  Made with <a href="https://www.gatsbyjs.com" target="__blank" rel="noopener noreferrer">Gatsby</a>. View the code in <a href="https://github.com/LeiteSS/LeiteSS.github.io" target="_blank" rel="noopener noreferrer">Github.</a></h6>
        </FooterCopy>
      </StyledContainer2>
    </StyledFooter>
  )


}

export default Footer
