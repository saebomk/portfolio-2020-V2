import React from 'react';
import styled from 'styled-components';

const ListLink = styled.a`
`

const ListGroup = styled.div`
    height: 160px;
    padding: 0 20% 0 20%;
    display: block;
    position: relative;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1.0);

    display: grid;
    grid-template-columns: 7fr 3fr;
    @media (max-width: 1440px) {
        grid-template-columns: 1fr;
        padding: 0;
        height: 100%;
    }

    &:nth-child(even) {
        background: #fafafa;
    }

    &:nth-child(odd) {
        background: #fafafa;
    }

    :hover {
        background: #ffffff;
    }
`

const ListLogoGroup = styled.div`
    height: 160px;
    width: auto;
    margin: 0;
    padding: 0;
    @media (max-width: 1440px) {
        grid-template-columns: 1fr;
        height: 100%;
    }
`

const ListLogo = styled.img`
    align-self: center;
    height:100%;
    margin: 0 auto;
    @media (max-width: 1440px) {
        width: 100%;
    }
`

const ListTitleGroup = styled.div`
    display: grid;
    margin: 40px;
    @media (max-width: 1440px) {
        grid-template-columns: 1fr;
        margin: 32px;
    }
`

const ListTitle = styled.h3`
    color: black;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    @media (max-width: 1440px) {
        font-size: 14px;
        margin: 0px;
    }
`

const ListSubtitle = styled.h4`
    color: black;
    font-size: 12px;
    font-weight: 300;
    @media (max-width: 1440px) {
        font-size: 12px;
        margin: 0px;
    }
`

const List = props => (
    <ListLink href={props.link}>
        <ListGroup image = {props.image}>
            <ListTitleGroup>
                <ListTitle>{props.title}</ListTitle>
                <ListSubtitle>{props.subtitle}</ListSubtitle>
            </ListTitleGroup>
            <ListLogoGroup>
                <ListLogo src={props.logo} />
            </ListLogoGroup>
        </ListGroup>
    </ListLink>
)

export default List