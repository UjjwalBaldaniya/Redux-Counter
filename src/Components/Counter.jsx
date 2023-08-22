import React from "react";
import "../Styles/counter.css"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, login, logout } from "../Redux/Actions";

const Counter = () => {
    const counter = useSelector((state) => state.counterReducer)
    const auth = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className="counter_container">
                <h1 className="title">Counter app using React-Redux</h1>
                <div className="inc-dec_section">
                    <button onClick={() => dispatch(increment())}>+</button>
                    <h1>{counter}</h1>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
                <div className="auth_section">
                    <div className="login-logout_section">
                        <button onClick={() => dispatch(login())} className="btn_login" >Log in</button>
                        <button onClick={() => dispatch(logout())} className="btn_logout">Log out</button>
                    </div>
                </div>
                <div className="login-logout_details">
                    {auth ? <h2>Your are Succesfully Login</h2> : <h2>Your are not Login In</h2>}
                </div>
            </div>
        </>
    )
};

export default Counter;
