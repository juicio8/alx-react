import $ from "jquery";
import logo from "../../assets/holberton-logo.jpg";
import "./header.css";

$(document).ready(() => {
  $("body").append("<header></header");
  $("header").append(`<div id="logo"" width="200px" height="200px"></div>`);
  $("header").append(`<h1>Holberton Dashboard</h1>`);
  console.log("Init header");
});
