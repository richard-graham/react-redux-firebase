import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


class SignUp extends React.Component{
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state )
  }

  render() {
    const { auth } = this.props 
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>Sign In</h5>

          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <button className='btn blue lighten-1 z-depth-0'>Login</button>
          </div>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser ))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignUp)