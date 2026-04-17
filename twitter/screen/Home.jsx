import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../components/Sing.css"
import { twit_api, user_api } from '../utils/Api'

const Home = () => {
  const [post, setpost] = useState({})
  const [get, setget] = useState([]);
  const [user, setuser] = useState();

  const handleget = async () => {
    const res = await axios.get("http://localhost:3000/twits",)
    setget(res.data.reverse())
  }
  const handlepost = async () => {
    const res = await axios.post("http://localhost:3000/twits", { ...post, user: user.email });
    setpost(res)
    console.log("added twits")
    handleget();
  }
  const userEmail = () => {
    const getuser = JSON.parse(localStorage.getItem("current-user"))
    console.log(getuser)
    setuser(getuser);
  }
  useEffect(() => {
    handleget();
    userEmail();
  }, [])
  const date = new Date;
  return (
    <div style={{ height: "100vh", width: "100%" }} className='container-fluid layout '>

      <div className="row h-100 gx-0">
        <div className='col-2 d-flex flex-column sidebar'>
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" fill="rgba(1,158,244,1)"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
          </span>
          <div className='mt-4 p-3'>
            <p className='home fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(29,158,245,1)"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 11.1193 13.3807 9.99998 12 9.99998C10.6193 9.99998 9.5 11.1193 9.5 12.5C9.5 13.8807 10.6193 15 12 15Z"></path></svg>
              Home</p>
            <p className='fs-6 fw-bold'>#Explore</p>
            <p className='fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path></svg>
              Notification</p>
            <p className='fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
              Messages</p>
            <p className='fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
              Bookmarks</p>
            <p className='fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg>
              Lists</p>
            <p className='fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
              Profile</p>
            <p className='fs-6 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
              More</p>
          </div>
          <button className='submit px-2'>Tweet</button>
        </div>

        <div className='col-6 feed overflow-x-hidden border border-2'>
          <div className='d-flex justify-content-between'>
            <div>
              <h3 className='fs-5 fw-bold'>Home</h3>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(30,160,242,1)"><path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path></svg>
            </div>
          </div>
          <hr />
          <div style={{ width: "100%" }} className='d-flex  w-100'>
            <div>
              <img style={{ height: "50px", width: "50px" }} className='rounded rounded-circle' src="https://images.unsplash.com/photo-1611605698335-8b1569810432?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className='flex-grow-1 ms-2'>
              <div style={{ width: "100%" }} className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                    value={post.tweet || ""}
                 onChange={(e) => setpost({ ...post, tweet: e.target.value })}
                ></textarea>
                <label htmlFor="floatingTextarea">What's happening?</label>
              </div>
              <div className='d-flex justify-content-between mt-3'>
                <div className='d-flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(30,160,242,1)"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5ZM18 17L14 11L7 17H18Z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(30,160,242,1)"><path d="M16 2L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16ZM15 4H5V20H19V8H15V4ZM13 10V15H12V10H13ZM11 10V11H9C8.44772 11 8 11.4477 8 12V13C8 13.5523 8.44772 14 9 14H10V13H9V12H11V14C11 14.5523 10.5523 15 10 15H9C7.89543 15 7 14.1046 7 13V12C7 10.8954 7.89543 10 9 10H11ZM17 10V11H15V12H17V13H15V15H14V10H17Z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(30,160,242,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 13H9C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13H17C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path></svg>
                </div>
                <button className='tweetbtn ' onClick={handlepost}>
                  Tweet
                </button>
              </div>
            </div>

          </div>
          <hr />
          <hr />
          <div>
            {
              get.map((u) => <div className="d-flex border-bottom py-3 px-2">

                <div className="me-3">
                  <img
                    src="https://images.unsplash.com/photo-1611605698335-8b1569810432" alt="" className="rounded-circle"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center">
                    <h6 className="mb-0 fw-bold">{u.name}</h6>
                    <span className='ms-3'>
                      {u.user}
                    </span>
                    <span className="text-muted ms-2" style={{ fontSize: "14px" }}>
                      {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </span>
                    <span className='mx-3'>{date.getHours()}:{date.getMinutes()}min</span>

                  </div>

                  <div className="mt-1 w-25 border-1 border">
                    <p className="mb-2 w-100 p-2" style={{ wordWrap: "break-word" }}>{u.tweet}</p>
                  </div>


                  <div className="d-flex justify-content-between text-muted mt-2" style={{ maxWidth: "300px" }}>
                    <span style={{ cursor: "pointer" }}>💬</span>
                    <span style={{ cursor: "pointer" }}>🔁</span>
                    <span style={{ cursor: "pointer" }}>❤️</span>
                    <span style={{ cursor: "pointer" }}>📤</span>
                  </div>

                </div>
              </div>)
            }
          </div>

        </div>
        {/* <div className='col-4'>
          <input type="text" />
          <div>
            <h3>Trend For you</h3>
            <hr />
            <p>Trending worldwide</p>
            <h6>#BreakingNews</h6>
            <div className='border border-1 rounded-3 d-flex '>
              <div className='p-2'>
                <p>space k</p>
                <p>Lunar Photography improve the discovery of the moon </p>
              </div>
              <img style={{ height: "100% ", width: "17%" }} src="https://images.pexels.com/photos/20036317/pexels-photo-20036317/free-photo-of-full-moon-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <p>10,094people are tweeting about this </p>
            <hr />

          </div>
        </div> */}
        <div className="col-4 mt-2 rightbar">

          {/* Search */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-pill bg-light"
              placeholder="🔍 Search Twitter"
            />
          </div>

          {/* Trends Card */}
          <div className="bg-light p-3 rounded-4">

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">Trends for you</h5>
              <span>⚙️</span>
            </div>

            <hr />

            {/* Trend 1 */}
            <p className="text-muted small mb-1">Trending worldwide</p>
            <h6 className="fw-bold mb-1">#BreakingNews</h6>

            <div className="d-flex border rounded-3 p-2 align-items-center mb-2">
              <div className="me-2">
                <p className="mb-1 fw-semibold">Space</p>
                <p className="small text-muted mb-0">
                  Lunar photography improves the discovery of the moon
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/20036317/pexels-photo-20036317/free-photo-of-full-moon-on-black-background.jpeg"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                className="rounded-3"
              />
            </div>

            <p className="text-muted small">10,094 people are Tweeting about this</p>

            <hr />

            {/* Trend 2 */}
            <p className="text-muted small mb-1">Trending worldwide</p>
            <h6 className="fw-bold mb-1">#WorldNews</h6>
            <p className="text-muted small mb-1">125K Tweets</p>
            <p className="text-muted small">5,094 people are Tweeting about this</p>

            <hr />

            {/* Trend 3 */}
            <p className="text-muted small mb-1">Trending worldwide</p>
            <h6 className="fw-bold mb-1">#BreakingNews</h6>

            <div className="d-flex border rounded-3 p-2 align-items-center mb-2">
              <div className="me-2">
                <p className="mb-1 fw-semibold">Animals</p>
                <p className="small text-muted mb-0">
                  These cats are ready for #InternationalCatDay
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                className="rounded-3"
              />
            </div>

            <p className="text-muted small">2,757 people are Tweeting about this</p>

            <hr />

            {/* Trend 4 */}
            <p className="text-muted small mb-1">Trending worldwide</p>
            <h6 className="fw-bold mb-1">#GreatestOfAllTime</h6>
            <p className="text-muted small mb-1">100K Tweets</p>
            <p className="text-muted small">4,123 people are Tweeting about this</p>

            <hr />

            {/* Show More */}
            <p className="text-primary mb-0" style={{ cursor: "pointer" }}>
              Show more
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home