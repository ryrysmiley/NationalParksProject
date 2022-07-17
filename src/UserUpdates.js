import { auth } from "./Util.js";
import { createContext, useState, useEffect } from "react";
import { set, ref, onValue } from "firebase/database";
import { userPDatabase } from "./Util.js";
export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                //create dataset if doesn't exist
                onValue(ref(userPDatabase, user.uid), (snapshot) => {
                    if(!snapshot.exists()){
                        set(ref(userPDatabase, user.uid), {
                            email: user.email,
                            photo_url: user.photoURL
                        });
                    }
                })
            }
            else {
                setUser(null);
            }
        })

        return () => unsubscribe()
    }, [])

    return(
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}