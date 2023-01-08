import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <>


      <Header/>


      
      <main>
      <Form/>


        <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="px-6 py-3 flex items-center border border-gray-200 border-b-0 justify-between  bg-white">
              
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="Search for article"/>
              </div>
          </div>
          <table className="w-full text-sm border border-gray-200 text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                      
                      <th scope="col" className="px-6 py-3 border border-b-gray-200">
                          Article
                      </th>
                      
                  </tr>
              </thead>
              <tbody>
                  
                  <tr className="bg-white border-b 0 hover:bg-gray-50 ">
                      
                      <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                          <a href="http://www.google.com">
                            <div className="pl-3">
                                <div className="text-base font-semibold hover:underline-">Neil Sims</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>

                          </a>
                            
                      </th>
                      
                  </tr>
                  
              </tbody>
          </table>

        </section>





      </main>
      


    </>
  );
}

export default App;
