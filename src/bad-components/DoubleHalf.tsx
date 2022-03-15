import React, { useState } from "react";
import { Button } from "react-bootstrap";
interface share {
    setDhValue: (x: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: share): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: share): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
