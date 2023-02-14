let statTable = document.getElementById("statTable");
let newsletterEmail = document.getElementById("newsletterEmail");
let newsletterFirstName = document.getElementById("newsletterFirstName");
let newsletterLastName = document.getElementById("newsletterLastName");
let newsletterTeam = document.getElementById("newsletterTeam");
let newsletterCheck = document.getElementById("newsletterCheck");
let errMsg = document.getElementById("errMsg");

let resetForm = () => {
  newsletterEmail.value = "";
  newsletterFirstName.value = "";
  newsletterLastName.value = "";
  newsletterTeam.value = "0";
  newsletterCheck.checked = false;
};

let formValidation = () => {
  errMsg.innerHTML = "";
  successMsg.innerHTML = "";

  let valid = true;

  if (newsletterEmail.value === "") {
    errMsg.innerHTML += `<p>Email cannot be blank!</p>`;
    valid = false;
  } else if (/^\S+@\S+\.\S+$/.test(newsletterEmail.value) == false) {
    errMsg.innerHTML += `<p>Email is not in the correct format!</p>`;
    valid = false;
  } else if (newsletterEmail.value.length > 40) {
    errMsg.innerHTML += `<p>Email should be less than 40 characters!</p>`;
    valid = false;
  }

  if (newsletterFirstName.value === "") {
    errMsg.innerHTML += `<p>Firstname cannot be blank!</p>`;
    valid = false;
  } else if (/^[a-zA-Z\s]+$/.test(newsletterFirstName.value) == false) {
    errMsg.innerHTML += `<p>Firstname can only contain characters!</p>`;
    valid = false;
  } else if (newsletterFirstName.value.length > 20) {
    errMsg.innerHTML += `<p>Firstname cannot be more than 20 characters!</p>`;
    valid = false;
  }

  if (newsletterLastName.value === "") {
    errMsg.innerHTML += `<p>Lastname cannot be blank!</p>`;
    valid = false;
  } else if (/^[a-zA-Z\s]+$/.test(newsletterLastName.value) == false) {
    errMsg.innerHTML += `<p>Lastname can only contain characters!</p>`;
    valid = false;
  } else if (newsletterLastName.value.length > 20) {
    errMsg.innerHTML += `<p>Lastname cannot be more than 20 characters!</p>`;
    valid = false;
  }

  if (newsletterTeam.value === "0") {
    errMsg.innerHTML += `<p>Please choose a team!</p>`;
    valid = false;
  }

  if (!newsletterCheck.checked) {
    errMsg.innerHTML += `<p>You have not agreed to recieve the newsletter!</p>`;
    valid = false;
  }

  if (valid === true) {
    console.log("Success!!");
    errMsg.innerHTML = "";
    successMsg.innerHTML = "Thank you for signing up to our newsletter!";
    resetForm();
  } else {
    return false;
  }
};

let sortTable = (n) => {
  let rows = 0;
  let switching = 0;
  let i = 0;
  let x = 0;
  let y = 0;
  let shouldSwitch = 0;
  let dir = 0;
  let switchCount = 0;

  switching = true;
  dir = "asc";

  //loop until no switching is done
  while (switching) {
    //start with no switching done
    switching = false;
    rows = statTable.rows;

    console.log(rows);

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      //compare current element and next eleemnt
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      //check if the 2 rows should swap place
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};
