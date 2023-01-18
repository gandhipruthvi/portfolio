import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.position}</h3>
    <h5>{experience.employeer}</h5>

    <p className='experience__description'>{experience.description}</p>
    {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {experience.duration && (
      <p className='experience__duration'>{experience.duration}</p>
    )}
  </div>
)

export default ExperienceContainer
