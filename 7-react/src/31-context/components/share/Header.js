import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ isLoggedIn, user, isLoading, logout }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div className='box header' style={theme}>
                <h2>Header</h2>
                {!isLoading && (
                  <div>
                    {isLoggedIn ? (
                      <span>
                        <span>{user.username}</span>
                        <span onClick={logout} className='logout'>
                          Logout
                        </span>
                      </span>
                    ) : (
                      <Link to={'/login'}>Login</Link>
                    )}
                  </div>
                )}
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
