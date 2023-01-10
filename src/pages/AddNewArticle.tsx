import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function AddNewArticle(){
  
  
  return(

    <>
        <Header/>


        <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-8 text-xl font-bold text-gray-900">Add a new article</h2>
            <form action="#">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="lable" className="block mb-2 text-sm font-medium text-gray-900 ">LABLE</label>
                        <input type="text" name="lable" id="lable" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Article lable"/>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 ">URL</label>
                        <input type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Article url"/>
                    </div>

                    <div className="w-full">
                        <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 ">AUTHOR</label>
                        <input type="text" name="author" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Author"/>
                    </div>
                    
                   
                     
                    <div className="sm:col-span-2">
                        <label htmlFor="summary" className="block mb-2 text-sm font-medium text-gray-900 ">SUMMARY</label>
                        <textarea id="summary" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Article summary"></textarea>
                    </div>
                </div>

            
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-8 focus:outline-none">
                    Save
                </button>
            </form>
        </div>
    </section>
    
    </>
     
  )
}