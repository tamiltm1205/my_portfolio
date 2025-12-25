import project from "../asset/porject-1.webp";
import project2 from "../asset/porject-2.jpeg";
import project3 from "../asset/porject3.jpeg";


export default function Project(){
     return<section className="flex flex-col items-left py-20 px-5 justify-center tm-aadhi text-white " id='Project'>
     <div className=" w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-2 border-red-500 font-bold mb-5 w-[130px] text-center"> Project</h1>
          <p>These are some of my recent projects that I have worked on.</p>
         </div>
     </div>
       
     <div className=" w-full ">
       <div className='flex flex-col md:flex-row px-5 gap-5'>
        <div className="relative"> 
            <img  className='h-[200px] w-[500px]'src={project} />
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-blue-600 opacity-0 transition-opacity hover:opacity-100 duration-500'>
            <p className="text-center px-5 py-5"> Cafe APP. built with Flutter.</p>
        </div>
          </div>
         <div className="relative">
            <img className='h-[200px] w-[500px]'src={project2} />
         <div className="absolute left-0 right-0 bottom-0 top-0 bg-blue-600 opacity-0 transition-opacity hover:opacity-100 duration-500">
            <p className="text-center px-5 py-5">ecommerce app built with flutter and firebase.</p>
         </div>
         </div>
          <div className="relative">
            <img className='h-[200px] w-[500px]' src={project3} />
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-blue-600 opacity-0 transition-opacity hover:opacity-100 duration-500">
            <p className="text-center px-5 py-5">ecommerce website built with react js, tailwind css and firebase.</p>
            </div>
          </div>
          
          </div>
     </div>


     </section>
}