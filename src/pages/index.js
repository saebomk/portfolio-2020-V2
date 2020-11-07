import React from 'react'
import Link from 'gatsby-link'
// import Card from '../components/Card';
import List from '../components/List'
import Section from '../components/Section';
// import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaRegEnvelope } from 'react-icons/fa';


const IndexPage = () => (

    <div className="Index">
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Saebom April Kwon</h1>
                <p>Hello, I am a UX designer living in Mountain View, CA. <br/>I am passionate in creating simple, usable, and inclusive user interfaces.</p>
                <a href="/FullProject/">See the featured work</a>
            </div>
        </div>

    <div>
        <List
            link="/FullProject/"
            title="Strategic Sourcing Project"
            subtitle="UX Research / UX Design"
            logo="../../Full_Project_0.png"
        />
    </div>
    <div>
        <List
            link="/PatternLibrary/"
            title="How I Created Team Design Pattern Library"
            subtitle="Design System / Interaction Design"
            logo="../../PatternLibrary_0.png"
        />
    </div>
    <div>
        <List
            link="/SupplierInvitationUX/"
            title="Supplier Invitation UX"
            subtitle="UX Research / UX Design / Component"
            logo="../../SupplierInvitationUX_0.png"
        />
    </div>
    <div>
        <List
        link="/ConditionBuilder/"
            title="Visibility Condition Builder UI"
            subtitle="Interaction Design / Component"
            logo="../../ConditionBuilder_0.png"
        />
    </div>

        <div className="Footer">
            <div className="FooterGroup">
                <div className="copyright"><p>Designed by Saebom April Kwon< br/>with React from scratch</p></div>
                <div className="facebook"><a href="https://kr.linkedin.com/in/saebomkwon" aria-label="Go to Linkedin Profile">LinkedIn</a></div>
                <div className="instagram"><a href="https://www.instagram.com/aprilsbkwon/" aria-label="Go to Instagram Profile">Instagram</a></div>
                <div className="email"><a mailto="saebom@umich.edu" aria-label="Send email">Email</a></div>
            </div>
        </div>

    </div>

)

export default IndexPage