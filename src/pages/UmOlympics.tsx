import React, {FunctionComponent, useState } from 'react';
import Mode2 from '../components/Mode2'
import { useHistory } from 'react-router-dom';
import slug from 'limax';

export const UmOlympics:FunctionComponent<any> = (props) => {
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
            modetitle={{
                props: {children: "um olympics"}
            }}
            analysis={{ 
                onClick: () => {
                    history.push('/analysis');
                }
            }}
            home={{
                onClick: () => {
                history.push('/');
                }
            }}
            micButton2={{
                onClick: () => {
                    if (name) history.push('/recording?mode=umolympics&run=' + slug(name));
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