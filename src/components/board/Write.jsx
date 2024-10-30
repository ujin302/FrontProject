import Session from 'react-session-api';
import React, { useState } from 'react';

import style from '../../css/Board.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Write = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [div, setDiv] = useState('');
    const navi = useNavigate();

    const onInput = (e) => {
        if(e.target.name === 'subject') {
            setDiv('')
            setSubject(e.target.value)
        }else {
            setDiv('')
            setContent(e.target.value)
        }
    }

    const onBoardSubmit = (e) => {
        var isOk = true;
        e.preventDefault();

        if(subject === '') isOk = false;
        if(content === '') isOk = false;

        if(!isOk) setDiv('필수 입력 사항을 확인하세요.');
        else { // Server -> Client
            axios.post('http://localhost:8080/SpringReactProject/board/submit', 
                null, // 
                {
                    params : {
                        subject: subject,
                        content: content,
                        name: JSON.stringify(Session.get("name"))
                    }
                }
            ).then(res => alert('게시글이 성공적으로 작성되었습니다.'))
            .catch(e => alert(e))

            navi('/board');
        }
    }

    return (
        <form action='http://localhost:8080/SpringReactProject/board/submit' method='post'>
            <table className={style.table} id={style.wrtie}>
                <thead>
                    <tr>
                        <td colSpan={2}>
                            게시글 작성
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={style.inputTh}>제목</th>
                        <td className={style.inputTd}><input type="text" name="subject" id="" value={subject} onChange={onInput}/></td>
                    </tr>
                    <tr>
                        <th className={style.inputTh}>내용</th>
                        <td className={style.inputTd}>
                            <textarea name="content" id="" rows={20} cols={50} value={content} onChange={onInput}></textarea>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <div style={{color: 'red', fontSize: '12px'}}>{div}</div>
                            <button className={style.btn} onClick={onBoardSubmit}>작성</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    );
};

export default Write;