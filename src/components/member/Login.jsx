import Session from 'react-session-api';
import axios from 'axios';
import React, { useState } from 'react';

import style from '../../css/Login.module.css'
import { useNavigate } from 'react-router-dom';
const Login = ({setName}) => {
    const [loginCheck, setLoginCheck] = useState('');
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const [idDiv, setIdDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');

    const navi = useNavigate();

    const onInput = (e) => {
        if(e.target.name === 'id') {
            setIdDiv('')
            setId(e.target.value)
        }else {
            setPwdDiv('')
            setPwd(e.target.value)
        }

        setLoginCheck('')
    }

    const onLoginSubmit = (e) => {
        var isOk = true;
        e.preventDefault();

        // alert(id +'&'+ pwd)

        // 유효성 확인
        if(!id) {
            setIdDiv('아이디 입력');
            isOk = false;
        }
        if(!pwd) {
            setPwdDiv('비밀번호 입력');
            isOk = false;
        }

        // Client - Server
        if(isOk) {
            axios.get(`http://localhost:8080/SpringReactProject/member/login/submit?id=${id}&pwd=${pwd}`)
            .then(res => {
                Session.set("name", res.data) 

                // 로그인 실패
                if(res.data === 'fail') {
                    console.log('loginCheck === "" >>> ' + JSON.stringify(Session.get("name")));
                    setLoginCheck('로그인 정보가 올바르지 않습니다.');
                    // console.log(JSON.stringify(Session.get("name")));
                    alert('로그인 정보가 올바르지 않습니다.')
                }else {
                    console.log('loginCheck !== "" >>> ' + JSON.stringify(Session.get("name")));
                    setName(JSON.stringify(Session.get("name")))

                    navi('/');
                }
            })
            .catch(e => console.log(e))
        }

    }
    
    return (
        <>
            <form className={style.form}>
                <h2 className={style.title}>Login</h2>
                <table className={style.table}>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" id="id" name="id" value={id} onChange={onInput}/>
                                <div id={style.idDiv}>{idDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" id="pwd" name="pwd" value={pwd} onChange={onInput}/>
                                <div id={style.pwdDiv}>{pwdDiv}</div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2' align='center'>
                                <div id={style.Div}>{loginCheck}</div>
                                <button onClick={onLoginSubmit} className={style.btn}>로그인</button>
                                
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </>
    );
};

export default Login;