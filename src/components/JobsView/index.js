// import {Link} from 'react-router-dom'
import {MdLocationOn, MdContactPhone} from 'react-icons/md'
import './index.css'

const JobsView = props => {
  const {jobData} = props
  const {
    companyName,
    jobCategory,
    jobDescription,
    type,
    location,
    salary,
    contact,
  } = jobData
  const jobItemDiv =
    type === 1040 ? 'job-empty-container' : 'job-item-container'

  const salaryDetails = salary === null ? 'Contact HR' : `${salary}`
  return (
    <>
      <li className={jobItemDiv}>
        <div>
          <div className="img-title-container">
            <div className="title-rating-container">
              <h1 className="company-heading">{companyName}</h1>
              <div className="contact-container">
                <MdContactPhone className="contact-icon" />
                <p className="rating-text">{contact}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="location-icon-container">
              <MdLocationOn className="location-icon" />
              <p className="location">{location}</p>
            </div>
            <div className="job-type">
              <p>{jobCategory}</p>
            </div>
            <div className="package">
              <p className="lpa">₹ {salaryDetails} </p>
            </div>
          </div>
        </div>
        <hr className="item-hr-line" />
        <div className="second-part-container">
          <h1 className="description-heading">Job Description</h1>
          <p className="description-para">{jobDescription}</p>
        </div>
      </li>
    </>
  )
}

export default JobsView
