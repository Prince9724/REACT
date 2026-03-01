import {useState} from 'react'

const TextUtils = () => {
    const [text, settext] = useState("");
    const [count, setcount] = useState(0);
    const [wordcount, setwordcount] = useState(0);

  return (
    <>
      <div className='container'>
        <div className="form-floating">
          <textarea onChange={(e)=>settext(e.target.value) } className="form-control" style={{height: 200}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div>
          <button onClick={()=>settext(text.toUpperCase())} className='btn btn-primary mt-3'>Upper Case</button>
          <button onClick={()=>settext(text.toLowerCase())} className='btn btn-warning ms-3 mt-3'>Lower case</button>
          <button onClick={()=>setcount(text.length)} className='btn btn-info ms-3 mt-3'>Count letters</button>
          <button onClick={()=>setwordcount(text.split(" ").length)} className='btn btn-success   ms-3 mt-3'>Count letters</button>

        </div>
        <hr />
        <div className='mt-3'>
        <p>
          {text}
          
        </p>
        <p>count: {count}</p>
        <p>word count: {wordcount}</p>
        </div>
      </div>
    </>

  )
}

export default TextUtils;