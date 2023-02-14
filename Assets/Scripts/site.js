let statTable = document.getElementById("statTable");
let newsletterEmail = document.getElementById("newsletterEmail");
let newsletterFirstName = document.getElementById("newsletterFirstName");
let newsletterLastName = document.getElementById("newsletterLastName");
let newsletterTeam = document.getElementById("newsletterTeam");
let newsletterCheck =document.getElementById("newsletterCheck");

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