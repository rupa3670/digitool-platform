import React from 'react';

const Stats = () => {
    return (


        <div className="stats shadow w-full bg-linear-to-r from-blue-900 to-purple-500 text-white py-6 rounded-none">
            <div className="stat">
                <div className="stat-figure text-primary">
                    
                </div>
                
                <div className="stat-value ">50K</div>
                <div className="text-gray-400">Active Users</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                </div>
    
                <div className="stat-value  text-4xl">200 +</div>
                <div className="text-gray-400">Premium Tools</div>
            </div>

            <div className="stat">
               
                <div className="stat-value ">4.9</div>
                <div className="text-gray-400">Rating</div>
            </div>
        </div>

    );
};

export default Stats;