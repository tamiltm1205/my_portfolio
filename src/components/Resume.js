import coder from '../asset/coder.jpeg' 

export default function Resume(){
    return <section className='flex flex-col md:flex-row tm-tamil py-20 px-5' id='resume'>
      <div className='py-5 md:w-1/2 justify-center md:justify-end'>
         <img className="w-[500px]" src={coder}/>
      </div>
     
<div className='md:w-1/2 flex justify-center'>
        <div className=' flex flex-col justify-center  text-white'>

          <h1 className='text-4xl  font-bold border-b-2 border-[red] mb-5 w-[140px]'>Resume</h1>
           <p className="pb-5"> You can view my resume here. <a href='button'>Download</a></p>
        </div>
</div>
</section>
}