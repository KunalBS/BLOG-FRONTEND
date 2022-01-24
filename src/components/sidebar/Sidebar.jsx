import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi quaerat repellat debitis nisi mollitia dolore, beatae dicta ad sed dolores?</p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Cinema</li>
              <li className="sidebarListItem">Tech</li>
          </ul>
      </div>  
           <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i class="sidebarIcon fab fa-facebook-square"></i>
                    <i class="sidebarIcon fab fa-twitter-square"></i>
                    <i class="sidebarIcon fab fa-pinterest-square"></i>
                    <i class="sidebarIcon fab fa-google-plus-square"></i>     
                </div>    
            </div> 
    </div>
  )
}
