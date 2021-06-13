import React, {FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { PlasmicHomepage } from '../components/plasmic/fidenti/PlasmicHomepage';

export const Home:FunctionComponent<any> = (props) => {
    const history = useHistory();
    console.log(props)
    return <PlasmicHomepage 
        mode1={{
            onClick: () => {
            history.push('/classic');
            }
        }}
        mode2={{
            onClick: () => {
            history.push('/umolympics');
            }
        }}
        mode3={{
            onClick: () => {
            history.push('/recitation');
            }
        }}
        {...props}
    />;
}