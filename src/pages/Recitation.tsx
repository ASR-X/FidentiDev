import React, {FunctionComponent, useState } from 'react';
import PlasmicMode3 from '../components/plasmic/fidenti/PlasmicMode3'
import { useHistory } from 'react-router-dom';
import slug from 'limax';

export const Recitation:FunctionComponent<any> = (props) => {
    const history = useHistory();
    const [script, setScript] = useState(null as any);
    const [name, setName] = useState(null as any);
    return (
        <PlasmicMode3
            classic={{
                onClick: () => {
                history.push('/classic');
                }
            }}
            umolympics={{
                onClick: () => {
                history.push('/umolympics');
                }
            }}
            recitation={{
                onClick: () => {
                history.push('/recitation');
                }
            }}
            home={{
                onClick: () => {
                history.push('/');
                }
            }}
            analysis={{ 
                onClick: () => {
                    history.push('/analysis');
                }
            }}
            modeTitle2={{
                props: {children: "recitation"}
            }}
            micButton2={{
                onClick: () => {
                    if(name && script) history.push('/recording?mode=recitation&run=' + slug(name));
                }
            }}
            script={{
                value: script,
                onChange: (e:any) => {
                    setScript(e.target.value);
                },
            }}
            name={{
                value: name,
                onChange: (e:any) => {
                    setName(e.target.value);
                },
            }}
            {...props}
        />);
}