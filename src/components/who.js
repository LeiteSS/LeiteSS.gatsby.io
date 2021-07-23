import React, { Component } from 'react'
import styled from '@emotion/styled';

import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'
import { Container, Section, theme, media } from '../styles'

const Title = styled.h1`
  color: ${theme.colors.darkPurple};
  margin-bottom: 45px;
`;

const Copy = styled.h5`

  max-width: 900px;
  margin-bottom: 15px;

  ${media.medium} {
    font-size: 30px;
  }
`

const SubCopy = styled.h6`
  font-size: 20px;
  color: ${theme.colors.darkGray};
  max-width: 900px;
  margin-bottom: 10px;

  ${media.medium} {
    font-size: 18px;
  }
`

const HeaderLink = styled.a`
  color: ${theme.colors.darkPurple};
  /* text-shadow: -1px -1px 0 ${theme.colors.darkGray}, 1px -1px 0 ${theme.colors.darkGray}, -1px 1px 0 ${theme.colors.yellow}, 1px 1px 0 ${theme.colors.darkGray}; */

  line-height: 44px;


  ${media.medium} {
    font-size: 32px;
  }

  &:hover {
    color: ${theme.colors.darkBlue};
    text-shadow: -1px -1px 0 ${theme.colors.darkGray}, 1px -1px 0 ${theme.colors.darkGray}, -1px 1px 0 ${theme.colors.darkGray}, 1px 1px 0 ${theme.colors.darkGray};
    cursor: pointer;
  }
`
class Who extends Component {
    constructor(props) {
        super(props);
        this.revealRefs = [];
    }
    
    componentDidMount = () => {
        ScrollReveal().reveal(this.refs.title, theme.scrollRevealConfig)
        this.revealRefs.forEach((ref) => ScrollReveal().reveal(ref, theme.scrollRevealConfig));
    }

    render() {
        return (
            <Section bgColor={theme.colors.light} id="who">
                <Element name='who' />
                <Container>
                    <Title ref="title">Quem sou.</Title>
                    <Copy>Meu nome é Silas Leite, moro em Poá - SP com meus pais. Tenho 22 anos, gosto de filmes (me considerava um cinéfilo até pouco tempo atrás) e video games, embora não jogue tanto a ponto de ser considerado um gamer. Porém, caso você tenha se perguntado o que é "TheMilkStripes"; esta é a gametag ou nickname que eu uso no mundo virtual e significa "Traços de leite", pois até um tempo atrás eu tinha vergonha do meu ultimo nome: "Leite" e The Milk Stripes (referência a banda The White Stripes) surgiu como uma forma de depreciar o que quando criança era motivo de piadas, do quais eu me ofendia.</Copy>
                    <SubCopy>Embora tenha me formado em 2019, ainda não tive experiência com clientes ou e o mais perto que estive de "sentir" a programação de produção (programação em produção é como eu gosto de chamar) foi na Digital Innovation One. A Digital Innovation One, me tornou mais otimista, depois de levar uma surra na autoestima em 2020 (pensei até em abandonar a minha formação). Enfim, esse site representa parte do que eu venho aprendendo lá somado aos conhecimentos que já tinha (mesmo que boa parte dos meus conhecimentos já estavam obsoleto). Enfim, este é o meu retorno ou um novo recomeço, pois tenho um portfolio e mais do que isso conheci o conceito de minimum viable product, então boa parte dos projetos que está aqui irão com o tempo ganhar novos recursos (features) ou ter uma cara nova.</SubCopy>
                    <SubCopy>Espero que goste desses projetos e caso queira saber mais <HeaderLink href="mailto:leite.silassantos@gmail.com" target="_blank">entre em contato!</HeaderLink></SubCopy>
                </Container>
            </Section>
        )
    }
}

export default Who
