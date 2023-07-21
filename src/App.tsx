import './App.css'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
    const {loginWithRedirect, user, getAccessTokenSilently, isAuthenticated, logout, getIdTokenClaims} = useAuth0()

    console.log(isAuthenticated)
    console.log("user", user)

    getIdTokenClaims().then((claims) => console.log("claims", claims)).catch((err) => console.log("claims err", err))
    getAccessTokenSilently().then((token) => console.log("token", token)).catch((err) => console.log("token err", err))


    return (
        <>
            {!isAuthenticated ? 
            <button onClick={() => loginWithRedirect()}>Login</button> : <button onClick={() => logout()}>Logout</button> 
}
            <button onClick={() => getAccessTokenSilently({
                authorizationParams: {
                    audience: "https://dev-tju32gyremqdjuih.us.auth0.com/api/v2/",
                    scope: "read:private"
                }
            }).then(console.log).catch(err => console.log("send token err", err))}>Send Token</button>
        </>
    )
}

export default App
