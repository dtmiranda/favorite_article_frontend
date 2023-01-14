
import { FiEdit2, FiTrash2 } from 'react-icons/fi';


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
  
  
  
  const handleDeleteArticle = async() => {

    try {
      
    } catch (error) {
      
    }
  }

  
  
  
  return(
    <>

      <main>
        <section className='p-4 flex justify-between items-start flex-col border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer'>
          <div className='mb-4'>
            <h1 className='mb-2 text-lg font-semibold text-gray-700'>{props.lable}</h1>
            <p className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>{props.blogUrl}</p>
          </div>

          <div> 
            <button onClick={() => ""} className="bg-slate-100 hover:bg-slate-200 border hover:border-sky-300 p-2 rounded-full mr-4"  type="button">
              <FiEdit2 size={16} color=" #5dade2 " />
            </button>

            <button onClick={() => handleDeleteArticle} className="bg-slate-100 hover:bg-slate-200 border hover:border-red-300 p-2 rounded-full mr-4" type="button">
              <FiTrash2 size={16} color=" #ec7063" />
            </button>


          </div>
        </section>
        
      </main>


    </>
  )
}