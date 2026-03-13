import React from 'react'
import "../projects/Project.css"
const Project = () => {
    return (
        <div id='project' className="project-box container-fluid">
            <div className='container p-5'>
                <h3 className='prj m-4 text-center '>Project</h3>
                <div className="project-box d-flex gap-4 flex-wrap justify-content-center">
                    <div className='project col-lg-4 col-md-5 col-12'>
                        <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbntDzoP5E7_xMgJTn4NZD5kFUzLbGuQJedg&s" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Quiz app</h4>
                            <p>Interactive quiz app to test knowledge with multiple questions, instant feedback, score tracking, and fun learning. 🧠📊
                            </p>
                            <a href="https://github.com/Prince9724/java-script/tree/main/quize" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>
                     <div className='project col-lg-5 col-md-5 col-12'>
                        <img className='img-fluid' src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Weather app</h4>
                            <p>Real-time weather updates showing temperature, humidity, wind forecast with clean interface for quick daily planning.
                            </p>
                            <a href="https://github.com/Prince9724/java-script/tree/main/API%26WEATHER/wether%20API" className='btn btn-primary'>Go to </a>                                                 
                        </div>
                    </div>
                     <div className='project col-lg-5 col-md-5 col-12'>
                        <img className='img-fluid' src="https://images.squarespace-cdn.com/content/v1/5f95a2988b73fb2d14874ce3/1628545212710-X8BUBW4U2WTL36719HLM/Prod+Apps+Collage.png" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Task Manager</h4>
                            <p>Task manager app to organize daily tasks, set priorities, track progress, and improve productivity. ✅📋
                            </p>
                            <a href="https://github.com/Prince9724/java-script/tree/main/final-practical-exam" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>
                     <div className='project col-lg-4 col-md-5 col-12'>
                        <img className='img-fluid' src="https://www.webicules.com/wp-content/uploads/2016/09/e-commerce-marketing-strategy-Webicules-Technology.png" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Eccomerce website</h4>
                            <p>E-commerce app for browsing products, adding to cart, secure checkout, and smooth online shopping experience. 🛒💳
                            </p>
                            <a href="https://github.com/Prince9724/java-script/tree/main/day-37-api%20ecomerce" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>
                     <div className='project col-lg-4 col-md-5 col-12'>
                        <img className='img-fluid' src="https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Todo app</h4>
                            <p>To-do app to add, manage, and track daily tasks easily for better productivity. ✅📌
                            </p>
                            <a href="https://github.com/Prince9724/java-script/tree/main/day-23%20CRUD" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>

                     <div className='project col-lg-5 col-md-5 col-12'>
                        <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwgltK_Mm_79ESU4SNe39aniGcZ5xiuoNLQ&s" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Portfolio </h4>
                            <p>Full-stack web developer portfolio showcasing projects, skills, experience, and contact information with modern design. 💻🚀
                            </p>
                            <a href="https://prince9724.github.io/portfolio/" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>
                     <div className='project col-lg-5 col-md-5 col-12'>
                        <img className='img-fluid' src="https://thumbs.dreamstime.com/b/job-opportunity-24549521.jpg" alt="" />
                        <div className='p-3'>
                            <h4>Job opurtinity UI</h4>
                            <p> Job opportunities for full-stack web developer to build modern web applications using latest technologies. 💼💻🚀
                            </p>
                            <a href="" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>
                    <div className='project col-lg-5 col-md-5 col-12'>
                        <img className='img-fluid' src="https://user-images.githubusercontent.com/79099734/189593798-94357cb9-40ec-45e1-a9ae-78c364a0780f.png" alt="" />
                        <div className='p-3'>
                            <h4 className='text-warning'>Utils Text</h4>
                            <p>Text Utils app to edit, format, and analyze text quickly with useful tools. ✍️🔧📄
                            </p>
                            <a href="https://github.com/Prince9724/REACT/tree/main/03-utils-text" className='btn btn-primary'>Go to </a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Project