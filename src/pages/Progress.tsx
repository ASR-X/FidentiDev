import React, {FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/loading.css';

export const Progress:FunctionComponent<any> = (props) => {
    const history = useHistory();
    return (
        <div style = {{ width: '100vw', height: '100vh', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="lds-ring"></div>
            <span className="loading-span">Loading...</span>
        </div>
    );
}