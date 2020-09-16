import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { LoggedInConsumer } from "./LoggedInContext"
import { uriBase, apiVer } from "../config"
import { patchOne } from "../crud"

export default function ForgotPassword(props) {

    let [userName, setUserName] = React.useState("")
    let [password, setPassword] = React.useState("")

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
            patchOne(`${uriBase}/${apiVer}/users/${userName}`,{ password })
            console.log("Patched")
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <h1>Forgot Password</h1>
            <br></br>
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
            <Form>
                <Form.Group controlId="ForgotPassUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={usernameOnChangeHandler} value={userName} />
                </Form.Group>

                <Form.Group controlId="forgotPassPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={passwordOnChangeHandler} value={password} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" onClick={submitOnClickHandler}>
                    Submit
  </Button>
            </Form>
            <br></br>
            <Link to="/Home">Home</Link>
        </div>
    )
}