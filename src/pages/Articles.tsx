import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"
import Header from "../components/Header"
import { IArticles } from "../interfaces/IArticles"
import { IStoreBlog } from "../interfaces/IStoreBlog"
import { Api } from "../providers/Api"


export default function Articles(){
  const[ articles, setArticles ] = useState<IArticles[]>([])
  
  const { id } = useParams()


  useEffect(() => {
    Api.get(`/blog/${id}/articles`)
      .then(response => {
        
        setArticles(response.data)
        
        console.log(response.data)

      })
  }, [])

  //console.log(articles)


  return(
    <>

     <Header/>

    <main >
     
        <section >

        <ul className='flex flex-wrap justify-center items-center'>

          

            {(articles).map(article => {

                return(
                  

                  <li key={article.title}>

                    <ArticleCard {...article} />
                 
                 
                  </li>
                )
              }  
            )}
          


        </ul> 
      </section>
    
         

  </main>
    
    </>
  )
}