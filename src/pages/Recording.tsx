import {AudioSpectrum} from '../components/AudioSpectrum'
import {SpeechRecognition} from '../components/SpeechRecognition'
import React, { useEffect, useRef, FunctionComponent, useState, useMemo } from 'react';
import '../styles/recording.css';
import {PlasmicPause,} from "../components/plasmic/fidenti/PlasmicPause";
import {PlasmicCancel,} from "../components/plasmic/fidenti/PlasmicCancel";
import { RecordWebcamOptions, WebcamRenderProps} from 'react-record-webcam/dist/types';
import { useRecordWebcam, RecordWebcam } from 'react-record-webcam';

import { io } from "socket.io-client";
import SocketIOFileUpload from "socketio-file-upload";

import {v4 as uuidv4} from 'uuid';
import { useQuery } from '../utils/hooks';
import { useHistory } from 'react-router-dom';


export const Recording:FunctionComponent = () => {
  const analyserCanvas: any = useRef(null);
  const OPTIONS: RecordWebcamOptions = {
    filename: "test",
    fileType: "mp4",
    width: 1280,
    height: 720
  };
  const [blob, setBlob] = useState(null as any)
  const [status, setStatus] = useState(null as any)
  const [record, setRecord] = useState(false)
  const startRec = useRef(null as any)
  const openRec = useRef(null as any)
  const blobRec = useRef(null as any)
  const stopRec = useRef(null as any)
  const history = useHistory();

  const query = useQuery()
  const memoQ = useMemo(
    () => 
    {
      return {mode: query.get('mode'), run: query.get('run')}
    }
  ,[query]);


  const blobToFile = (theBlob: any, fileName:string): File => {
    var b: any = theBlob
    b.lastModifiedDate = new Date(); 
    b.name = fileName + '.mp4';
    //A Blob() is almost a File() - it's just missing the two properties below which we will add

    //Cast to a File() type
    return b as File;
  }

  useEffect(() => {
    if (blob) {
      //const socket = io("http://asrx.ngrok.io", {transports: ['websocket']});
      // const socket = io("http://localhost:4567", {transports: ['websocket']});

      console.log(blob)
      // socket.on('connect', () => {
      //   console.log("connected")
      //   var uploader = new SocketIOFileUpload(socket);
      //   uploader.addEventListener("error", function(event:any){
      //     console.log(event.message);
      //     if (event.code === 1) {
      //       alert("Don't upload such a big file");
      //     }
      //   });
      //   var file:File = blobToFile(blob, uuidv4())
      //   uploader.useBuffer = true;
      //   uploader.submitFiles([file])

      // });

      // socket.on('response', data=> {
      //   console.log(data)
      // });
      

      setRecord(true)
      setTimeout( 
        () =>
        console.log(record)
      ,10000)
      

    }
  },[blob]);


  const props = useRef({
    width: 40000,
    height: 40000, //     canvas height      number      200      false
    capColor: '#cbafa5', //      color of caps      string      #FFF      false
    capHeight: 2, //      height of caps      string      2      false
    meterWidth: 2, //      width of meters      number      2      false
    meterColor: 
    [
      {stop: 1, color: '#1c1b1d'},
      {stop: 0, color: '#cbafa5'}
    ], // color of meters string/array [{stop: 0, color: '#f00'},{stop: 0.5, color: '#0CD7FD'},{stop: 1, color: 'red'}] false
    meterCount: 1000,
    gap: 1,
  })


  useEffect(() => {
    AudioSpectrum(analyserCanvas, props.current);
  }, [props])

  useEffect(() => {
    openRec.current.click();
  }, [])

  useEffect(() =>{
    if (status === "OPEN") {
      startRec.current.click();
    }
    if (status === "PREVIEW") {
      blobRec.current.click() 
      console.log(blob);
    }
    
  }, [status])

return (
  <>
    <div className="top-container">
      <div className="left-container">
          <canvas ref={analyserCanvas} className="visualizer"></canvas>
          <div className="text-container">
            <div className="text-span">
                <SpeechRecognition props={{record}}/> 
            </div>
          </div>
      </div>
      <div className="right-container">
          <RecordWebcam
          options={{...OPTIONS}}
          render={(props: WebcamRenderProps) => {
            setStatus(props.status)
            return (
              <div>
                <p style={{display: 'none'}}>Camera status: {props.status}</p>
                <div>
                  <button ref={openRec} onClick={props.openCamera} style={{display: 'none'}}>Open camera</button>
                  <button ref={startRec} onClick={props.start} style={{display: 'none'}}>Start recording</button>
                  <button ref={stopRec} onClick={props.stop} style={{display: 'none'}}>Stop</button>
                  <button ref={blobRec}
                    style={{display: 'none'}}
                    onClick={async() => {let tblob = await props.getRecording(); setBlob(tblob)}}>Download</button>
                </div>
              </div>
            );
            }}
          />
      </div>
    </div>
    <div className="control-container">
      {
        memoQ.mode !== "umolympics" ?
        <PlasmicCancel root = {{onClick: async() => {
          stopRec.current.click()
        }}}/>
        :
        <></>
      }
      
    </div>
  </>
  );
}