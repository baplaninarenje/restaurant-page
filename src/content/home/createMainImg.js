import honeycombSvg from "./../../../assets/imgs/honeycomb.svg";

export default function createMainImg() {
  const mainImg = document.createElement("img");
  mainImg.classList.add("decorations", "hive");
  mainImg.src = honeycombSvg;

  return mainImg;
}
