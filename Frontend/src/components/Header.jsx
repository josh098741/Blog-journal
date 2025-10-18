import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className="bg-gradient-to-b from-slate-900 flex flex-col justify-center items-center h-32">
            <div>
                <h1 className="text-xl text-white">Blog Journal</h1>
            </div>
            <div className="flex gap-5 relative">
                <div className="border w-32 text-center">
                    <Link to="/">Home</Link>
                </div>
                <div className="border w-32 text-center">
                    <Link to="/create">Create Post</Link>
                </div>
            </div>
        </div>
    );
}

export default Header