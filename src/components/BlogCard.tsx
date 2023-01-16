
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



  const handleUpdateBlog = async() => {
    try {
      
      await Api.put(`/blog/${props._id}`)
      .then(response => {
        setBlogs(response.data)
      })

    alert("Blog data updated successfuly")


    } catch (error) {

      console.log("Error", error)
      
    }
    
  }

  
  
  
  return(
    <>

      <main>
        <section  className='p-4 flex justify-between items-start flex-col border border-gray-200 rounded-lg shadow-md'>
          <div className='mb-4'>
            <a href={`/articles/${props._id}`}>
              <h1 className='mb-2 text-lg font-semibold text-gray-700 hover:underline'>{props.lable}</h1>
            </a>
            
            <p className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>{props.blogUrl}</p>
          </div>

          <div> 
            <button onClick={handleUpdateBlog} className="bg-slate-100 hover:bg-slate-200 border hover:border-sky-300 p-2 rounded-full mr-4"  type="button">
              <FiEdit2 size={16} color=" #5dade2 " />
            </button>

            <button onClick={handleDeleteBlog} className="bg-slate-100 hover:bg-slate-200 border hover:border-red-300 p-2 rounded-full mr-4" type="button">
              <FiTrash2 size={16} color=" #ec7063" />
            </button>


          </div>
        </section>
        
      </main>


    </>
  )
}