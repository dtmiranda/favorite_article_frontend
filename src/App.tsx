import React, {  useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';

import axios from 'axios';
import { IStoreArticle } from './interfaces/IStoreArticle';
import { Api } from './providers/Api';
import ArticleCard from './components/ArticleCard';




function App() {

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

export default App;
