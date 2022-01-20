import React, {useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom"

function RedirectRes() {

    const history = useHistory();
    const {_id} = useParams();

    useEffect(() => {
        history.push(`/restaurant/${_id}/overview`);
    });

    return (
        <div>
            
        </div>
    )
}

export default RedirectRes
