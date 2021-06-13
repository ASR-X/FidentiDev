type AudioSpectrumProps = {
    animationId?: number, // canvas id number/string a random string false
    width: number, //      canvas width      number      300      false
    height: number, //     canvas height      number      200      false
    capColor: string, //      color of caps      string      #FFF      false
    capHeight: number, //      height of caps      string      2      false
    meterWidth: number, //      width of meters      number      2      false
    meterColor: any[], // color of meters string/array [{stop: 0, color: '#f00'},{stop: 0.5, color: '#0CD7FD'},{stop: 1, color: 'red'}] false
    meterCount: number,
    gap: number,
}

export type {AudioSpectrumProps};

export const AudioSpectrum = async(analyserCanvas:any, props:AudioSpectrumProps) => {
    console.log('hi')
    if (navigator.mediaDevices.getUserMedia !== null) {
        const options = {
            video: true,
            audio: true,
        };
        try {
            const stream = await navigator.mediaDevices.getUserMedia(options);        
            const audioCtx = new AudioContext(); 
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 2048;
            const audioSrc = audioCtx.createMediaStreamSource(stream);
            audioSrc.connect(analyser);
            const drawSpectrum = () => {
                let cwidth = analyserCanvas.current.width
                let cheight = analyserCanvas.current.height - props.capHeight
                let capYPositionArray:number[] = [] // store the vertical position of the caps for the preivous frame
                let ctx = analyserCanvas.current.getContext('2d')
                let gradient = ctx.createLinearGradient(0, 0, 0, 300)
        
                if (props.meterColor.constructor === Array) {
                    let stops = props.meterColor
                    let len = stops.length
                    for (let i = 0; i < len; i++) {
                        gradient.addColorStop(stops[i]['stop'], stops[i]['color'])
                    }
        
                    let drawMeter = () => {
                        let array = new Uint8Array(analyser.frequencyBinCount); // item value of array: 0 - 255
                        analyser.getByteFrequencyData(array);
                        // if (playStatus === 'PAUSED') {
                        //     for (let i = array.length - 1; i >= 0; i--) {
                        //         array[i] = 0
                        //     }
                        //     let allCapsReachBottom = !capYPositionArray.some(cap => cap > 0)
                        //     if (allCapsReachBottom) {
                        //         ctx.clearRect(0, 0, cwidth, cheight + props.capHeight)
                        //         cancelAnimationFrame(props.animationId) // since the sound is top and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
                        //         return
                        //     }
                        // }
                        let step = Math.round(array.length / props.meterCount) // sample limited data from the total array
                        ctx.clearRect(0, 0, cwidth, cheight + props.capHeight)
                        for (let i = 0; i < props.meterCount; i++) {
                            let value = array[i * step]
                            if (capYPositionArray.length < Math.round(props.meterCount)) {
                                capYPositionArray.push(value)
                            };
                            ctx.fillStyle = props.capColor
                            // draw the cap, with transition effect
                            if (value < capYPositionArray[i]) {
                                // let y = cheight - (--capYPositionArray[i])
                                let preValue = --capYPositionArray[i]
                                let y = (270 - preValue) * cheight / 270
                                ctx.fillRect(i * (props.meterWidth + props.gap), y, props.meterWidth, props.capHeight)
                            } else {
                                // let y = cheight - value
                                let y = (270 - value) * cheight / 270
                                ctx.fillRect(i * (props.meterWidth + props.gap), y, props.meterWidth, props.capHeight)
                                capYPositionArray[i] = value
                            };
                            ctx.fillStyle = gradient; // set the filllStyle to gradient for a better look
            
                            // let y = cheight - value + this.props.capHeight
                            let y = (270 - value) * (cheight) / 270 + props.capHeight
                            ctx.fillRect(i * (props.meterWidth + props.gap), y, props.meterWidth, cheight) // the meter
                        }
                        props.animationId = requestAnimationFrame(drawMeter)
                    }
                    props.animationId = requestAnimationFrame(drawMeter)
                }
        }
            drawSpectrum()
        }
        catch (err) {
            // error handling
        }
    }
};
