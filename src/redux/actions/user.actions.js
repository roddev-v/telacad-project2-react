import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { app } from "../../firebase-init"

export class UserActions {
    static LOGIN_SUCCESSFUL = '[User] Login successful'
    static LOGOUT_SUCCESSFUL = '[User] Logout successful'
    static AUTH_ERROR = '[User] Auth user'
    static USER_DATA_LOADED = '[User] data loaded'
}

export function login() {
    const auth = getAuth(app)
    return (dispatch) => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(data => {
                dispatch(loginSuccessful(data.user));
            }).catch(e => {
                dispatch(actionError(e));
            })
    }
}

export function initUserData() {
    const auth = getAuth(app)
    return (dispatch) => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch(loginSuccessful(user));
            }
        })
    }
}

export function logout() {
    const auth = getAuth(app)
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(logoutSuccessful())
            })
            .catch(e => dispatch(actionError(e)))
    }
}

export function loginSuccessful(data) {
    return {
        type: UserActions.LOGIN_SUCCESSFUL,
        payload: data
    }
}

export function logoutSuccessful() {
    return {
        type: UserActions.LOGOUT_SUCCESSFUL
    }
}

export function actionError(e) {
    return {
        type: UserActions.AUTH_ERROR,
        payload: e
    }
}
