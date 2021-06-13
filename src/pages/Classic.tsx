import React, {FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Mode2 from '../components/Mode2'

export const Classic:FunctionComponent<any> = (props) => {
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
        modeTitle2={{
            props: {children: "classic"}
        }}
        micButton2={{
            onClick: () => {
                history.push('/recording?mode=classic');
            }
        }}
        {...props}
    />);
}