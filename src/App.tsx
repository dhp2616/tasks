import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import ApplicationSketch from "../src/Screenshot_task11.png";
import { Button } from "react-bootstrap";
function App(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVis(): void {
        setVisible(!visible);
    }
    return (
        <div className="App">
            <div className="AppH">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                    <ul>
                        <li>Application Sketched</li>
                        <li>Quiz/Question Comps</li>
                        <li>interfaces for quiz</li>
                        <li>Edit/delete working</li>
                    </ul>
                </header>
            </div>
            <div className="quizz">
                <Quizzer></Quizzer>
            </div>
            <div className="Pwork">
                <h3>Previous Tasks...</h3>
                <Button onClick={flipVis}>Click Me!</Button>
                {visible && (
                    <div>
                        <hr></hr>
                        <CheckAnswer expectedAnswer="42"></CheckAnswer>
                        <hr></hr>
                        <GiveAttempts></GiveAttempts>
                        <hr></hr>
                        <EditMode></EditMode>
                        <hr></hr>
                        <ChangeColor></ChangeColor>
                        <hr></hr>
                        <MultipleChoiceQuestion
                            options={["a", "b", "c"]}
                            expectedAnswer="b"
                        ></MultipleChoiceQuestion>
                        <hr></hr>
                        <DoubleHalf></DoubleHalf>
                        <hr></hr>
                        <ChooseTeam></ChooseTeam>
                        <hr></hr>
                        <ColoredBox></ColoredBox>
                        <hr></hr>
                        <ShoveBox></ShoveBox>
                        <hr></hr>
                        <Counter></Counter>
                        <hr />
                        <RevealAnswer></RevealAnswer>
                        <hr />
                        <StartAttempt></StartAttempt>
                        <hr />
                        <TwoDice></TwoDice>
                        <hr />
                        <ChangeType></ChangeType>
                        <hr />
                        <CycleHoliday></CycleHoliday>
                    </div>
                )}
                <html>
                    <body>
                        <img src={ApplicationSketch}></img>
                    </body>
                    <span>[Reminder] Make sure to combine</span>
                </html>
            </div>
        </div>
    );
}

export default App;
