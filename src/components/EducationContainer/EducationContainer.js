import uniqid from 'uniqid'
import './EducationContainer.css'

const EducationContainer = ({ education }) => (
  <div className='education'>
    <h3>{education.degree}</h3>
    <h5>{education.insitution}</h5>
    <p>{education.grades}</p>

    {/* <p className='education__description'>{education.description}</p> */}
    {education.stack && (
      <ul className='education__stack'>
        {education.stack.map((item) => (
          <li key={uniqid()} className='education__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {education.date && <p>{education.date}</p>}
  </div>
)

export default EducationContainer
