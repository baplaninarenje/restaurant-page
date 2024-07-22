import "./../styles/reset.css";
import "./../styles/style.css";
import { home } from "./content/home/home";
import createFooter from "./footer/createFooter";
import createHeader from "./header/createHeader";
import createContent from "./content/createContent";
import { menu } from "./content/menu/menu";
import { contact } from "./content/contact/contact";

const body = document.querySelector("body");
const currentContent = document.createElement("div");

currentContent.id = "content";
currentContent.className = "content";

const header = createHeader();
body.appendChild(header);

const content = createContent(currentContent, home());

const tabList = document.querySelector(".tab-list");

function handleTabClick(tab) {
  const coverhome = document.querySelector("#coverhome");
  const covermenu = document.querySelector("#covermenu");
  const covercontact = document.querySelector("#covercontact");

  const tabContentMap = {
    Contact: {
      show: covercontact,
      hide: [coverhome, covermenu],
      content: contact,
    },
    Menu: {
      show: covermenu,
      hide: [coverhome, covercontact],
      content: menu,
    },
    Home: {
      show: coverhome,
      hide: [covermenu, covercontact],
      content: home,
    },
  };

  const tabInfo = tabContentMap[tab.textContent];
  if (tabInfo) {
    tabInfo.show.classList.remove("hidden");
    tabInfo.hide.forEach((element) => {
      if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
      }
    });
    createContent(currentContent, tabInfo.content());
  }
}

tabList.addEventListener("click", (e) => handleTabClick(e.target));

const footer = createFooter();

body.append(content, footer);
