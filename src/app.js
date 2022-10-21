/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function combinadorExcusa(who, action, what, when) {
    let whoExcuse = Math.floor(Math.random() * who.length);
    let actionExcuse = Math.floor(Math.random() * action.length);
    let whatExcuse = Math.floor(Math.random() * what.length);
    let whenExcuse = Math.floor(Math.random() * when.length);
    return (
      "My excuse is: " +
      who[whoExcuse] +
      " " +
      action[actionExcuse] +
      " " +
      what[whatExcuse] +
      " " +
      when[whenExcuse]
    );
  }

  document.getElementById("excuse").innerHTML = combinadorExcusa(
    who,
    action,
    what,
    when
  );

  document.getElementById("message").innerHTML =
    "For more excuses, reload the page";
};
