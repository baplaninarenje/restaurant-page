export default function createContent(currentContent, node) {
  currentContent.replaceChildren();
  currentContent.append(...node);
  return currentContent;
}
