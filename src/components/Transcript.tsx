import React, {FunctionComponent} from 'react'

export const Transcript: FunctionComponent<{m: {messages:any[]}}> = ({m}) => {
    const results = m.messages.map((msg: { results: any[]; result_index: any; }) => msg.results.map((result: any, i: any) => (
        <span key={`result-${msg.result_index + i}`}>{result.alternatives[0].transcript}</span>
      ))).reduce((a: string | any[], b: any) => a.concat(b), []); // the reduce() call flattens the array
      return (
          <>
          {results}
          </>
      );
}
