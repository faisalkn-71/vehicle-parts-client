import React from 'react';

const FucusButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default FucusButton;