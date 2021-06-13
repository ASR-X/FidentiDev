import React, {FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PlasmicMode4 } from '../components/plasmic/fidenti/PlasmicMode4';
import { useLocalStorage } from '../utils/hooks';
import Radium from 'radium'

var styles:any = {
    base: {
      fontColor: 'white',
      fontSize: '200%',
   
      // Adding interactive state couldn't be easier! Add a special key to your
      // style object (:hover, :focus, :active, or @media) with the additional rules.
      ':hover': {
        fontColor: '#cbafa5',
        fontSize: '200%'
      }
    },
}

const Span:FunctionComponent<any> = (props) => {
    const history = useHistory();
    return (
        <span onClick={ () => {history.push("/runanalysis?run=" + props.children)}}style={styles.base}>{props.children}</span>
    )
}

export default Radium(Span)

export const GetRuns:FunctionComponent = () => {
    const [runs, setRuns] = useLocalStorage("runs", []);
    const res = runs.map( (run:any, i:any) => (
        <Span key={i.toString()}>{run}</Span>
    )).reduce((a: string | any[], b: any) => a.concat(b), []);
    

    console.log(res)
    return (
        <>{res}</>
    )
}


export const Analysis:FunctionComponent<any> = (props) => {
    const history = useHistory();
    
    return (
        <PlasmicMode4
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
        home={{
            onClick: () => {
            history.push('/');
            }
        }}
        recitation={{
            onClick: () => {
            history.push('/recitation');
            }
        }}
        modetitle={{
            props: {children: "analysis"}
        }}
        runBox={{
            props:  {children: <GetRuns/>} 
        }}
        {...props}
        />
    )
}