import React from 'react'
import { useNavigate } from 'react-router-dom'


    const Navbar2 = () => {


    let navigate = useNavigate();

    
    return (


        <div className='p-4 bg-red-600 gap-3 flex items-center justify-center'>



            <button onClick={() => {
                navigate(-1)
            }}
                className='bg-amber-600 rounded-xl px-2 py-1'>
                Back
            </button>


            <button onClick={() => {
                navigate('/')
            }}
                className='bg-amber-600 rounded-xl px-2 py-1'>
                Return home
            </button>


            <button onClick={() => {
                navigate(+1)
            }}
                className='bg-amber-600 rounded-xl px-2 py-1'>
                Next
            </button>

        </div>
    )
}

export default Navbar2
