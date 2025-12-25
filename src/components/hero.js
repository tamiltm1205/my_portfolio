
import Heroimg from '../asset/Hero.png'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Hero(){

  return (
    <section className='flex flex-col md:flex-row py-32 px-5 tm-aadhi justify-center'>
        <div className='w-1/2 flex flex-col'>
      <h1 className=' text-white text-6xl font-hero-font'>
        Hi, <br/> I'm <span className='text-black '>TM</span> Tamil
        <p className='text-2xl'>(Full Stack Developer and Devops Engineer)</p>
      </h1>
      <div className='flex gap-2 py-10' >
        <a href='#' className ='hover:text-white'> <AiOutlineTwitter size={30}/></a>
        <a href='#' className='hover:text-white'><AiOutlineLinkedin  size={30}/></a>
        <a href='#' className='hover:text-white'><AiOutlineInstagram  size={30}/></a>
      </div>
      </div>
      <img className='md:w-1/3' src={Heroimg} />
      
    </section>
  )
}