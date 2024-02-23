import './Sidebar.css';
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import { useState } from 'react';
const Sidebar = ({handleChange}) =>{
  // const [hide,setHide] = useState(false);
  // const handleSidebar = () => { 
  //   console.log("test");
  //   setHide(current => !current);
  // }
  return (
    <>
    
      <section className='sidebar'>
        <div className='logo-container'>
            <h1 className="shop-bag" >🛒</h1>
        </div>

        {/* <div className='sidebar-handle' 
              style={{
                      visibility : hide ? 'hidden' : ''}
                    }
        > */}
          <Category handleChange={handleChange}/>
          <Price handleChange={handleChange}/>
          <Colors handleChange={handleChange}/>
        {/* </div> */}
      </section>
    </>
  )
}

export default Sidebar
