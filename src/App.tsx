import React from "react";
import {Route} from "react-router-dom";
import { Recording } from "./pages/Recording";
import { Home } from "./pages/Home";
import {Classic} from "./pages/Classic"
import { UmOlympics } from "./pages/UmOlympics";
import { Recitation } from "./pages/Recitation";
import { Progress } from "./pages/Progress";
import { Analysis } from "./pages/Analysis";


const App = () => {
  return (
    <>
      <Route exact path="/" ><Home/></Route>
      <Route path="/recording"><Recording/></Route>
      <Route path="/classic"><Classic/></Route>
      <Route path="/umolympics"><UmOlympics/></Route>
      <Route path="/recitation"><Recitation/></Route>
      <Route path="/progress"><Progress/></Route>
      <Route path="/analysis"><Analysis /></Route>
    </>
  );
}


// height={200}
// width={300}
// audioId={'audio-element'}
// capColor={'red'}
// capHeight={2}
// meterWidth={2}
// meterCount={512}
// meterColor={[
//   {stop: 0, color: '#f00'},
//   {stop: 0.5, color: '#0CD7FD'},
//   {stop: 1, color: 'red'}
// ]}
// gap={4}

export default App;
