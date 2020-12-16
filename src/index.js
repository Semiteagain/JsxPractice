//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const yourNAME = "Semiu";
const year = new Date();
const cureentYear = year.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourNAME} </p>
    <p>Copyright &copy; {cureentYear} </p>
  </div>,
  document.getElementById("root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
