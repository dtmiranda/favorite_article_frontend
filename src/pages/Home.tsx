import {  useState, useEffect } from 'react';
import Header from '../components/Header';

import { IStoreBlog } from '../interfaces/IStoreBlog';
import { Api } from '../providers/Api';
import ArticleCard from '../components/ArticleCard';
import FuctionBar from '../components/FunctionBar';




function Home() {

  const[ blogs, setBlogs ] = useState<IStoreBlog[]>([])

  
  useEffect(() => {
    Api.get("/articles")
      .then(response => {
        console.log(response.data)
        setBlogs(response.data)

      })
  }, [])


  
  return (
    <>

     <Header/>

    <main >
     
      <FuctionBar/>


      <section >

        <ul className='flex flex-wrap justify-center items-center'>
          

          {(blogs).map(blog => {
                return(

                  <li key={blog.blogUrl}>

                    <ArticleCard  {...blog} />
                 
                 
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
