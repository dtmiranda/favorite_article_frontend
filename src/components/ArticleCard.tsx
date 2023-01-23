
import { FiEdit2, FiTrash2 } from 'react-icons/fi';





export default function ArticleCard(props: { 
  
    cover: string;
    articleURL: string;
    title: string; 
    author: string; 
  

}){



  
  
  
  
  const handleDeleteArticle = async() => {

    try {
      
    } catch (error) {
      
    }
  }

  const fixCoverLink = async(cover: string) =>{
    if(cover.charAt(0) ==='/'){
      return 'https://devgo.com.br' + cover
    }
    return 'https://devgo.com.br/' + cover

  }

  
  
  
  
  return(
    <>

      <div className="mb-10 mx-3 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
          
          <div className="absolute py-4 px-4 flex ">
            <button onClick={() => ""} className="bg-slate-100 hover:bg-slate-200 border hover:border-sky-300 p-2 rounded-full mr-4 shadow-md shadow-blue-300"  type="button">
              <FiEdit2 size={16} color=" #5dade2 " />
            </button>

            <button onClick={() => handleDeleteArticle} className="bg-slate-100 hover:bg-slate-200 border hover:border-red-300 p-2 rounded-full mr-4 shadow-md shadow-red-300" type="button">
              <FiTrash2 size={16} color=" #ec7063" />
            </button>

          </div>
          
          
          
          <a href="">
              <img className="rounded-t-lg" 
                src={props.cover.charAt(0) ==='/' 
                      ?  'https://devgo.com.br' + props.cover 
                      : 'https://devgo.com.br/' + props.cover
                    } 

                alt="" 
              />
          </a>
          <div className="p-5">
              <a className='cursor-pointer' href={props.articleURL}>
                  <h5>{props.title}</h5>
              </a>

              <p className="mt-6 text-xs uppercase font-sans font-medium text-gray-900">{props.author}</p>

              
              
          </div>
      </div>

    </>
  )
}