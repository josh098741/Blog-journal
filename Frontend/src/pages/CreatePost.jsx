import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function CreatePost(){

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPost = {
            id: new Date(),
            title,
            content
        }

        const existingPosts = JSON.parse(localStorage.getItem("posts")) || []
        const updated = [...existingPosts, newPost]
        localStorage.setItem("posts",JSON.stringify(updated));
        navigate("/")
    }

    return(
        <div className="flex justify-center">
            <div className="border m-5 h-[500px] border-slate-900 rounded w-[500px] p-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <label>Title</label>
                    <input type="text" value={title} className="p-5 border border-slate-500 rounded h-10 text-black outline-none" onChange={(event) => setTitle(event.target.value)} placeholder="Write Your Title Here" />
                    <label>Content</label>
                    <textarea value={content} className="border h-32 border-slate-500 rounded p-5 outline-none" onChange={(event) => setContent(event.target.value)} placeholder="Write your content Here" />
                    <button type="submit" className="border h-10 rounded bg-gradient-to-b from-black text-white">Publish</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost