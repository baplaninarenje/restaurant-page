export default function createReviewOuterDiv() {
  const reviewOuterDiv = document.createElement("div");
  reviewOuterDiv.classList.add("comb-outer", "review-outer");

  const reviewInnerDiv = document.createElement("div");
  reviewInnerDiv.classList.add("comb-inner", "review-inner");

  const reviewPara = document.createElement("p");
  reviewPara.classList.add("review");
  reviewPara.textContent = `Beary's has the best porridge! The atmosphere and customer service
            make you feel like you are sitting in the middle of the woods,
            eating like a bear! This is exactly the kind of place that I like to
            return to again and again.`;

  const customerPara = document.createElement("p");
  customerPara.classList.add("customer");
  customerPara.textContent = "Goldilocks";

  reviewInnerDiv.append(reviewPara, customerPara);
  reviewOuterDiv.append(reviewInnerDiv);

  return reviewOuterDiv;
}
