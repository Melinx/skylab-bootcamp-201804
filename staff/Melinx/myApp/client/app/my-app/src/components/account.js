import React from 'react'
import logic from '../logic'

function Account(props) {
    return <main>
        <h1>Account</h1>
        <button onClick={() => {
            logic.logout()

            props.onLogout()
        }}>Logout</button>
    </main>
}

export default Account