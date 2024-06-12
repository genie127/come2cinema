
import './App.css';
import {useReducer, useRef, createContext} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 라우팅을 위한 react-router-dom import
import Main from './components/Main'
import MovieList from './pages/movie/MovieList'
import MovieWrite from './pages/movie/MovieWrite'
import MovieEdit from './pages/movie/MovieEdit'
import MovieView from './pages/movie/MovieView'
import img from './assets/movie_img.png'

const mockData = [
  {
    id:1,
    title:1,
    img:img,
    status:'상영중',
    content: '1번일기내용',

  },
  {
    id:2,
    title:2,
    img:img,
    status:'개봉예정',
    content: '2번일기내용',

  },
  {
    id:3,
    title:3,
    img:img,
    status:'상영중',
    content: '3번일기내용',

  }
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state];
    case 'UPDATE': 
      return state.map((item)=>
      String(item.id)===String(action.data.id) ? action.data : item);
    case 'DELETE':
      return state.filter((item)=>String(item.id) !== String(action.id))
    default:
      return state;

  }
}

export const PostStateContext = createContext();
export const PostDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer,mockData)
  const idRef = useRef(4);

  const onCreate=(status,img,title,content)=>{//게시글 추가
    dispatch({
      type:"CREATE", 
      data:{
        id: idRef.current++,
        title,
        status,
        img,
        content,
      },
      
    })
  }
  const onEdit=(id,status,img,title,content)=>{ //게시글 수정
    dispatch({
      type:'UPDATE',
      data:{
        id,
        title,
        status,
        img,
        content,
      },
    })
  }
  const onDelete=(id)=>{//게시글 삭제
    dispatch({
      type:'DELETE',
      id
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
          <PostStateContext.Provider value={data}>
            <PostDispatchContext.Provider value={{onCreate, onEdit, onDelete}}>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/movie" element={<MovieList />} /> {/* 영화목록 - sjh */}
                  <Route path='/movie/write' element={<MovieWrite/>}/>{/* 영화글쓰기 - sjh */}
                  <Route path='/movie/edit/:id' element={<MovieEdit/>}/>{/* 영화수정 - sjh */}
                  <Route path='/movie/post/:id' element={<MovieView/>}/>{/* 영화상세 - sjh */}
                </Routes>
            </PostDispatchContext.Provider>
          </PostStateContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
