import React from 'react';
import LinK from 'next/link';

function Header() {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
       
        {/* left side */}
 <div 
         className='w-full h-[78px] bg-grey text-black p-2 text'>
         <h1 className='w-full h-[78px] bg-grey bold text-black font-bold mp-4  p-2 text'>COMFORTY</h1>
          <nav>
              <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
</div>
         



         
         
<ul/>
        <div className="bg-800 text-black py-4">
        <div className="container mx-auto justify-up justify-end text-center">
          <p>Add To Cart</p>
        </div>
          <ul/>
    
        </div> 

        

       




        <div className="bg-800 text-black py-4">
        <div className="container mx-auto justify-end text-center">
          <p>Contact: (808) 555-0111</p>
        </div>
          
          
          </div> 
          
       
          {/* ... other navigation links */}
       
      </div>
      
    </header>
  );
}


export default Header


