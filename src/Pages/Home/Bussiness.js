import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faHeart, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Bussiness = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
            <h1 className='text-4xl text-secondary font-bold uppercase'>Millions Bussiness Trust Us</h1>
            <h1>Try to Understand Users Expectation</h1>
            </div>


            <div class="stats stats-vertical w-full lg:stats-horizontal shadow text-center text-primary ">

                <div class="stat">
                    <div className='text-3xl'>
                    <FontAwesomeIcon icon={faFlagCheckered} />
                    </div>
                    <div class="stat-value">71</div>
                    <div class="stat-title font-bold">Countries</div>

                </div>

                <div class="stat">
                    <div className='text-3xl'>
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    </div>
                    <div class="stat-value">500+</div>
                    <div class="stat-title font-bold">Happy Client</div>
                </div>

                <div class="stat">
                    <div className='text-3xl'>
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div class="stat-value">420+</div>
                    <div class="stat-title font-bold">Feedback</div>
                </div>

            </div>
        </div>
    );
};

export default Bussiness;