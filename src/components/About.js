import Coder from "../asset/coder.jpeg";

export default function About (){
    return <section className='flex flex-col md:flex-row tm-tamil py-20 px-5' id='about'>
      <div className='flex  flex-col -1/2'>
        <img src={Coder} />

      </div>
<div className='md:w-1/2 flex justify-center'>
         <div className=' justify-top text-white'>

          <h1 className='text-4xl  font-bold border-b-2 border-[red] mb-5 w-[180px]'>About Me</h1>
           <p className='pb-5'> Hi, I’m Tamil, a passionate App Developer and DevOps Engineer who bridges the gap between development and operations. I create efficient, scalable applications and design automated DevOps pipelines to deliver fast and reliable software. </p>

          
           <p className='pb-5'> With a strong interest in continuous learning, I focus on modern development practices, cloud technologies, and automation to build high-quality digital solutions</p>
           <p className='pb-5'>  <span className='text-black'>App Development Flutter / React / Mobile Apps.</span> <span className='text-fuchsia-950'> DevOps & CI/CD, Git & GitHub, Cloud & Automation, Docker & Kubernetes, Linux & Server Management. </span></p>
        </div>
</div>

    </section>
}