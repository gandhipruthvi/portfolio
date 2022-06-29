import uniqid from 'uniqid'
import { certificates } from '../../portfolio'
import './Certificates.css'

const Certificates = () => {
  if (!certificates.length) return null

  return (
    <section id='certificates' className='section certificates'>
      <h2 className='section__title'>Certificates & Awards</h2>

      <div className='certificates__grid'>
        {certificates.map((certificate) => (
          <div className='certificate' key={uniqid()}>
            {certificate.link ? (
              <a
                href={certificate.link}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='source code'
                className='link link--icon'
              >
                {certificate.certificate} - {certificate.date}
              </a>
            ) : (
              <p>
                {certificate.certificate} - {certificate.date}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
