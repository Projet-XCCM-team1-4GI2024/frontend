import React, { useState } from 'react'
import Search from './Search';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const managerLay = () => {

    const [createProject, setCreateProject] = useState(false)
  return (
    
    <div className='w-full h-full m-auto mt-0 overflow-hidden'>
      <div className='w-full h-full flex justify-start items-start pt-4 pl-1 overflow-hidden relative'>
        <section className='h-full w-full flex flex-col justify-between pl-4 overflow-hidden relative'>
            <Search />
            <div className='w-full h-full p-2 overflow-hidden'>
                <div className='h-full w-full border rounded-lg bg-blue-gray-50 p-4 overflow-hidden  relative'>
                   <button 
                      className='w-64 h-12 bg-blue-400 text-white rounded-lg flex items-center  hover:bg-blue-300  justify-start px-4' onClick={() => setCreateProject(true)}
                      style={{position: 'absolute', right: '2rem', bottom: '2rem'}}
                    >
                        <span className='text-black'><AiOutlinePlus size={30} className='fa-2x'/></span>
                        <p className='capitalize pl-4 font-bold'>nouvelle composition</p>
                    </button>
                </div>
            </div>
        </section>
        {/* modal create project */}
        {createProject &&
        <div className='absolute w-full h-full z-50' style={{background: 'rgba(3, 3, 3, 0.4)'}}>
            <div className=' flex justify-center items-center w-full h-full relative'>
                <div className='w-96 h-52 bg-white rounded-lg'>
                    <h1 className='font-extrabold text-2xl text-center py-3 mt-2'>Nouvelle composition</h1>
                    <h4 className='px-2 font-bold mt-2'>Nom de la composition</h4>
                    <div className='p-2'>
                        <input
                            type="text"
                            className='w-full h-12 border border-blue-gray-200 rounded-lg px-2'
                            placeholder='Project name'
                            
                        />
                    </div>
                </div>
                <button className='h-12 w-12 absolute right-0 top-0 text-white'onClick={()=>{setCreateProject(false);}}><AiOutlineClose size={30} className='fa-2x'/></button>
            </div>
        </div>
            }
        </div>
    </div>


    
  )
}

export default managerLay