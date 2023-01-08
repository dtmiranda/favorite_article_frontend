export default function Form(){
  return(
    <>
      <h2 className="mb-4 text-lg font-bold leading-none tracking-tight text-gray-700 md:text-xl">Add your favorite Article</h2>

      <form className='mb-20'>
        <div className="mb-6">
          <label htmlFor="lable" className="block mb-2 text-sm font-medium text-gray-700">Lable</label>
          <input type="text" id="lable" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5" placeholder="article lable" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-700">Link</label>
          <input type="text" id="link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5" placeholder="article link" required/>
        </div>
        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add</button>
      </form>

    </>
  )
}