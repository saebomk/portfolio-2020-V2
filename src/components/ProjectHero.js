import React from 'react';
import styled, { css } from 'styled-components';

const ProjectHeroGroup = styled.div`
    height: 720px;
    padding: 15% 15% 0 15%;
    overflow: hidden;
    background-color: #484848;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 50px;
    grid-column-gap: 48px;
    grid-template-areas:
        "TitleGroup LogoGroup";
    position: relative;
    @media (max-width: 1140px) {
        padding: 48px;
        background-size: cover;
        overflow: hidden;
        display: block;
    }
`

const ProjectHeroLogoGroup = styled.div`
    grid-grea: LogoGroup;
    height: 200px;
    width: auto;
    margin: 0;
    padding: 0;
`

const ProjectHeroLogo = styled.img`
    align-self: center;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 1140px) {
        width: 100%;
    }
`

const ProjectHeroTitleGroup = styled.div`
    grid-area: TitleGroup;
    display: grid;
    grid-template-columns: 1fr 32px 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "Title Title Title"
    "Date . Role"
    "DateValue . RoleValue"
    "Impact . ." 
    "ImpactValue ImpactValue ImpactValue";
    @media (max-width: 1140px) {
        margin: 16px;
        display: inline-block;
    }
`

const ProjectHeroTitle = styled.h3`
    grid-area: Title;
    color: white;
    font-size: 32px;
    font-weight: 500;
    margin: 0;
    @media (max-width: 1140px) {
        font-size: 24px;
        margin: 32px 0 16px 0;
    }
`


const ProjectHeroDate = styled.h4`
    grid-area: Date;
    color: white;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
        margin: 0px;
    }
`

const ProjectHeroRole = styled.h4`
    grid-area: Role;
    color: white;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
        margin: 0px;
    }
`
const ProjectHeroImpact = styled.h4`
grid-area: Impact;
color: white;
font-size: 16px;
font-weight: 500;
@media (max-width: 720px) {
    font-size: 12px;
    margin: 0px;
}
`


const ProjectHeroDateValue = styled.p`
grid-area: DateValue;
    color: white;
    font-size: 14px;
    font-weight: 300;
    @media (max-width: 720px) {
        font-size: 12px;
        margin: 0 0 16px 0;
    }
`

const ProjectHeroRoleValue = styled.p`
grid-area: RoleValue;
    color: white;
    font-size: 14px;
    font-weight: 300;
    @media (max-width: 720px) {
        font-size: 12px;
        margin: 0 0 16px 0;
    }
`

const ProjectHeroImpactValue = styled.p`
grid-area: ImpactValue;
    color: white;
    font-size: 14px;
    font-weight: 300;
    @media (max-width: 720px) {
        font-size: 12px;
        margin: 0 0 16px 0;
    }
`

const ProjectHero = props => (
    <ProjectHeroGroup>
        <ProjectHeroTitleGroup>
            <ProjectHeroTitle>{props.title}</ProjectHeroTitle>
            <ProjectHeroDate>Initial Delivery</ProjectHeroDate><ProjectHeroDateValue>{props.date}</ProjectHeroDateValue>
            <ProjectHeroRole>Role</ProjectHeroRole><ProjectHeroRoleValue>{props.role}</ProjectHeroRoleValue>
            <ProjectHeroImpact>Impact</ProjectHeroImpact><ProjectHeroImpactValue>{props.impact}</ProjectHeroImpactValue>
        </ProjectHeroTitleGroup>
        <ProjectHeroLogoGroup>
            <ProjectHeroLogo src={props.logo} />
        </ProjectHeroLogoGroup>
    </ProjectHeroGroup>
)


export default ProjectHero