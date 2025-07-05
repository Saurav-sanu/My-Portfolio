import React, { use } from 'react'
import Card from '../components/Card'
import { useRef } from 'react'
import Globe from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import {FrameWorks} from '../components/FrameWork'

const About = () => {
  const grid2Container = useRef();
  return (
    <section className='c-space section-spaceing'>
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6
      md:auto-rows-[18rem] mt-12'>
        {/* grid1 */}

        <div className='flex items-end grid-default-color grid-1'>
            <img src="assets/coding-pov.png"
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
            <div className='z-10'>
                <p className='headtext'>Hi , I'm Saurav</p>
                <p className='subtext'> Over the 3 year i have developed my web dev skills</p>
            </div>
            <div className='absolute inset-x-0 pointer-events-none -bottom-4
            h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
        </div>


        {/* grid 2 */}
        <div className='grid-default-color grid-2'>
            <div ref={grid2Container} className='flex items-center justify-center
            w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                <Card style={{rotate:"75deg",top:"30%" ,left:"20%"} } text="DSA" containerRef={grid2Container}/>
                <Card style={{rotate:"-30deg",top:"60%" ,left:"45%"} } text="SOLID PRINCIPLE" containerRef={grid2Container}/>
                <Card style={{rotate:"90deg",top:"30%" ,left:"70%"} } text="DESIGN PATTERNS" containerRef={grid2Container}/>
                <Card style={{rotate:"-45deg",top:"55%" ,left:"0%"} } text="LLD" containerRef={grid2Container}/>
                <Card style={{rotate:"20deg",top:"10%" ,left:"38%"} } text="WEB DEV" containerRef={grid2Container}/>
                <Card style={{rotate:"30deg",top:"70%" ,left:"70%"} } image="/assets/logos/csharp-pink.png" containerRef={grid2Container}/>
                <Card style={{rotate:"-45deg",top:"70%" ,left:"25%"} } image="/assets/logos/dotnet-pink.png"containerRef={grid2Container}/>
                <Card style={{rotate:"50deg",top:"5%" ,left:"10%"} } image="/assets/logos/cplusplus.svg" containerRef={grid2Container}/>
                <Card style={{rotate:"10deg",top:"40%" ,left:"50%"} } image="/assets/logos/db.png" containerRef={grid2Container}/>
                <Card style={{rotate:"10deg",top:"5%" ,left:"90%"} } image="/assets/logos/css3.svg" containerRef={grid2Container}/>

            </div>
        </div>


        {/* grid 3 */}


        <div className='grid-black-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>
              Time Zone
            </p>
            <p className='subtext'>
              I'm based in Mars , and open to remote work worldWide 
            </p>

          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe/>
          </figure>
        </div>


        {/* grid 4 */}


        <div className='grid-special-color grid-4'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className='text-center headtext'>Do You Want To Start A Project Together ?</p>
              <CopyEmailButton/>
          </div>
    
        </div>

        
        {/* grid 5 */}


        <div className='grid-default-color grid-5'>
          <div className='z-10 w-[50%]'>
            <p className="headtext">Tech Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools that  
                allow me to build robust and scalable applications.
              </p>

          </div>
          <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%]
          md:scale-125'>

            <FrameWorks/>

          </div>
        </div>


      </div>
    </section>
  )
}

export default About
