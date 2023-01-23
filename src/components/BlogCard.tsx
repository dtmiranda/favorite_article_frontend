
import { useCallback, useEffect, useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { IStoreBlog } from '../interfaces/IStoreBlog';
import { Api } from '../providers/Api';




export default function ArticleCard(props: { 
  _id:string;
  lable: string; 
  blogUrl: string; 
  articles: {
    cover: string;
    articleURL: string;
    title: string; 
    author: string; 
  }[]; 

}){


  const[ blogs, setBlogs ] = useState<IStoreBlog[]>([])

  

  
  const handleDeleteBlog = async() => {
    try {
      
      await Api.delete(`/blog/${props._id}`)
      
        setBlogs(blogs.filter(blog => blog._id !== props._id))
    

    alert("Blog Deleted successfuly")


    } catch (error) {

      console.log("Error", error)
      
    }
    
  }


  
  return(
    <>

      <div>
        <section  className=' mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow'>
          
          
          <div className='mb-4'>
            <a href={`/blog/${props._id}/articles`}>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">{props.lable}</h5>
            </a>
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.blogUrl}</p>
          </div>

          <div> 
            <button 
              onClick={() => `/edit_blog/${props._id}` }
              className="bg-slate-100 hover:bg-slate-200 border hover:border-red-300 p-2 rounded-full mr-4" type="button">
              <FiEdit2 size={16} color=" #5dade2 " />
            </button>
      

            <button onClick={handleDeleteBlog} className="bg-slate-100 hover:bg-slate-200 border hover:border-red-300 p-2 rounded-full mr-4" type="button">
              <FiTrash2 size={16} color=" #ec7063" />
            </button>


          </div>
        </section>
        
      </div>


    </>
  )
}