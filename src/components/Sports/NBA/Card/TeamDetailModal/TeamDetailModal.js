import React from 'react';

import TeamDetailTable from './TeamDetailTable/TeamDetailTable'

function TeamDetailModal({ teamDetail, modalTarget }) {
    return (     
        <div className="modal fade" id={modalTarget} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title mx-auto">{teamDetail ? teamDetail.teamId : null}</h3>
                    </div>
                    <div className="modal-body">
                        {teamDetail ? <TeamDetailTable teamDetail={teamDetail} /> : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamDetailModal