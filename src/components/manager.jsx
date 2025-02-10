import React, { useEffect, useState } from 'react'
import closeEye from '../assets/closeeye.png';
import copy from '../assets/copy.png';

const Manager = ({ changepassword, savepassword,searchQuery, onchange, deletepassword, toggle, editpassword, form, ispassword, passwordarray,Copy }) => {



  return (

    <div className=" shadow-[0_4px_6px_rgba(30,41,57,0.2)] max-w-7xl mx-auto p-6 bg-gray-800 rounded-lg  mt-10">
      <h2 className="text-2xl text-white mb-6">Add Your Details</h2>

      {/* Form Inputs */}
      <div className="space-y-4">
        <div className='flex justify-between items-center gap-8'>
          <div className="flex justify-center items-start flex-col w-full">
            <label className="text-white">User Name</label>
            <input
              value={form.name}
              name='name'
              onChange={onchange}
              type="text"
              className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center items-start flex-col w-full">
            <label className="text-white">Website</label>
            <input
              value={form.url}
              onChange={onchange}
              name='url'
              type="text"
              className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="text-white">Password</label>
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <input
              onChange={onchange}
              value={form.password}
              name='password'
              type={ispassword ? "text" : "password"}
              className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none "
            />
            {ispassword ? (
              <lord-icon
                onClick={() => changepassword()}
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                className="w-8 h-8 cursor-pointer"
              ></lord-icon>
            ) : (
              <img onClick={() => changepassword()} className="invert opacity-60" src={closeEye} alt="" width="32px" />
            )}
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="mt-6">
        <button
          onClick={() => savepassword()}
          className="w-full flex justify-center items-center gap-1.5 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            colors="primary:#ffffff">
          </lord-icon>
          Add Password
        </button>
      </div>

      {/* List */}
      <div className="mt-8">

        {
          passwordarray.length > 0 ? <table className='w-full text-left table-auto text-white'>
            <tr className='mb-5'>
              <th className='text-white text-2xl font-medium px-4 py-2 w-[100vh] max-[700px]:text-sm'>Username</th>
              <th className='text-white text-2xl font-medium px-4 py-2 w-[100vh] max-[700px]:text-sm'>Website</th>
              <th className='text-white text-2xl font-medium px-4 py-2 w-[100vh] max-[700px]:text-sm'>password</th>
              <th className='text-white text-2xl font-medium px-4 py-2 w-[40vh] max-[700px]:text-sm'>action</th>
            </tr>
            {
              passwordarray.filter((e) => e.name.toLowerCase().includes(searchQuery)).map((e) => {
                return <tr key={e.id}>
                  <td className='px-4 max-[700px]:px-2 py-2 mt-[11px] flex justify-start gap-5  max-[700px]:gap-3 max-[400px]:gap-1 max-[700px]:justify-between max-[400px]:justify-center max-[700px]:text-xs'><p className='max-[700px]:w-[40px] w-20 max-[700px]:overflow-hidden'>{e.name}</p> <img onClick={()=>Copy(e.name)} className='invert max-[700px]:w-[15px]' src={copy} alt="copy" width={'25px'}/></td>
                  <td className='px-4 max-[700px]:px-2 py-2 max-[700px]:text-xs'><div className='flex justify-start items-center gap-5 max-[700px]:gap-3 max-[700px]:justify-between'><p className='max-[700px]:w-[40px] w-20 max-[700px]:overflow-hidden'>{e.url} </p> <img onClick={()=>Copy(e.url)} className='invert max-[700px]:w-[15px]' src={copy} alt="copy" width={'25px'}/></div></td>


                  <td className='px-4 max-[700px]:px-2 py-2 max-[700px]:text-xs '>{<div className='flex justify-start max-[700px]:gap-3 max-[400px]:gap-1 max-[700px]:justify-between max-[400px]:justify-center gap-3 items-center'><input type={e.iseye ? 'text' : 'password'} className=' max-[700px]:w-[40px] w-20' value={e.password} />
                  <img onClick={()=>Copy(e.url)} className='invert max-[700px]:w-[15px]' src={copy} alt="copy" width={'25px'}/>
                    {e.iseye ? (
                      <lord-icon
                        onClick={() => toggle(e.id)}
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#ffffff"
                        className="w-8 h-8 cursor-pointer max-[700px]:w-[19px] max-[450px]:w-8"
                      ></lord-icon>
                    ) : (
                      <img onClick={() => toggle(e.id)} className="invert opacity-100 max-[700px]:w-[19px]" src={closeEye} alt="" width="32px" />
                    )}
                  </div>}</td>
                  <td className='px-4 max-[700px]:px-2 max-[400px]:px-1 py-2'><div className="flex justify-start items-center max-[700px]:ml-3 max-[400px]:ml-2 max-[700px]:gap-3 max-[400px]:gap-1 max-[700px]:justify-between max-[400px]:justify-center gap-4">
                    <button
                      onClick={() => editpassword(e.id)}>

                      <lord-icon
                        src="https://cdn.lordicon.com/cbtlerlm.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#ffffff,tertiary:#ffffff,quaternary:#ffffff,quinary:#3a3347"
                        className='max-[700px]:w-[19px]'>
                          
                      </lord-icon>
                    </button>
                    <button
                      onClick={() => deletepassword(e.id)}>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        className='max-[700px]:w-[19px]'>
                      </lord-icon>
                    </button>
                  </div></td>
                </tr>
              })
            }

          </table> : <div className='text-white text-2xl'>No password</div>
        }
      </div>

    </div>
  )
}

export default Manager;
