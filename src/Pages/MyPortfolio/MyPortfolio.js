import React from 'react';
import FocusButton from '../Shared/FocusButton';
import photo from '../../images/myself.jpg'

const MyPortfolio = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Md Faisal Karim</h1>
                        <p className="pt-6">Email: csust2021@gmail.com</p>
                        <p className="py-2">CST, 2nd Semister at Changsha University of Science and Technology, China</p>
                        
                    </div>
                </div>
            </div>
            
            <br />
            <br />
            <div>
                <ul>
                    <h1 className='text-2xl font-bold'>Here is the some skills I have as a web-developer:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
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