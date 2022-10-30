import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
       <nav className="navbar">
        <h1>The Blogs</h1>
        <div className="links">
            <Link to="/" style={{
                color:"white",
                backgroundColor:'#f1356d',
                borderRadius:'8px'
            }}>Home</Link>
            <Link to="/create" style={{
                color:"white",
                backgroundColor:'#f1356d',
                borderRadius:'8px'
            }}>Add Blog</Link>
        </div>
       </nav>
     );
}
 
export default Navbar;
