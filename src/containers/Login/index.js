import React, {useState} from 'react'
import {LOGIN} from './graphql'
import {useMutation} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [login, {loading, error}] = useMutation(LOGIN, {
        variables: {
            email: email,
            password: pass,
        },
        onCompleted: ({login: {token}}) => {
            console.log("completed")
            localStorage.setItem('token', token)
            history.push('/home')
        }
    })

    if (error) {
        console.log('errro')
    }


    return (
        <div>
            <h1>Welcome</h1>
            <label>Email</label>
            <input
                type = 'text'
                name = 'email'
                onChange ={(e) => setEmail(e.target.value)}
                value= {email}
            />
            <label>Password</label>
            <input
                type = 'password'
                name = 'password'
                onChange ={(e) => setPass(e.target.value)}
                value= {pass}
            />
            <button
                onClick={login}
            >
            login
            </button>
        </div>
    )
}

export default Login