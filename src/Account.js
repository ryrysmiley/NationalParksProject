import { auth, provider } from "./Util"
import { signInWithPopup, signOut } from "@firebase/auth"
import { useContext } from "react"
import { UserContext } from "./UserUpdates"
export function Account(){ 
    const user = useContext(UserContext);
    return(
        <div className="signin">
            {!user && (<button className="signinpopup" onClick={()=>signInWithPopup(auth, provider)}>Sign in with Google</button>)}
            {user && (<div className="userInfo">
                <img className="pfp" alt="pfp" src={user.photoURL} />
                <h1>Signed in with<br/>{user.email}</h1>
            </div>)}
            {user && (<div className="fillright"><button className="signoutpopup" onClick={()=>signOut(auth)}>Sign Out</button></div>)}
        </div>
    )
}