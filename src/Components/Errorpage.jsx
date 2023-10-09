import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
        <div className='text-center justify-center align-middle my-48'>
                <h1 className='text-4xl font-semibold'>404 Not Found</h1>
            <h1 className='text-center text-3xl font-normal'>
            Sorry!!! Unexpected error has occurred
             </h1>
             <Link to="/"><button className='bg-slate-900 text-white px-2 mt-5 py-1'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;