import React,{useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { LoggedInConsumer, LoggedInContext } from "./LoggedInContext"
import { uriBase, apiVer } from '../config'
import {createOne} from '../crud'


export default function Signup(props) {

    let [userName, setUserName] = React.useState("")
    let [password, setPassword] = React.useState("")

    let {token} = useContext(LoggedInContext)
    const usernameOnChangeHandler = (event) => {

        event.preventDefault()
        setUserName(event.target.value)
    }

    const passwordOnChangeHandler = (event) => {

        event.preventDefault()
        setPassword(event.target.value)
    }

    const submitOnClickHandler = (event) => {
        event.preventDefault()

        try {
            createOne(`${uriBase}/${apiVer}/users`, token ,{userName, password})
            console.log("added")
        }
        catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <LoggedInConsumer>
                {
                    value => (

                        value.loggedIn ? (

                            <h3>Logged In</h3>
                        ) : (
                                <h3>Not Logged In</h3>
                            )
                    )

                }
            </LoggedInConsumer>
            <br></br>
            <Form>
                <Form.Group controlId="signupUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={usernameOnChangeHandler} value={userName} />

                </Form.Group>

                <Form.Group controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={passwordOnChangeHandler} value={password} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" onClick={submitOnClickHandler}>
                    Submit
  </Button>
            </Form>
            <br></br>
            <Link to="/Home">Home Page</Link>
        </div>
    )
}