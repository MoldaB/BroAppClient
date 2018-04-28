import {
    LOGIN_USER
} from './Types';

export const loginUser = (username, password) => async (dispatch) => {
    try {
        await setTimeout(() => {
            console.log(`Loging in username ${username}`);
            return {
                type:LOGIN_USER,
                payload:true
            }
        }, 2000);
    } catch (e) {
        console.log(e);
    }
};