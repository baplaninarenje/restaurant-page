import createHeadingContainerDiv from "../home/createHeadingContainerDiv";
import createInfoHoursOuterDiv from "../home/createInfoHoursOuterDiv";
import createInfoLocationOuterDiv from "../home/createInfoLocationOuterDiv";
import createMainImg from "../home/createMainImg";
import createReviewOuterDiv from "../home/createReviewOuterDiv";

const contact = () => {
  const contactNodes = [
    createHeadingContainerDiv("Contact"),
    createMainImg(),
    createReviewOuterDiv(),
    createInfoHoursOuterDiv(),
    createInfoLocationOuterDiv(),
  ];
  return contactNodes;
};

export { contact };
