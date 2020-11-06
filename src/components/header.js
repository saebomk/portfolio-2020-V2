import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import { renderStatic } from 'react-helmet'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.scrollTo(0, 0);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link className="HeaderTitle" to="/">Saebom April Kwon</Link>
          <a className="Resume" href="https://drive.google.com/file/d/1iey-Ias6Ydf37Mll6UVdUpOz0I8sJ5xB/view?usp=sharing">Resume</a>
          <a className="PastWork" href="https://www.notion.so/saebomkwon/Saebom-April-Kwon-6a914788d7874486a2046793c4243539">Not work</a>
        </div>
      </div>
    )
  }
}

export default Header
