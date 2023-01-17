import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import {
  experiences,
  projects,
  educations,
  skills,
  contact,
  certificates,
} from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = (e) => {
    setShowNavList(!showNavList)
    e.preventDefault()
    const target = e.target.getAttribute('href')
    if (target === '#about') {
      window.scrollTo({
        left: 0,
        top: document.querySelector(target),
      })
    } else {
      window.scrollTo({
        left: 0,
        top: document.querySelector(target).offsetTop - 80,
      })
    }
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a href='#about' onClick={toggleNavList} className='link link--nav'>
            About
          </a>
        </li>

        {experiences.length ? (
          <li className='nav__list-item'>
            <a
              href='#experiences'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Experiences
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {educations.length ? (
          <li className='nav__list-item'>
            <a
              href='#educations'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Educations
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {certificates.length ? (
          <li className='nav__list-item'>
            <a
              href='#certificates'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Certificates
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
