import { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import { IStoreBlog } from "../interfaces/IStoreBlog";
import { Api } from "../providers/Api";


export default function AddNewArticle(){

    const [blogs, setBlogs] = useState<IStoreBlog>({
        _id:"",
        lable:"",
        blogUrl:"",
        articles:[
            {
                cover: "",
                articleURL:"",
                title:"",
                author:"",

            }
        ],
        
    })


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {


        
        Api.post("/articles", {
            ...blogs
            
        })
            .then( response => {
                console.log(response.data)
            
            })
        
            
        event.preventDefault();


       

    }, [blogs])


  
  
  return(

    <>
        <Header/>


        <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            
            <h2 className="mb-8 text-xl font-bold text-gray-900">Add a new blog</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                        
                        <label htmlFor="lable" className="block mb-2 text-sm font-medium text-gray-900 ">LABLE</label>
                        
                        <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            type="text" 
                            name="lable" 
                            id="lable"
                            placeholder="Blog lable"
                            required
                            
                            value={blogs.lable}

                            onChange={(event) => setBlogs({
                                ...blogs,
                                lable: event.currentTarget?.value || ""
                            })}
                        />

                    </div>

                    <div className="sm:col-span-2">
                        
                        <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 ">URL</label>
                        
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            type="text" 
                            name="url" 
                            id="url"
                            required 
                            placeholder="Blog url"

                            value={blogs.blogUrl}
                            onChange={(event) => setBlogs({
                                ...blogs,
                                blogUrl: event.currentTarget?.value || ""
                            })}
                        
                        />
                    
                    </div>

                    {/* <div className="w-full">
                        
                        <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 ">AUTHOR</label>
                        
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                            type="text" 
                            name="author" 
                            id="author"
                            required 
                            placeholder="Author"

                            value={article.author}
                            onChange={(event) => setArticles({
                                ...article,
                                author: event.currentTarget?.value || ""
                            })}
                        />

                    </div>
                    
                   
                     
                    <div className="sm:col-span-2">
                        
                        <label htmlFor="summary" className="block mb-2 text-sm font-medium text-gray-900 ">SUMMARY</label>
                        
                        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" 
                            id="summary"
                            required 
                            placeholder="Article summary"

                            value={article.summary}
                            onChange={(event) => setArticles({
                                ...article,
                                summary: event.currentTarget?.value || ""
                            })}
                        
                        ></textarea>

                    </div> */}
                
                </div>
                
               
                <div>
                    


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-8 focus:outline-none">
                        Save
                    </button>

            
                    <a href="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Cancel</a>

                </div>
            
                

            </form>
        </div>
    </section>
    
    </>
     
  )
}