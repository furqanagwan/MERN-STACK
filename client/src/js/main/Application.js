import React from "react";
import Header from "../componnets/Header.js";
import Avatar from "../componnets/Avatar.js";
import Title from "../componnets/Text.js";
import "../../css/index.css";

export default function App() {
    return (
        <div className="App">
            <div className="App-Background">
                <Header />
                <Avatar />
                <Title />
            </div>
        </div>
    );
}
