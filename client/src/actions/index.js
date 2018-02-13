import types from './types';
import axios from 'axios';


export function sign_in(cred){
    return dispatch=>{
        axios.post('auth/signin', cred).then(resp =>{
            console.log('response from sign in', resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({type: types.SIGN_IN})
        }).catch(err=>{
            console.log('error', err);
            dispatch({
                type: types.ERROR,
                payload: 'invalid sign in information'
            })
        });
    }
}

export function sign_up(cred){
    return async dispatch =>{
        try{
            const request  = await axios.post('/auth/signup',cred);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: types.SIGN_UP
            });
        }
        catch(err){
            dispatch({
                type: types.ERROR,
                payload: 'invalid sign up info'
            })
        }

    }
}
