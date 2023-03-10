import {  useState, useEffect } from 'react';
import Header from '../components/Header';

import { IStoreBlog } from '../interfaces/IStoreBlog';
import { Api } from '../providers/Api';
import FuctionBar from '../components/FunctionBar';
import BlogCard from '../components/BlogCard';




function Home() {

  const[ blogs, setBlogs ] = useState<IStoreBlog[]>([])

  
  useEffect(() => {
    Api.get("/blogs")
      .then(response => {

        setBlogs(response.data)
        
        

      })
  }, [...blogs])


  


  
  return (
    <>

      <Header/>

      <main >
      
        <FuctionBar/>


        <section >

          <ul className='flex flex-wrap justify-center items-center'>
            

            {(blogs).map(blog => {
                  return(

                    <li key={blog._id}>

                      <BlogCard  {...blog} />
                  
                  
                    </li>
                  )
                }  
              )}
            


          </ul> 
        </section>
      
          

      </main>
    
    </>

    

  );
}

export default Home;
