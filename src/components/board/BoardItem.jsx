import React, { useEffect, useState } from 'react';

import style from '../../css/BoardItem.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const BoardItem = ({seq}) => {
    const [dto, setDto] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/SpringReactProject/board/item?seq=${seq}`)
        .then(res => {
            console.log(res.data)
            setDto(res.data)
        });

    }, [])
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>
                        <div>{dto.subject}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id={style.name}>
                        {dto.name}
                    </td>
                </tr>
                <tr>
                    <td className={style.content}>
                        <div>{dto.content}</div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                    <Link to='/board'><button className={style.btn}>목록</button></Link>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default BoardItem;