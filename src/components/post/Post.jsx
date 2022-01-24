import './Post.css';

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://www.techrepublic.com/a/hub/i/r/2020/04/21/92fefa52-5abd-4cb6-88ad-f440a9952a8b/resize/1200x900/159117c93c0182e2d4d4f279b3fbbc40/ca-9.jpg" alt=""/>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>  
            <span className="postTitle">
                Lorem ipsum, dolor sit amet consectetur     
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>  
      </div>  
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laborum, voluptatibus beatae quasi, tempore facere explicabo minus, consectetur sequi iusto distinctio enim architecto ratione minima officia modi numquam! Laboriosam, minima?
            </p>
    </div>
  )
}
