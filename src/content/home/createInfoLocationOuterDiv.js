export default function createInfoLocationOuterDiv() {
  const infoLocationOuterDiv = document.createElement("div");
  infoLocationOuterDiv.classList.add("comb-outer", "info-location-outer");

  const infoLocationInnerDiv = document.createElement("div");
  infoLocationInnerDiv.classList.add("comb-inner", "info-location-inner");

  const locationHeading = document.createElement("h3");
  locationHeading.classList.add("location");
  locationHeading.textContent = "Location";

  const addressPara = document.createElement("p");
  addressPara.classList.add("address");
  addressPara.textContent = "123 Forest Drive, Forestville, Maine";

  infoLocationInnerDiv.append(locationHeading, addressPara);
  infoLocationOuterDiv.append(infoLocationInnerDiv);

  return infoLocationOuterDiv;
}
