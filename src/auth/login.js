import request from "../requests.js";
import {doLogin} from "../redux/reduces/auth.js";


export default function TryLogin(email, password, dispatch) {
    request.post('/auth/login',
        {
            email: email,
            password: password
        },
        {}
    )
    .then((response) => {
        console.log(response);
        return response['data'];
    })
    .then((data) => {
        console.log(data);
        dispatch(doLogin(data))
    });
}