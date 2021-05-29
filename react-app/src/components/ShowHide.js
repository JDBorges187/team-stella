const showHideDesc = (infoClass, arrowClass, buttonClass) => {
  let chev = document.querySelector(arrowClass);
  let btn = document.querySelector(buttonClass);
  let div = document.querySelector(infoClass);
  if (div.style.display !== "block") {
      div.style.display = "block";
      chev.style.transform = "rotate(180deg)";
      btn.style.borderBottom = "none";
  }
  else {
      div.style.display = "none";
      chev.style.transform = "rotate(-360deg)";
      btn.style.borderBottom = "1px solid darkgray"
  }
}
export default showHideDesc;
