import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const SectionGroup = styled.div`
    height: 100%;
    padding: 40px;
    display: block;
    position: relative;
    @media (max-width: 1024px) {
        height: 100%;
        padding: 32px;
    }

    &:nth-child(even) {
        background: #fafafa;
    }

    &:nth-child(odd) {
        background: #ffffff;
    }
`

const SectionLink = styled.a`
`
const SectionLogo = styled.img`
    align-self: center;
    max-width: 920px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    @media (max-width: 1024px) {
        width: 100%;
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    width: 50%;
    margin: 40px 200px;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        margin: 32px 8px;
        width: 100%;
    }
`

const SectionTitle = styled.h3`
    color: black;
    font-size: 16px;
    margin: 0;
    line-height: 1.2;
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`

const SectionSubtitle = styled.h4`
    color: black;
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0;
    line-height: 1.2;
    @media (max-width: 1024px) {
        font-size: 20px;
    }
`

const SectionText = styled.p`
    color: black;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
    @media (max-width: 1024px) {
        font-size: 12px;
    }
`

const NextSection = styled.a`
    color: black;
`

const Section = props => (
	<SectionGroup image={props.bg}>
		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
			<SectionText>{props.text}</SectionText>
		</SectionTitleGroup>
        <SectionLink href={props.logo}><SectionLogo src={props.logo} /></SectionLink>
	</SectionGroup>
)

export default Section