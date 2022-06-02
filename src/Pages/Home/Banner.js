import React from 'react';
import { Link } from 'react-router-dom';
import FocusButton from '../Shared/FocusButton'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src="https://i.ibb.co/P6Zs6WT/banner.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Find Parts for Your Vehicle!</h1>
                        <p className="py-6">We provide here your needed vehicle's parts in unbelieveable cost. Here we sell some rare parts of car. Please order your needed one.</p>
                        <FocusButton>
                            <Link to='/products'>Get Started</Link>
                        </FocusButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;