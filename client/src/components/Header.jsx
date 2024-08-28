import { Link } from "react-router-dom"


function Header(){
    return<nav className="flex flex-row justify-between  w-full h-auto px-12 py-4">
        <div> <span className="text-2xl bold">Logo</span></div>
           
            <div>
            <ul className="flex flex-row space-x-12 text-indigo-900 text-bold w-full">
                <Link to={'/'}>Home</Link>
                <Link to={'/books/add'}>Add Book</Link>
                
            </ul>
            </div>

    </nav>
}

export default Header;