import React from 'react';

import Card from './Card/Card';

import './NBA.css';

function NBA() {
    return (
        <div className="container p-2 mt-100">
            <div className="row p-2 ">
                <div className="col-sm-4">
                    <Card conference="East" modalTarget="EastStandings" />
                </div>
                <div className="col-sm-4">
                    <Card conference="West" modalTarget="WestStandings" />
                </div>
            </div>
        </div>
    );
}

export default NBA