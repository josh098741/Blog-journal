import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className="bg-gradient-to-b from-slate-900 flex justify-between p-10 items-center h-28">
            <div>
                <h1 className="text-xl text-white">Blog Journal</h1>
            </div>
            <div className="flex gap-5 justify-end">
                <div className="border w-32 text-center hover:scale-105 transition-all rounded">
                    <Link to="/">Home</Link>
                </div>
                <div className="border w-32 text-center hover:scale-105 transition-all rounded">
                    <Link to="/create">Create Post</Link>
                </div>
            </div>
        </div>
    );
}

export default Header