import {useCallback, useEffect, useReducer, useState} from 'react';
import {useAuth} from "../../hooks/use-auth";
import {useRouter} from "next/router";


const Login = () => {
    const {login, user} = useAuth();

    const router = useRouter();

    const [values, setValue] = useReducer((state, action) => {
        switch (action.type) {
            case 'mail':
                return {...state, mail: action.payload};
            case 'password':
                return {...state, password: action.payload};
            default:
                return state;
        }
    },{mail: 'rabiabrg7@gmail.com', password: 'rabia123'});

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        const {mail, password} = values;
        login(mail, password);

    }, [values]);

    return (
        <div className="main">
            <div className="col-12">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <img src="/assets/image/rgb-mini-logo.png" alt="" className="mini-logo"/>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="email" className="email" placeholder="Kullanıcı Adı"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="password" placeholder="Şifre"/>
                                </div>
                                <button type="submit">Giriş Yap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
