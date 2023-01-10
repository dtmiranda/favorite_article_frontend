import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const articleCover = require("../assets/images/articleCover.png")

export default function ArticleCard(props: { lable: string; url: string; author:string; summary:string}){
  return(
    <>

      <div className="mb-10 mx-3 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="">
              <img className="rounded-t-lg" src={articleCover} alt="" />
          </a>
          <div className="p-5">
              <a href={props.url}>
                  <h5>{props.lable}</h5>
              </a>
              <p className="mb-3 text-sm font-serif text-gray-700">{props.summary}</p>

              <p className="mt-6 text-xs uppercase font-sans font-medium text-gray-900">{props.author}</p>

              
              
          </div>
      </div>

    </>
  )
}