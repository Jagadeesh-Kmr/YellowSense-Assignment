import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <img
            src="https://www.signitysolutions.com/hubfs/raw_assets/public/signitysolutions/site-import/images/services/job-portal/banner.png"
            alt="job img"
            className="home-mobile-img"
          />
          <Link to="/jobs">
            <button
              type="button"
              className="find-jobs-button"
              onClick={onRedirectToJobs}
            >
              Find Jobs
            </button>
          </Link>
        </div>
        <img
          src="https://www.signitysolutions.com/hubfs/raw_assets/public/signitysolutions/site-import/images/services/job-portal/banner.png"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
