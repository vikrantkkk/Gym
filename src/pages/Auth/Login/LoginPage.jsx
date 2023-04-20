import React, { useState } from 'react'
import styles from './LoginPage.module.css'
// import login1 from '../../../assets/Images';
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Buttons/Button'
import Navbar from '../../Navbar/Navbar'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const userData = {
      username,
      password
    }
    localStorage.setItem('userData', JSON.stringify(userData))
  }
const navigate = useNavigate()
  const handleClickRegister = () => {
    navigate('/register')
  }

  return (
<div> 
  <Navbar/>
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Email:
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
          />
        </label>
        <button className={styles.button} type='submit'>
          Login{' '}
        </button>
        <Button  onClick={handleClickRegister} buttonName='Register' className={styles.ress}/>

      </form>
    </div>
    </div>
  )
}

export default LoginPage