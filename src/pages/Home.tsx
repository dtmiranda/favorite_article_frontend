import {  useState, useEffect } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

import { IStoreArticle } from '../interfaces/IStoreArticle';
import { Api } from '../providers/Api';
import ArticleCard from '../components/ArticleCard';
import FuctionBar from '../components/FunctionBar';




function Home() {

  const[ articles, setArticles ] = useState<IStoreArticle[]>([])

  
  useEffect(() => {
    Api.get("/articles")
      .then(response => {
        console.log(response.data)
        setArticles(response.data)

      })
  }, [])


  
  return (
    <>

     <Header/>

    <main >
     
      <FuctionBar/>


      <section >

        <ul className='flex flex-wrap justify-center items-center'>
          

          {(articles).map(article => {
                return(

                  <li key={article._id}>

                  <ArticleCard {...article}/>
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
