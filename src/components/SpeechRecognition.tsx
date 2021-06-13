import React, {useState, useRef, useEffect, useCallback, FunctionComponent} from 'react';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';
import {Transcript} from './Transcript'


export const SpeechRecognition:FunctionComponent = () => {
    const stream = useRef(null as any)
    
    const [state, setState] = useState({
        model: 'en-US_BroadbandModel',
        rawMessages: [] as any[],
        formattedMessages: [] as any[], 
        audioSource: null as any,
        speakerLabels: false,
        keywords: ['%HESITATION'],
        accessToken: '',
        serviceUrl: '',
        // transcript model and keywords are the state that they were when the button was clicked.
        // Changing them during a transcription would cause a mismatch between the setting sent to the
        // service and what is displayed on the demo, and could cause bugs.
        settingsAtStreamStart: {
          model: 'en-US_Multimedia',
          keywords: ['%HESITATION'],
          speakerLabels: false,
        },
        tokenInterval: null as any,
        error: null as any,
    });
    
    const reset = () => {
        if (state.audioSource) {
          stopTranscription();
        }
        setState({ ...state, rawMessages: [], formattedMessages: [], error: null });
      }

    const stopTranscription = () => {
        if (stream.current) {
          stream.current.stop();
          stream.current.removeAllListeners();
          stream.current.recognizeStream.removeAllListeners();
        }
        setState({...state, audioSource: null });
      }
      
      const getRecognizeOptions = async() => {
        const keywords = ['%HESITATION'];
        const options = {
          video: true,
          audio: true,
        };
        const stream = await navigator.mediaDevices.getUserMedia(options);        
        return Object.assign({
          // formats phone numbers, currency, etc. (server-side)
          accessToken: state.accessToken,
          format: true, // adds capitals, periods, and a few other things (client-side)
          model: state.model,
          objectMode: true,
          interimResults: true,
          // note: in normal usage, you'd probably set this a bit higher
          wordAlternativesThreshold: 0.4,
          keywords: keywords,
          keywordsThreshold: 0.6, // note: in normal usage, you'd probably set this a bit higher
          timestamps: true, // set timestamps for each word - automatically turned on by speaker_labels
          // includes the speaker_labels in separate objects unless resultsBySpeaker is enabled
          speakerLabels: state.speakerLabels,
          inactivityTimeout: 15,
          url: state.serviceUrl,
          mediaStream: stream,
          profanityFilter: false,
          smartFormatting: false,
          wordConfidence:true,
          hesitation:'[HESITATION]'
        }, []);
      }

      const handleMicClick = () => {
        if (state.audioSource === 'mic') {
          stopTranscription();
          return;
        }
        reset();
        setState({ ...state, audioSource: 'mic' });
        
        
      }

      const handleStream = (stream: any) => {
        console.log(stream);
        //cleanup old stream if appropriate
        if (stream.current) {
          stream.current.stop();
          stream.current.removeAllListeners();
          stream.current.recognizeStream.removeAllListeners();
        }
        stream.current = stream;
    
        // grab the formatted messages and also handle errors and such
        stream.on('data', (data:any) => handleFormattedMessage(data)).on('end', handleTranscriptEnd()).on('error');
    
        // when errors occur, the end event may not propagate through the helper streams.
        // However, the recognizeStream should always fire a end and close events
        stream.recognizeStream.on('end', () => {
          if (state.error) {
            handleTranscriptEnd();
          }
        });
    
        stream.recognizeStream
          .on('message', (frame:any, json:any) => {handleRawMessage({ sent: false, frame, json })})
          .on('send-json', (json: any) => {handleRawMessage({ sent: true, json })})
          .once('send-data', () => {handleRawMessage({
            sent: true, binary: true, data: true, // discard the binary data to avoid waisting memory
          })})
          .on('close', (code: any, message: any) => {handleRawMessage({ close: true, code, message })});
      }
    
      const handleRawMessage = (msg: any) => {
        const {rawMessages} = state;
        rawMessages.push(msg)
        setState({ ...state, rawMessages: rawMessages });
      }

      function handleFormattedMessage(msg: any) {
        const {formattedMessages} = state;
        formattedMessages.push(msg)
        setState({ ...state, formattedMessages: formattedMessages});
      }

      function handleTranscriptEnd() {
        // note: this function will be called twice on a clean end,
        // but may only be called once in the event of an error
        setState({ ...state, audioSource: null });
      }
      const [token, setToken] = useState(null )

      const memofetchToken = useCallback(
        async() => {
        return fetch('http://localhost:3000/api/v1/credentials').then((res) => {
          if (res.status !== 200) {
            throw new Error('Error retrieving auth token');
          }
          return res.json();
        }) // todo: throw here if non-200 status
          .then(creds => { 
              setState( s => ({ ...s, ...creds })); 
              setToken(creds.accessToken)
              console.log(token)
          })
          .catch();
      }, []);
      
      useEffect( () => {
        console.log("effect", token)
        if (token){
          getRecognizeOptions().then((options) => handleStream(recognizeMicrophone(options)))
        }
      }, [token])

      useEffect( () => {
        memofetchToken()
        let interval = setInterval(memofetchToken, (50 * 60 * 1000))

        //destroy interval on unmount
        return () => { clearInterval(interval); handleMicClick()}
      }, [memofetchToken, ])

    
      const getCurrentInterimResult = () => {
        const r = state.formattedMessages[state.formattedMessages.length - 1];
    
        // When resultsBySpeaker is enabled, each msg.results array may contain multiple results.
        // However, all results in a given message will be either final or interim, so just checking
        // the first one still works here.
        if (!r || !r.results || !r.results.length || r.results[0].final) {
          return null;
        }
        return r;
      }
      
      const getFinalResults = () => {
        return state.formattedMessages.filter(r => r.results
          && r.results.length && r.results[0].final);
      }

      const getFinalAndLatestInterimResult = () => {
        const final = getFinalResults();
        const interim = getCurrentInterimResult();
        if (interim) {
          final.push(interim);
        }
        return final;
      }

      // type transcriptType = {
      //   messages[]
      // }

      const messages = getFinalAndLatestInterimResult()

      return (
        <>
          <Transcript m={{messages}} />
        </>
      );
}