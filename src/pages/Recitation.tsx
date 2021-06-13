import React, {FunctionComponent } from 'react';
import Mode3 from '../components/Mode3'
import { useHistory } from 'react-router-dom';

export const Recitation:FunctionComponent<any> = (props) => {
    const history = useHistory();
    return (
        <Mode3
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
                props: {children: "recitation"}
            }}
            micButton2={{
                onClick: () => {
                    history.push('/recording?mode=umolympics');
                }
            }}
            textbox={{
                as: "input",   
                props: {
                     // @ts-ignore: Object is possibly 'null'
                    onChange: (event : KeyboardEvent)=> setName(event.target.value)} 
                }
              }
            {...props}
        />);
}