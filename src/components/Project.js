import covid from './covid.gif'

const Project = () => {
  return (
    <>
      <div className='row mb-5 pb-5'>
        <div className='col-lg-7 col-md-6 col-sm-12 col-12'>
          <img src={covid} alt='' className='card-img' />
        </div>
        <div className='col-lg-5 col-md-6 col-sm-12 col-12 text-right'>
          <h6 className='text-primary'>Featured Project</h6>
          <h5 className='text-light font-weight-bold'>COVID-19 Tracker</h5>

          <div class='card shadow-lg'>
            <div class='card-body'>
              <blockquote class='blockquote mb-0'>
                <p>
                  This project is all about live COVID-19 Updates from all over
                  the world.
                </p>
              </blockquote>
            </div>
          </div>

          <div class='btn-group' role='group' aria-label='Basic example'>
            <span type='button' class='btn text-primary btn-lg'>
              <i className='fab fa-react'></i>{' '}
              <span className='text-muted work-icons'>React.js</span>
            </span>
            <span type='button' class='btn text-primary btn-lg'>
              <i className='fab fa-bootstrap'></i>{' '}
              <span className='text-muted work-icons'>Bootstrap</span>
            </span>
          </div>
          <br />

          <div class='btn-group' role='group' aria-label='Basic example'>
            <span type='button' class='btn text-primary btn-lg'>
              <a
                href='https://github.com/ahmaat19/covid-19-tracker'
                target='blank'
              >
                <i className='fab fa-github'></i>{' '}
                <span className='text-muted work-icons'>Source Code</span>
              </a>
            </span>

            <span type='button' class='btn text-primary btn-lg'>
              <a href='https://ahmaat19covid19.herokuapp.com/' target='blank'>
                <i className='fas fa-external-link-alt'></i>{' '}
                <span className='text-muted work-icons'>Live Demo</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className='row mb-5 pb-5'>
        <div className='col-lg-5 col-md-6 col-sm-12 col-12 text-right'>
          <h6 className='text-primary'>Featured Project</h6>
          <h5 className='text-light font-weight-bold'>COVID-19 Tracker</h5>

          <div class='card shadow-lg'>
            <div class='card-body'>
              <blockquote class='blockquote mb-0'>
                <p>
                  This project is all about live COVID-19 Updates from all over
                  the world.
                </p>
              </blockquote>
            </div>
          </div>

          <div class='btn-group' role='group' aria-label='Basic example'>
            <span type='button' class='btn text-primary btn-lg'>
              <i className='fab fa-react'></i>{' '}
              <span className='text-muted work-icons'>React.js</span>
            </span>
            <span type='button' class='btn text-primary btn-lg'>
              <i className='fab fa-bootstrap'></i>{' '}
              <span className='text-muted work-icons'>Bootstrap</span>
            </span>
          </div>
          <br />

          <div class='btn-group' role='group' aria-label='Basic example'>
            <span type='button' class='btn text-primary btn-lg'>
              <a
                href='https://github.com/ahmaat19/covid-19-tracker'
                target='blank'
              >
                <i className='fab fa-github'></i>{' '}
                <span className='text-muted work-icons'>Source Code</span>
              </a>
            </span>

            <span type='button' class='btn text-primary btn-lg'>
              <a href='https://ahmaat19covid19.herokuapp.com/' target='blank'>
                <i className='fas fa-external-link-alt'></i>{' '}
                <span className='text-muted work-icons'>Live Demo</span>
              </a>
            </span>
          </div>
        </div>
        <div className='col-lg-7 col-md-6 col-sm-12 col-12'>
          <img src={covid} alt='' className='card-img' />
        </div>
      </div>
    </>
  )
}

export default Project
