import Session from 'react-session-api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import style from '../../css/Board.module.css'
import { Link } from 'react-router-dom';
const Board = ({onSeq}) => {
    const [list, setList] = useState([]);
    const [url, setUrl] = useState('/board');

    useEffect(() => {
        axios.get('http://localhost:8080/SpringReactProject/board/list')
        .then(res => setList(res.data))

        console.log(list)

    }, [])

    const onSubmit = () => {
        if(JSON.stringify(Session.get("name")) === '' || JSON.stringify(Session.get("name")) === undefined) {
            alert('로그인 후, 사용 가능한 기능입니다.')
            setUrl('/board');
        }
        else setUrl('/board/write');
    }
    
    return (
        <div>
            <table className={style.table} id={style.list}>
                <thead>
                    <tr>
                        <td colSpan={4}>
                            게시물 목록
                        </td>
                        <td>
                            <Link to={url} onClick={onSubmit}>게시글 작성</Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item => 
                            <tr>
                                <td className={style.seq}>{item.seq}</td>
                                <td className={style.id}>{item.id}</td>
                                <td className={style.name}>{item.name}</td>
                                <td className={style.subject}>
                                    <Link to='/board/item' onClick={() => onSeq(item.seq)}>
                                        {item.subject}
                                    </Link>
                                </td>
                                <td className={style.content}>{item.content}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Board;