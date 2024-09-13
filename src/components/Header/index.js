import {Link, withRouter} from 'react-router-dom'

import {RiFileSearchLine} from 'react-icons/ri'
import {IoBookmarkSharp} from 'react-icons/io5'

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/bookmarks" className="nav-link">
                Bookmarks
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/jobs" className="nav-link">
              <RiFileSearchLine className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/bookmarks" className="nav-link">
              <IoBookmarkSharp className="nav-bar-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
