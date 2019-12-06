import React, { useState, useEffect } from 'react';

import {TEAM_IDS_NAMES as teams} from '../../../../constants/nbateams';

import axios from 'axios';
import TeamDetailModal from './TeamDetailModal/TeamDetailModal';

function WestStandings({ conference }) {
    const [standings, setStandings] = useState({
        isLoaded: false,
        sortedList: null,
        sortedTopFiveList: null
    });

    const [teamDetail, setTeamDetail] = useState(' ');

    useEffect(() => {
        fetchData(conference);
    }, []);

    async function fetchData(conference) {
        await axios.get(`https://api-nba-v1.p.rapidapi.com/standings/standard/2019/conference/${conference}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                "x-rapidapi-key": "a79c363344mshb07d9fe70e624e2p12169bjsn9304c4b9e139"
            }
        })
        .then(response => {
            const result = response.data.api.standings;

            const topFiveList = result.filter(standing => standing.conference.rank <= 5);
            const sortedFullList = result.sort((a, b) => a.conference.rank - b.conference.rank);
            const sortedTopFiveList = topFiveList.sort((a, b) => a.conference.rank - b.conference.rank);

            setStandings({
                isLoaded: true,
                sortedList: sortedFullList,
                sortedTopFiveList: sortedTopFiveList
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    function getTeamFullName(id) {
        let teamName = id;

        teams.forEach(team => {
            if (team.teamId.toString() === id.toString()) {
                teamName = team.fullName;
            }
        })

        return teamName;
    }

    return (
        <div className="card nba-card">
            <div className="card-body">
                <h5 className="card-title">NBA {conference} Conference Standings</h5>
                <p className="card-subtitle mb-2 text-muted text-center">Top 5</p>
                <div className="list-group">
                    {standings.isLoaded ? 
                        standings.sortedTopFiveList.map(item => 
                            <>
                                <button key={item.teamId} className="list-group-item list-group-item-action" onClick={() => setTeamDetail({data: item})} data-toggle="modal" data-target="#westTeamDetails">
                                    {getTeamFullName(item.teamId)} - ({item.win} / {item.loss}) 
                                </button>

                                <TeamDetailModal teamDetail={teamDetail.data} modalTarget="westTeamDetails" />
                            </>
                        )

                        : null
                    }     
                </div>
            </div>
        </div>
    );
}

export default WestStandings