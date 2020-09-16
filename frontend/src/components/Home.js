import React from 'react'
import { Link } from 'react-router-dom'
import { LoggedInContext } from "./LoggedInContext"

export default function Home(props) {

    let {users, loggedIn} = React.useContext(LoggedInContext)

    const isLoggedIn = () => {

        if (loggedIn) {
            return (<h3>Logged In</h3>)
        } else {
            return (<h3>Not Logged In</h3>)
        }

    }

    return (
        <div>

            <h1>Welcome to the Home Page</h1>
                      

            <br></br>
            <Link to="/login">Login</Link>
            <br></br>
            <Link to="/signup">Sign Up</Link>
            <br></br>
            <Link to="/forgotpassword">Forgot Password</Link>
            <br></br>
            <Link to="/admin">Edit Users</Link>
            {isLoggedIn()}
            <br></br>
            {
                users.map(user => {
                    return <li key={user.username}>{user.username}</li>
                })
            }
        </div>
    )
}