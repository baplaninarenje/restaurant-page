export default function createInfoHoursOuterDiv() {
  const infoHoursOuterDiv = document.createElement("div");
  infoHoursOuterDiv.classList.add("comb-outer", "info-hours-outer");

  const infoHoursInnerDiv = document.createElement("div");
  infoHoursInnerDiv.classList.add("comb-inner", "info-hours-inner");

  const hoursHeading = document.createElement("h3");
  hoursHeading.classList.add("hours");
  hoursHeading.textContent = "Hours";

  const sundayPara = document.createElement("p");
  sundayPara.classList.add("sunday");
  sundayPara.textContent = "Sunday: 8am - 8pm";

  const mondayPara = document.createElement("p");
  mondayPara.classList.add("monday");
  mondayPara.textContent = "Monday: 6am - 6pm";

  const tuesdayPara = document.createElement("p");
  tuesdayPara.classList.add("tuesday");
  tuesdayPara.textContent = "Tuesday: 6am - 6pm";

  const wednesdayPara = document.createElement("p");
  wednesdayPara.classList.add("wednesday");
  wednesdayPara.textContent = "Wednesday: 6am - 6pm";

  const thursdayPara = document.createElement("p");
  thursdayPara.classList.add("thursday");
  thursdayPara.textContent = "Thursday: 6am - 10pm";

  const fridayPara = document.createElement("p");
  fridayPara.classList.add("friday");
  fridayPara.textContent = "Friday: 6am - 10pm";

  const saturdayPara = document.createElement("p");
  saturdayPara.classList.add("saturday");
  saturdayPara.textContent = "Saturday: 8am - 10pm";

  infoHoursInnerDiv.append(
    hoursHeading,
    sundayPara,
    mondayPara,
    tuesdayPara,
    wednesdayPara,
    thursdayPara,
    fridayPara,
    saturdayPara
  );
  infoHoursOuterDiv.append(infoHoursInnerDiv);

  return infoHoursOuterDiv;
}
