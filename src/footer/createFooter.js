export default function createFooter() {
  const footer = document.createElement("footer");
  const ul = document.createElement("ul");

  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const liThree = document.createElement("li");

  const anchorOne = document.createElement("a");
  const anchorTwo = document.createElement("a");
  const anchorThree = document.createElement("a");

  anchorOne.classList.add("attribution", "icons2");
  anchorOne.href =
    "https://web.archive.org/web/20221024060550/http://www.freepik.com/";
  anchorOne.title = "Freepik";
  anchorOne.textContent = "Hive icon made by Freepik - www.flaticon.com";
  liOne.append(anchorOne);

  anchorTwo.classList.add("attribution", "icons");
  anchorTwo.href =
    "https://web.archive.org/web/20221024060550/https://www.flaticon.com/authors/smashicons";
  anchorTwo.title = "Smashicons";
  anchorTwo.textContent = "Bee icons made by Smashicons - www.flaticon.com";
  liTwo.append(anchorTwo);

  anchorThree.classList.add("attribution");
  anchorThree.href =
    "https://web.archive.org/web/20221024060550/https://www.freepik.com/vectors/food";
  anchorThree.title = "Smashicons";
  anchorThree.textContent =
    "Background image created by dgim-studio - www.freepik.com";
  liThree.append(anchorThree);

  ul.append(liOne, liTwo, liThree);
  footer.append(ul);

  return footer;
}
