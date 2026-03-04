import { useEffect, useState } from 'react'

const TextUtils = () => {
  useEffect(() => {
    // console.log("true")
    settext(localStorage.getItem("text")?? "")
    setcount(localStorage.getItem("count")?? 0)
    setwordcount(localStorage.getItem("wordcount")?? 0)
    setreadcount(localStorage.getItem("read")?? 0)
  },[])

    //sa
  const [text, settext] = useState("");
  const [count, setcount] = useState(0);
  const [wordcount, setwordcount] = useState(0);
  const [readcount, setreadcount] = useState(0);
  return (
    <>
      <div className='container'>
        <div className="form-floating">
          <textarea value={text} onChange={(e) => settext(e.target.value)} className="form-control" style={{ height: 200 }} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Enter you text here..</label>
        </div>
        <div>
          <button onClick={() => {
            settext(text.toUpperCase())
            localStorage.setItem("text", text.toUpperCase())
          }} className='btn btn-primary mt-3'>Upper Case</button>
          <button onClick={() => {
            settext(text.toLowerCase())
            localStorage.setItem("text", text.toLowerCase());
          }} className='btn btn-warning ms-3 mt-3'>Lower case</button>
          <button onClick={() => {
            setcount(text.length)
            localStorage.setItem("count", text.length.toString());
          }} className='btn btn-info ms-3 mt-3'>Count letters</button>
          <button onClick={() => {
            const count =(text.split(" ").length.toString())
            setwordcount(count);
            localStorage.setItem("wordcount", count)
          }} className='btn btn-success   ms-3 mt-3'>Count letters</button>
          <button onClick={() => {
            setreadcount(((text.split(" ").length * 60) / 180).toFixed(2))
            localStorage.setItem("read", readcount)
          }} className='btn btn-secondary   ms-3 mt-3'>Reading-time</button>
          <button onClick={() => {
            settext(" ");
            setcount(0)
            setwordcount(0)
            setreadcount(0)
            localStorage.clear()
          }

          } className='btn btn-danger ms-3 mt-3'>Clear</button>

        </div>
        <hr />
        <div className='mt-3'>
          <p>
            {text}

          </p>
          <p>count: {count}</p>
          <p>word count: {wordcount}</p>
          <p> Reading timing: {readcount}s</p>
        </div>
      </div>
    </>

  )
}

export default TextUtils;
