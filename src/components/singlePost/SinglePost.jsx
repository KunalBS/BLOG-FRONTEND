import './SinglePost.css'

export default function Singlepost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
          <h1 className="singlePostTitle">
              Lorem ipsum, dolor sit amet commodi earum eveniet
              <div className="singlePostEdit">
                  <i class="singlePostIcon far fa-edit"></i>
                  <i class="singlePostIcon far fa-trash-alt"></i>
              </div>
          </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : <b>Kunal Biswas</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos est molestias esse culpa. In accusantium nulla suscipit repellat deleniti necessitatibus alias rerum, autem ab perspiciatis, consectetur aliquam consequuntur aspernatur esse.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos est molestias esse culpa. In accusantium nulla suscipit repellat deleniti necessitatibus alias rerum, autem ab perspiciatis, consectetur aliquam consequuntur aspernatur esse.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos est molestias esse culpa. In accusantium nulla suscipit repellat deleniti necessitatibus alias rerum, autem ab perspiciatis, consectetur aliquam consequuntur aspernatur esse.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos est molestias esse culpa. In accusantium nulla suscipit repellat deleniti necessitatibus alias rerum, autem ab perspiciatis, consectetur aliquam consequuntur aspernatur esse.
            </p>
      </div>
    </div>
  )
}
