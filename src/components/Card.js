import React from 'react'
// import './Card.css'
import styled from 'styled-components'


const CardGroup = styled.div`
    width: 100%;
    position:relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    font-weight: 300;
    line-height: 1.5;
    @media (max-width: 640px) {
        margin: 60px 0 0 0;
    }
`

const CardImage = styled.img`
    background: #ffffff;
    position: absolute;
    top: 0;
    height: 110%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const CardTitleGroup = styled.div`
    margin: 40px 40px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 60px 60px;
    grid-column-gap: 20px;
    grid-template-areas:
    "CardTitle CardTitle"
    "CardSubtitle1 CardSubtitle2"
    "CardText1 CardText2"
    "CardFooterText .";
    @media (max-width: 640px) {
        display: block;
    }
`

const CardTitle = styled.h3`
    color: black;
    font-size: 24px;
    margin: 0;
    grid-area: CardTitle;
    @media (max-width: 720px) {
        font-size: 24px;
    }
`

const CardSubtitle1 = styled.h4`
    color: black;
    font-size: 24px;
    font-weight: 400;
    grid-area: CardSubtitle1;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`

const CardSubtitle2 = styled.h4`
    color: black;
    font-size: 24px;
    font-weight: 400;
    grid-area: CardSubtitle2;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`

const CardText1 = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    grid-area: CardText1;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`

const CardText2 = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    grid-area: CardText2;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`

const CardFooterText = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    grid-area: CardFooterText;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`

const Card = props => (


<CardGroup image = { props.bg } className = "Card">
    <CardTitleGroup className = "CardTitleGroup">
        <CardTitle className = "CardTitle">{props.title}</CardTitle>
        <CardSubtitle1 className = "CardSubtitle1">{props.subtitle1}</CardSubtitle1>
        <CardText1 className = "CardText1">{props.text1}</CardText1>
        <CardSubtitle2 className = "CardSubtitle2">{props.subtitle2}</CardSubtitle2>
        <CardText2 className = "CardText2">{props.text2}</CardText2>
        <CardFooterText className = "CardFooterText">{props.footerText}</CardFooterText>
    </CardTitleGroup>
    <CardImage src={props.image}/>
</CardGroup>
)



export default Card
