import { useState } from "react";
import { useHistory } from "react-router-dom";
// import BasicExample from "./BasicExaample";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [ispending,setisPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setisPending(true);
        // console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            // alert('Blog added!');
            alert('Blog added Successfully!')
            setisPending(false);
            // history.go(-1);
            history.push('/')
        })
       
    }

    return (
        <div className="create">
            <h2>Add new Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                

                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}/>

                
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding Blog....</button>}
                {/* <p>{body}</p> */}
            </form>
        </div>
    );
}

export default Create;