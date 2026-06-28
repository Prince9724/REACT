import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
const Home = () => {
    const [posts, setposts] = useState([]);
    const [data, setdata] = useState({});
    const handlefetchuser = async () => {
        const res = await axios.get("http://localhost:3000/notes")
        setposts(res.data);
    };
    useEffect(() => {
        handlefetchuser();
    }, []);

    const postNotes = async () => {
        const res = await axios.post("http://localhost:3000/notes", data);
        alert("note post succefully !!");
        handlefetchuser();
    }
    return (
        <div className='container'>
            <div>
                <input type="text" onChange={(e) => setdata({ ...data, title: e.target.value })} placeholder='notes' />
                <input type="text" onChange={(e) => setdata({ ...data, description: e.target.value })} placeholder='description' />
                <button onClick={() => {
                    postNotes();
                    console.log("btn clicked")

                }} >Add</button>
            </div>
            Home
            <div className='d-flex flex-wrap gap-4'>
                {
                    posts.map((post) => {
                        return <div className='border border-2 p-3 w-25'>
                                 <div>
                                    <p key={post.id}>{post.title}</p>
                                 </div>
                                 <button className='btn btn-warning mx-2'>edit</button>
                                 <button className='btn btn-danger'>delete</button>

                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home