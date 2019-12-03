function $(id) {
  return document.getElementById(id);
}

function checkNotDot(str) {
  return str.charAt(str.length - 1) != ".";
}

function checkNotOperator(str) {
  return (
    str.charAt(str.length - 1) != "+" &&
    str.charAt(str.length - 1) != "-" &&
    str.charAt(str.length - 1) != "*" &&
    str.charAt(str.length - 1) != "/"
  );
}

function checkNotDotAndOperator(str) {
  return checkNotDot(str) && checkNotOperator(str);
}

function clickButton(ele) {
  let button = ele.innerHTML.trim();
  let outputStr = $("output").innerHTML.trim();
  switch (button) {
    case "+":
    case "-":
    case "*":
    case "/":
      if (checkNotDotAndOperator(outputStr)) {
        outputStr += button;
      }
      break;

    case ".":
      if (checkNotDotAndOperator(outputStr)) outputStr += button;
      break;

    case "C":
      outputStr = "0";
      break;

    case "=":
      outputStr = eval(outputStr);
      break;

    default:
      if (outputStr == "0") {
        outputStr = button;
      } else {
        outputStr += button;
      }
      break;
  }
  $("output").innerHTML = outputStr;
}

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("bar-item");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" bar-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " bar-red";
}
