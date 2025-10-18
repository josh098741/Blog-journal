import React,{ useState,useEffect } from 'react'
import { Trash2Icon,EditIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || []
        setPosts(savedPosts)
    },[])

    const handleDeletePosts = (id) => {
        const updatedPosts = posts.filter((post) => post.id !== id)
        setPosts(updatedPosts)
        localStorage.setItem("posts",JSON.stringify(updatedPosts))
    }

    return(
        <div>
            <div className="text-center">
                <h1 className="text-3xl underline">All Posts</h1>
            </div>
            <div className="flex">
                {
                    posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <div className="m-5 p-1 border border-slate-500 w-52 h-30 flex flex-col justify-between rounded">
                                <div>
                                    <h1 className="text-center">{post.title}</h1>
                                    <p>{post.content}</p>
                                </div>
                                <div className="flex justify-end gap-3 m-1">
                                    <button>
                                        <Link to={`/edit/${post.id}`}>
                                            <EditIcon />
                                        </Link>
                                    </button>
                                    <button onClick={() => handleDeletePosts(post.id)}>
                                        <Trash2Icon />
                                    </button>
                                </div>
                            </div>
                        ))
                    )
                    : <div>No Posts Yet</div>
                }
                
            </div>
        </div>
    );
}

export default Home