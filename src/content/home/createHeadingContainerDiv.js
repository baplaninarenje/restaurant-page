import beeSvg from "./../../../assets/imgs/bee.svg";

export default function createHeadingContainerDiv(heading) {
  // headingContainerDiv
  const headingContainerDiv = document.createElement("div");
  headingContainerDiv.classList.add("heading-container");

  const beeLeftImg = document.createElement("img");
  beeLeftImg.classList.add("decorations", "bee-left");
  beeLeftImg.src = beeSvg;

  const beeRigtImg = document.createElement("img");
  beeRigtImg.classList.add("decorations", "bee-right");
  beeRigtImg.src = beeSvg;

  const headingDiv = document.createElement("div");
  headingDiv.classList.add("heading");

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = heading;

  headingDiv.append(beeLeftImg, mainHeading, beeRigtImg);
  headingContainerDiv.append(headingDiv);

  return headingContainerDiv;
}
