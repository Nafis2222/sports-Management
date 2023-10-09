import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h1 className="">My errorpage don't contain similarities</h1>
           <Link to="/"> <button className="btn btn-accent">Go Back</button></Link>
        </div>
    );
};

export default Errorpage;