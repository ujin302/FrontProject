import './App.css';
import './css/style.css'

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Login from './components/member/Login';
import Main from './components/main/Main';
import Board from './components/board/Board';

import { useEffect, useState } from 'react';
import Session from 'react-session-api';
import Write from './components/board/Write';
import BoardItem from './components/board/BoardItem';

function App() {
  const [name, setName] = useState('');
  const [login, isLogin] = useState(false);
  const [seq, setSeq] = useState(0);


  useEffect(() => {
    if(name === undefined || name === '') {
      isLogin(false);
    } else {
      isLogin(true);
    }
  }, [name])

  const onLogout = () => {
    Session.set("name", undefined); // 값 초기화
    setName('');
    console.log(JSON.stringify(Session.get("name")))
    alert('로그아웃 되었습니다.')
  }

  const onSeq = (s) => {
    setSeq(s);
  }

  return (
    <BrowserRouter>
      <>
        <nav className='menunav'>
          <ul>
            <li><Link to='/'>메인화면</Link></li>
            {
              login ? <li onClick={onLogout}><Link to='/'>로그아웃</Link></li> : <li><Link to='/login'>로그인</Link></li>
            }
            <li><Link to='/board'>게시물</Link></li>
          </ul>
            <div id='user'>
              {
                JSON.stringify(Session.get("name")) !== undefined && JSON.stringify(Session.get("name")).replaceAll('"', '')
              }
            </div>
        </nav>
        

        <div className='main'>
          <Routes>
            <Route path='/' element={ <Main/> }></Route>
            <Route path='/login' element={ <Login setName={setName}/> }></Route>
            <Route path='/board' element={ <Board onSeq={onSeq}/> }/>
            <Route path='/board/item' element={ <BoardItem seq={seq}/> }/>
            <Route path='/board/write' element={ <Write/> }/>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
