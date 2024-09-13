import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import JobsView from '../JobsView'
import Header from '../Header'

import './index.css'

const apiJobStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllJobs extends Component {
  state = {
    jobsData: [],
    apiJobStatus: apiJobStatusConstants.initial,
    activePage: 1,
  }

  onClickLeftArrow = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.onGetJobDetails,
      )
    }
  }

  onClickRightArrow = () => {
    const {activePage} = this.state
    if (activePage < 3) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.onGetJobDetails,
      )
    }
  }

  onGetJobDetails = async () => {
    const {activePage} = this.state
    this.setState({apiJobStatus: apiJobStatusConstants.inProgress})
    const jobsApiUrl = ` https://testapi.getlokalapp.com/common/jobs?page=${activePage}`
    const responseJobs = await fetch(jobsApiUrl)
    if (responseJobs.ok === true) {
      const fetchedDataJobs = await responseJobs.json()
      const jobsData = fetchedDataJobs.results
      console.log(jobsData)
      const updatedDataJobs = jobsData.map(eachItem => ({
        companyName: eachItem.company_name,
        jobCategory: eachItem.job_category,
        id: eachItem.id,
        jobDescription: eachItem.title,
        type: eachItem.type,
        location: eachItem.job_location_slug,
        salary: eachItem.salary_max,
        contact: eachItem.custom_link,
      }))
      this.setState({
        jobsData: updatedDataJobs,
        apiJobStatus: apiJobStatusConstants.success,
      })
    } else {
      this.setState({apiJobStatus: apiJobStatusConstants.failure})
    }
  }

  componentDidMount = () => {
    this.onGetJobDetails()
  }

  onGetJobFailureView = () => (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="no jobs found"
        />
      </div>
    </>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />{' '}
    </div>
  )

  onRetryJobs = () => {
    this.onGetJobDetails()
  }

  onGetJobsView = () => {
    const {jobsData} = this.state
    const noJobs = jobsData.length === 0
    const {activePage} = this.state
    return noJobs ? (
      <div className="no-jobs-container">
        <img
          className="no-jobs-img"
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
        />
        <h1>No jobs found</h1>
        <p>We cannot find any jobs try another filters.</p>
      </div>
    ) : (
      <ul className="ul-job-items-container">
        {jobsData.map(eachItem => (
          <JobsView key={eachItem.id} jobData={eachItem} />
        ))}
        <div className="restaurant-arrow-container">
          <button
            type="button"
            className="arrow-controller-button"
            onClick={this.onClickLeftArrow}
          >
            <IoIosArrowBack color="#52606D" size={12} />
          </button>
          <p className="arrow-num">{activePage}</p>
          <button
            type="button"
            className="arrow-controller-button"
            onClick={this.onClickRightArrow}
          >
            <IoIosArrowForward color="#52606D" size={12} />
          </button>
        </div>
      </ul>
    )
  }

  onRenderJobStatus = () => {
    const {apiJobStatus} = this.state

    switch (apiJobStatus) {
      case apiJobStatusConstants.success:
        return this.onGetJobsView()
      case apiJobStatusConstants.failure:
        return this.onGetJobFailureView()
      case apiJobStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="jobs-main-div">{this.onRenderJobStatus()}</div>
      </>
    )
  }
}

export default AllJobs
