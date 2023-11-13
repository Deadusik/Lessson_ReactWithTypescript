import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
            <span className="font-bold">My Logo</span>

            <div>
                <span>
                    <Link to='/'>Posts</Link>
                </span>
                <span className="ml-5">
                    <Link to='/about'>About</Link>
                </span>
            </div>
        </nav>
    )
}