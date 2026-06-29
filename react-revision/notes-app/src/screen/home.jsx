import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
const Home = () => {
    const [posts, setposts] = useState([]);
    const [data, setdata] = useState({ title: '', description: '' });
    const [search, setsearch] = useState("");
    const updatefield = (x) => setdata(x);// doubt => yha pr sir x kyu rkha hai ?? 
    const handlefetchuser = async () => {
        const res = await axios.get("http://localhost:3000/notes")
        setposts(res.data);
        setdata("")
    };
    useEffect(() => {
        handlefetchuser();
    }, []);

    const postNotes = async () => {
        const color = getRandomHexColor();
        const notesWithColor = { ...data, color: color }
        const res = await axios.post("http://localhost:3000/notes", notesWithColor);
        alert("note post succefully !!");
        handlefetchuser();
    }
    const deletNotes = async (id) => {
        const res = await axios.delete("http://localhost:3000/notes/" + id);
        handlefetchuser();
    }
    const handleUPdateNotes = async () => {
        const res = await axios.put("http://localhost:3000/notes/" + data.id, data);
        alert("Note updated successfully!");  
        handlefetchuser();
        setdata({ title: '', description: '' });  
    }
    const getRandomHexColor = () => {

        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <div className='container'>
            <div className='fixed-top'>
                <input type="text"
                    onChange={(e) => setsearch(e.target.value)}
                    value={search}
                    className='input-search' placeholder='search notes here' />
                {/* <button className='search-btn'>Search</button>    */}
            </div>

            <div className='card-collection d-flex flex-wrap gap-4 w-100 justify-content-center '>
                {posts
                    .filter((post) => {
                        if (search === "") {
                            return post;
                        }
                        else {
                            return (
                                post.title?.toLowerCase().includes(search.toLowerCase())
                            )
                        }
                    })
                    .map((post, i) => {
                        return <div key={i} className='card border border-2 p-3' style={{ backgroundColor: post.color || '#ffffff', width: '18rem' }}>
                            <div>
                                <p >{post.title}</p>
                                <small>{post.description}</small>
                            </div>
                            <div>
                                <button className='edit-btn rounded rounded-3 border border-1 mx-2' onClick={() => {
                                    updatefield(post);

                                }}><i className="ri-pencil-fill"></i></button>

                                <button className='delete-btn rounded rounded-3 border border-1 ' onClick={() => {
                                    deletNotes(post.id);
                                }}><i className="ri-delete-bin-7-fill"></i></button>
                            </div>

                        </div>
                    })
                }
            </div>
            <div className='fixed-bottom d-flex justify-content-center  gap-3'>
                <input type="text" className='input-title border  border-none rounded-2' value={data.title || ''} onChange={(e) => setdata({ ...data, title: e.target.value })} placeholder='notes' />
                <input type="text" className='input-desc border w-50 border-none rounded-2' value={data.description || ''} onChange={(e) => setdata({ ...data, description: e.target.value })} placeholder='description' />
                <button className='add-btn' onClick={() => {
                    data.id ? handleUPdateNotes() : postNotes();
                }}>{data.id ? "Update" : "Add"}</button>
            </div>
        </div>
    )
}

export default Home