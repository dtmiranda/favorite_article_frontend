import bunner from '../assets/images/bunner.png'



export default function Header(){
  return(
    <>
      <figure className="relative w-full mb-10">
        <a href="#">
          <img className="" src={bunner} alt="image description"/>
        </a>
        <figcaption className="absolute px-4 text-2xl font-bold text-white bottom-6 md:absolute md:px-16 md:text-4xl">
            <p>Tec Articles</p>
        </figcaption>
      </figure>

    
    </>
  )
}