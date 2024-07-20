import createHeadingContainerDiv from "../home/createHeadingContainerDiv";
import createInfoHoursOuterDiv from "../home/createInfoHoursOuterDiv";
import createInfoLocationOuterDiv from "../home/createInfoLocationOuterDiv";
import createMainImg from "../home/createMainImg";
import createReviewOuterDiv from "../home/createReviewOuterDiv";

const menu = () => {
  const menuNodes = [
    createHeadingContainerDiv("Menu"),
    createMainImg(),
    createReviewOuterDiv(),
    createInfoHoursOuterDiv(),
    createInfoLocationOuterDiv(),
  ];
  return menuNodes;
};

export { menu };
