import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

import "./Nav.css"
function Nav({handleInputChange , query}) {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text" 
          placeholder="Enter your search shoes"
          className="search-input"
          onChange={handleInputChange}
          value={query}
        />
      </div>

      <div className="profile-container">
        <a href="#" >
          <FiHeart className="nav-icons"/>
        </a>

        <a href="#">
          <FaShoppingCart className="nav-icons"/>
        </a>

        <a href="#">
          <AiOutlineUser className="nav-icons"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
