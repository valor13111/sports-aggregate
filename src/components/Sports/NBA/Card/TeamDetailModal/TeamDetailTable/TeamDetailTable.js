import React from 'react';

function TeamDetailTable({ teamDetail }) {
    function camelCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>Away Record</td>
                    <td>{teamDetail.away.win} / {teamDetail.away.loss}</td>
                </tr>
                <tr>
                    <td>Home Record</td>
                    <td>{teamDetail.home.win} / {teamDetail.home.loss}</td>
                </tr>
                <tr>
                    <td>Conference Rank</td>
                    <td>{camelCase(teamDetail.conference.name)} : {teamDetail.conference.rank}</td>
                </tr>
                <tr>
                    <td>Division Rank</td>
                    <td>{camelCase(teamDetail.division.name)} : {teamDetail.division.rank}</td>
                </tr>
                <tr>
                    <td>Last 10 Games</td>
                    <td>{teamDetail.lastTenWin} / {teamDetail.lastTenLoss}</td>
                </tr>
                <tr>
                    <td>Current Win Streak</td>
                    <td>{teamDetail.winStreak}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TeamDetailTable