import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import {useState} from 'react'

const Editor=({onSubmit})=>{
    const nav = useNavigate();
    const [input, setInput] = useState({
        title:"",
        status:"개봉예정",
        img:"",
        content:"",
    })
    const onChangeInput = (e)=>{
        console.log(e.target.name)
        console.log(e.target.value)

        let name = e.target.name;
        let value = e.target.value;

        setInput({
            ...input,
            [name]:value
        })
    }

    const onClickSubmitButton =()=>{
        onSubmit(input);
    }
    return(
        <div className="Editor">
            <div className="content_body">
                <div className="container_fix">
                    <div className="write_con">
                        <label for="" className="write_label">제목</label>
                        <input type="text" placeholder="제목을 입력하세요" name="title" onChange={onChangeInput} value={input.title}/>
                    </div>
                    <div className="write_con">
                        <label for="" className="write_label">개봉상태</label>
                        <select name="status" value={input.status} onChange={onChangeInput}>
                            <option value="개봉예정">개봉예정</option>
                            <option value="상영중">상영중</option>
                        </select>
                    </div>
                    <div className="write_con">
                        <label for="" className="write_label">내용</label>
                        <textarea name="content" id="" onChange={onChangeInput} value={input.content}></textarea>
                    </div>
                    <div className="write_con file">
                        <p className="write_label">파일첨부</p>
                        <label for="file_input">파일선택</label>
                        <input type="file" id="file_input" name="img" value={input.img} onChange={onChangeInput}/>
                    </div>
                </div>
            </div>  
            <div className="content_tail">
                <div className="container_fix">
                    <div className="btn_list">
                        <Button onClick={()=>{nav(-1)}} text={'뒤로가기'} />
                        <Button text={'글쓰기'} color={'color'} onClick={onClickSubmitButton}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;