import createHeadingContainerDiv from "./createHeadingContainerDiv";
import createInfoHoursOuterDiv from "./createInfoHoursOuterDiv";
import createInfoLocationOuterDiv from "./createInfoLocationOuterDiv";
import createMainImg from "./createMainImg";
import createReviewOuterDiv from "./createReviewOuterDiv";

const home = () => {
  const homeNodes = [
    createHeadingContainerDiv("Beary's Breakfast Bar"),
    createMainImg(),
    createReviewOuterDiv(),
    createInfoHoursOuterDiv(),
    createInfoLocationOuterDiv(),
  ];
  return homeNodes;
};

export { home };
