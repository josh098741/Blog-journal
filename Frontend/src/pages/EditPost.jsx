import React,{useEffect, useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';


function EditPost(){

    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem("posts")) || []
        const post = posts.find((p) => p.id === Number(id))
        if(post){
            setTitle(post.title)
            setContent(post.content)
            setLoading(false)
        } else {
            setError("Post not found")
            setLoading(false)
        }
    },[id])

    const handleUpdate = (event) => {
        event.preventDefault()

        const posts = JSON.parse(localStorage.getItem("posts")) || []
        const updatedPosts = posts.map(
            (p) => p.id === Number(id) ? 
            {...p, title, content}
            : p
        )
        localStorage.setItem("posts",JSON.stringify(updatedPosts))
        navigate("/")
    }

    return(
        <div className="flex justify-center">
            <div className="border m-5 h-[500px] border-slate-900 rounded w-[500px] p-5">
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : error ? (
                    <div className="text-red-500 text-center">{error}</div>
                ) : (
                    <form onSubmit={handleUpdate} className="flex flex-col gap-5">
                        <label>Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            className="p-5 border border-slate-500 rounded h-10 text-black outline-none" 
                            onChange={(event) => setTitle(event.target.value)} 
                            placeholder="Write Your Title Here" 
                        />
                        <label>Content</label>
                        <textarea 
                            value={content} 
                            className="border h-32 border-slate-500 rounded p-5 outline-none" 
                            onChange={(event) => setContent(event.target.value)} 
                            placeholder="Write your content Here" 
                        />
                        <button 
                            type="submit" 
                            className="border h-10 rounded bg-gradient-to-b from-black text-white"
                        >
                            Update
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default EditPost