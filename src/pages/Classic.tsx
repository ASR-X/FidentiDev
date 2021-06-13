import React, {FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import slug from 'limax';
import Mode2 from '../components/Mode2'

export const Classic:FunctionComponent<any> = (props) => {
    const history = useHistory();
    const [name, setName] = useState(null as any);
    return (
    <Mode2
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
            props: {children: "classic"}
        }}
        micButton2={{
            onClick: () => {
                if (name) history.push('/recording?mode=classic&run=' + slug(name));
            }
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