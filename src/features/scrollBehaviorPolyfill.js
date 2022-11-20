import scroll from "scroll-behavior-polyfill";
let exportedScroll;
if (!("scrollBehavior" in document.documentElement.style)) {
  exportedScroll = scroll;
}
export default exportedScroll;
