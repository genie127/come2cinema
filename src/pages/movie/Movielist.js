import {useContext} from 'react'
import { PostStateContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Subbanner from '../../components/Subbanner'
import Header from '../../components/Header'
import Button from '../../components/Button'
import './Movie.css'
import MovieItem from './MovieItem'

const Movielist=()=>{
    const data = useContext(PostStateContext)
    const nav = useNavigate();
    return(
        <div className="Movielist">
            <Header></Header>
            <Subbanner></Subbanner>
             <div className="content_wrap">
                <div className="content_header">
                    <div className="container_fix clearfix">
                        <h3 className="content_tt">요즘 영화</h3>
                    <form action="" className="search_form">
                        <input type="text" placeholder="검색어를 입력하세요" />
                        <button type="submit"><span className="search"></span></button>
                    </form>
                    </div>
                </div>
                <div className="content_body">
                    <div className="container_fix">
                        <ul className="movie_con">
                            {data?.map((item)=><MovieItem key={item.id}{...item}/>)}
                        </ul>
                    </div>
                </div>
                <div className="content_tail">
                    <div className="container_fix">
                        <div className="btn_list">
                            <Button text={'글쓰기'} color={'color'} onClick={()=>{nav('write')}}/>
                        </div>
                        <div className="pagination">
                            <ul className="pagination_wrap">
                                <li className="left double">
                                    <a href=""><span></span></a>
                                </li>
                                <li className="left">
                                    <a href=""><span></span></a>
                                </li>
                                <li className="active">
                                    <a href="">1</a>
                                </li>
                                <li>
                                    <a href="">2</a>
                                </li>
                                <li>
                                    <a href="">3</a>
                                </li>
                                <li>
                                    <a href="">4</a>
                                </li>
                                <li>
                                    <a href="">5</a>
                                </li>
                                <li className="right">
                                    <a href=""><span></span></a>
                                </li>
                                <li className="right double">
                                    <a href=""><span></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Movielist