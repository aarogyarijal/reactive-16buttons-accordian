const buttons = document.querySelectorAll(".button");
const infos = document.querySelectorAll(".description");
var mqls = [
  window.matchMedia("(max-width: 660px)"),
  window.matchMedia("(min-width: 661px) and (max-width: 934px)"),
  window.matchMedia("(min-width: 935px)"),
];

function mediaqueryresponse(mql) {
  for (i = 0; i <= 2; i++) {
    if (mqls[i].matches) {
      reOrderer(i + 2);
    }
  }
}

for (var i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
}
for (var i = 0; i < mqls.length; i++) {
  mqls[i].addListener(mediaqueryresponse);
}

function reOrderer(col) {
  order = 1;
  for (i = 1; i <= 16; i++) {
    buttons[i - 1].style.order = order;
    infos[i - 1].style.order = order + 1;
    if (i % col == 0) {
      order = order + 2;
    }
  }
}

infos.forEach((info, i) => {
  info.style.display = "none";
  info.innerHTML = `
  <h3 class="emergency-management-header">${buttons[i].innerHTML}</h3>
  <p>
    The information regarding the emergency goes here.
  </p>
  <p>
    <strong>If a Shelter-in-Place is ordered:</strong>
  </p>
  <ul>
    <li>
      If outside, seek shelter in the nearest building, preferably in an
      interior room with few windows.
    </li>
    <li>
      Allow access to others seeking shelter. Remember: a Shelter-in-Place
      order means there are dangerous environmental conditions but NOT any
      known threat of violent behavior. Allowing others into the building
      will not jeopardize your safety.
    </li>
    <li>
      Close all exterior doors, windows and any other openings to the
      outside.
    </li>
    <li>Avoid overcrowding by selecting several rooms if necessary.</li>
    <li>Monitor WPI Alert and email for further instructions.</li>
    <li>Report any emergency or unusual conditions to WPI Police.</li>
    <li>
      Do not leave the building until receiving the “all clear” from a
      police officer, WPI Alert, email or website.
    </li>
  </ul>
  <button class="close-button" id="close-button-${i+1}" onclick="closeDiv(${i})">Close
  `;
});

function closeDiv(index) {
  infos[index].style.display = "none";
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    infos.forEach((info, i) => {
      if (i != index) info.style.display = "none";
    });
    console.log(infos[index].style.display);
    // Toggle the visibility of the clicked button's info div
    if (infos[index].style.display === "none") {
      infos[index].style.display = "block";
    } else {
      infos[index].style.display = "none";
    }
  });
});
