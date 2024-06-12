import { useParams, Link, useNavigate } from 'react-router-dom'
import Subbanner from '../../components/Subbanner'
import Viewer from '../../components/Viewer'
import './Movie.css'
import Button from '../../components/Button'

const Movieview=(id)=>{
    const params = useParams();
    const nav = useNavigate();
    return(
        <div className="Moviewrite">
            <Subbanner></Subbanner>
             <div className="content_wrap">
                <div className="content_header">
                    <div className="container_fix clearfix">
                        <h3 className="content_tt">요즘 영화</h3>
                    </div>
                </div>
                <div className="content_body">
                    <div className="container_fix">
                        {params.id}번 게시글
                        <Viewer/>
                    </div>
                </div>
                <div className="content_tail">
                    <div className="container_fix">
                        <div className="btn_list">
                            <Button text={'목록으로'}  onClick={`/movie`} />
                            <Button text={'수정하기'}  onClick={`/movie/edit/${id}`} />
                            <Button text={'글쓰기'} color={"color"} onClick={`/movie/write`} />
                            <Link to='/Movie/write' className='btn_default color'>글쓰기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Movieview