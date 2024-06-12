import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const MovieEdit=()=>{
    const nav = useNavigate();
    const params = useParams();
    return( 
        <>
            {params.id}번 게시글 수정
            <div className="content_tail">
                <div className="container_fix">
                    <div className="btn_list">
                        <Button onClick={()=>{nav(-1)}} text={'목록'} />
                        <Button text={'글쓰기'} color={'color'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieEdit;