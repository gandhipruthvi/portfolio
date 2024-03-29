import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import uniqid from 'uniqid'
import { about } from '../../portfolio'
import './About.css'
import profileImg from '../../assests/images/profile2.JPG'

const About = () => {
  const { name, role, description, resume, social, stack } = about

  return (
    <div className='section about center'>
      <img
        src={profileImg}
        alt='Boy stand with a smile'
        className='about__image'
      />
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      {stack && (
        <ul className='about__stack'>
          {stack.map((item) => (
            <li key={uniqid()} className='about__stack-item'>
              <i className={item.icon} style={{ color: item.color }} />
              <span className='icon__name'>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} rel='noopener noreferrer' target='_blank'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
