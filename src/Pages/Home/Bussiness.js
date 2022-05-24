import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faHeart, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Bussiness = () => {
    return (
        <div className='my-20 bg-base-200 p-10 rounded'>
            <div className='text-center'>
            <h1 className='text-4xl text-secondary font-bold'>Millions Bussiness Trust Us</h1>
            <h1>Try to Understand Users Expectation</h1>
            </div>


            <div className="stats stats-vertical w-full lg:stats-horizontal shadow mt-5 text-center text-primary ">

                <div className="stat">
                    <div className='text-3xl'>
                    <FontAwesomeIcon icon={faFlagCheckered} />
                    </div>
                    <div className="stat-value">71</div>
                    <div className="stat-title font-bold">Countries</div>

                </div>

                <div className="stat">
                    <div className='text-3xl'>
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    </div>
                    <div className="stat-value">500+</div>
                    <div className="stat-title font-bold">Happy Client</div>
                </div>

                <div className="stat">
                    <div className='text-3xl'>
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="stat-value">420+</div>
                    <div className="stat-title font-bold">Feedback</div>
                </div>

            </div>
        </div>
    );
};

export default Bussiness;