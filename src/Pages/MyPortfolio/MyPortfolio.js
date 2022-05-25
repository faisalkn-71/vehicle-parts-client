import React from 'react';
import FocusButton from '../Shared/FocusButton';

const MyPortfolio = () => {
    return (
        <div className='mt-20'>
            <h1><span className='font-bold'>Name:</span> Md Faisal Karim</h1>
            <h1><span className='font-bold'>Email:</span> csust2021@gmail.com</h1>
            <h1><span className='font-bold'>Education:</span> CST, 2nd Semister at Changsha University of Science and Technology, China </h1>

            <br />
            <br />
           <div>
           <ul>
                <h1  className='text-2xl font-bold'>Here is the some skills I have as a web-developer:</h1>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
                <li>Node.js</li>
                <li>Mongodb</li>
                </div>

            </ul>
           </div>
           <br />
           <br />


            <div>
                <h1 className='text-2xl font-bold'>Check out these website which is made by me:</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>

                    <FocusButton className="flex  justify-center">
                    <a href="https://electro-store-7c6a3.web.app/">Electro Store</a>
                    </FocusButton>

                    <FocusButton>
                    <a href="https://helping-hand-df968.web.app/">Helping Hand</a>
                    </FocusButton>

                    <FocusButton>
                    <a href="https://assignment-9-on-programming-hero.netlify.app/">Laptop Arena</a>
                    </FocusButton>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;