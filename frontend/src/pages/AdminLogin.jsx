import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
// import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from './../context/AuthContext'
import { BASE_URL} from './../utils/config'

const Login = () => {

  const [credentials, setCredentials] = useState(
    {
    email: undefined,
    password: undefined
  }
)
   
const {dispatch} = useContext(AuthContext)
const navigate = useNavigate()



  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()

    dispatch({type:'LOGIN_START'})
    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json()
      if(!res.ok) alert(result.message)

      console.log(result.data)

      dispatch({type: 'LOGIN_SUCCESS', payload:result.data})
      navigate('/')

    } catch (err) {
      dispatch({type:'LOGIN_FAILURE', payload:err.message})
    }
  }

  return (
    <section style={{ backgroundColor: '#fff', padding: '50px 0' }}>
        <Container>
            <Row>
                <Col lg="8" md="10" className="m-auto">
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div style={{ width: '100%', marginBottom: '20px', textAlign: 'center' }}>
                            <img src={userIcon} alt="" style={{ width: '50px', marginBottom: '10px' }} />
                            <h2>Admin Login</h2>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        id="email"
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        id="password"
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                                    />
                                </FormGroup>
                                <Button
                                    className="btn secondary__btn auth__btn"
                                    type="submit"
                                    style={{ width: '100%', padding: '10px' }}
                                >
                                    Login
                                </Button>
                            </Form>
                            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                                Don't have an account? <Link to="/register">Create</Link>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
}

export default Login