let statTable = document.getElementById("statTable");
let newsletterEmail = document.getElementById("newsletterEmail");
let newsletterFirstName = document.getElementById("newsletterFirstName");
let newsletterLastName = document.getElementById("newsletterLastName");
let newsletterTeam = document.getElementById("newsletterTeam");
let newsletterCheck =document.getElementById("newsletterCheck");
let msg = document.getElementById("msg");


let formValidation = () => {
    msg.innerHTML = "";
    let valid = true;

    if (newsletterEmail.value === "") {
      msg.innerHTML += `<p>Email cannot be blank!</p>`;
      valid = false;
    }
    else if(/^\S+@\S+\.\S+$/.test(newsletterEmail.value) == false)
    {
      msg.innerHTML += `<p>Email is not in the correct format!</p>`;
      valid = false;
    }
    else if(newsletterEmail.value.length > 40)
    {
      msg.innerHTML += `<p>Email should be less than 40 characters!</p>`;
      valid = false;
    }
  
    if (newsletterFirstName.value === "") {
      msg.innerHTML += `<p>Firstname cannot be blank!</p>`;
      valid = false;
    }
    else if(/^[a-zA-Z\s]+$/.test(newsletterFirstName.value) == false)
    {
      msg.innerHTML += `<p>Firstname can only contain characters!</p>`;
      valid = false;
    }
    else if(newsletterFirstName.value.length > 20)
    {
      msg.innerHTML += `<p>Firstname cannot be more than 20 characters!</p>`;
      valid = false;
    }
  
    if (newsletterLastName.value === "") {
        msg.innerHTML += `<p>Lastname cannot be blank!</p>`;
        valid = false;
    }
    else if(/^[a-zA-Z\s]+$/.test(newsletterLastName.value) == false)
    {
        msg.innerHTML += `<p>Lastname can only contain characters!</p>`;
        valid = false;
    }
    else if(newsletterLastName.value.length > 20)
    {
        msg.innerHTML += `<p>Lastname cannot be more than 20 characters!</p>`;
        valid = false;
    }

    if(newsletterTeam.value === "0") {
        msg.innerHTML += `<p>Please choose a team!</p>`;
        valid = false;
    }

    if(!(newsletterCheck.checked)) {
        msg.innerHTML += `<p>You have not agreed to recieve the newsletter!</p>`;
        valid = false;
    }

  
    if (valid === true) {
      console.log("Success!!");
      msg.innerHTML = "";
      acceptData();
    } else {
      return false;
    }
  };

let sortTable = (n) => {
    let rows = 0;
    let switching = 0;
    let i = 0;
    let x =0;
    let y = 0;
    let shouldSwitch = 0;
    let dir = 0;
    let switchCount =0;
  
    switching = true; 
    dir = "asc";
  
    //loop until no switching is done
    while(switching)
    {
      //start with no switching done
      switching = false; 
      rows = statTable.rows;
  
      console.log(rows);
  
      for(i=1;i<(rows.length -1);i++)
      {
        shouldSwitch = false;
        //compare current element and next eleemnt
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
  
        //check if the 2 rows should swap place
        if(dir == "asc"){
          if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
          {
            shouldSwitch = true;
            break;
          }
        }
        else{
          if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
          {
            shouldSwitch = true;
            break;
          }
        }
      }
      if(shouldSwitch)
      {
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
        switchCount++;
      }
      else
      {
        if(switchCount == 0 && dir == "asc")
        {
          dir = "desc";
          switching = true;
        }
      }
    }
  }