import drippingPng from "./../../assets/imgs/dripping.png";

export default function createHeader() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const coverhomeDiv = document.createElement("div");
  const covermenuDiv = document.createElement("div");
  const covercontactDiv = document.createElement("div");
  coverhomeDiv.id = "coverhome";
  covermenuDiv.id = "covermenu";
  covercontactDiv.id = "covercontact";
  coverhomeDiv.classList.add("cover");
  covermenuDiv.classList.add("cover", "hidden");
  covercontactDiv.classList.add("cover", "hidden");

  const drippingImgCoverhome = document.createElement("img");
  drippingImgCoverhome.src = drippingPng;
  drippingImgCoverhome.alt = "dripping";

  const drippingImgCovermenu = document.createElement("img");
  drippingImgCovermenu.src = drippingPng;
  drippingImgCovermenu.alt = "dripping";

  const drippingImgCovercontact = document.createElement("img");
  drippingImgCovercontact.src = drippingPng;
  drippingImgCovercontact.alt = "dripping";

  coverhomeDiv.textContent = "Home";
  coverhomeDiv.append(drippingImgCoverhome);
  covermenuDiv.textContent = "Menu";
  covermenuDiv.append(drippingImgCovermenu);
  covercontactDiv.textContent = "Contact";
  covercontactDiv.append(drippingImgCovercontact);

  const tabListUl = document.createElement("ul");
  tabListUl.className = "tab-list";
  const homeLi = document.createElement("li");
  homeLi.textContent = "Home";
  const menuLi = document.createElement("li");
  menuLi.textContent = "Menu";
  const contactLi = document.createElement("li");
  contactLi.textContent = "Contact";

  tabListUl.append(homeLi, menuLi, contactLi);
  nav.append(coverhomeDiv, covermenuDiv, covercontactDiv, tabListUl);
  header.appendChild(nav);

  return header;
}
