import React, {FunctionComponent } from 'react';
import Mode2 from '../components/Mode2'
import { useHistory } from 'react-router-dom';

export const UmOlympics:FunctionComponent<any> = (props) => {
    const history = useHistory();
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
            micButton2={{
                onClick: () => {
                    history.push('/recording?mode=umolympics');
                }
            }}
            {...props}
        />);
}