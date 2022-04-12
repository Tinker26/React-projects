import React from "react";
import MyApp from './components/MyApp';
import MyApp2 from "./components/MyApp2";
import Component1 from "./propsTutorial/Component1";
import Component2 from "./propsTutorial/Component2";
import Lesson1 from "./stateLesson/Lesson1";
import Counter from "./stateLesson/Counter";

function App() {
  return (
    <div className="App">
      {/* <Lesson1 /> */}
      <Counter />
      {/* <Component1 name="Javohir" age="17" />
      <Component2 text="React tutorial" />
       */}
        {/* <MyApp />
        <MyApp2 /> */}
    </div>
  );
}

export default App;
