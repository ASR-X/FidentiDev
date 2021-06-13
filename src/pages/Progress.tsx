import React, {FunctionComponent, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/loading.css';
import { useQuery } from '../utils/hooks';

export const Progress:FunctionComponent<any> = (props) => {
    const history = useHistory();
    const query = useQuery()
    const memoQ = useMemo(
        () => 
        {
        return {mode: query.get('mode'), run: query.get('run')}
        }
    ,[query]);

    useEffect( ()=> {
        setTimeout( () => {
            history.replace("/runanalysis?mode=" + memoQ.mode + "&run=" + memoQ.run)
        }, 800)
    }, [])

    return (
        <div style = {{ width: '100vw', height: '100vh', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="lds-ring"></div>
            <span className="loading-span">Loading...</span>
        </div>
    );
}