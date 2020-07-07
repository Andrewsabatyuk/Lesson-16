function sendDataByGet(){
    let userData = {
      userSurname: document.getElementById('userSurnameGet').value,
      userName: document.getElementById('userNameGet').value,
      userAge: document.getElementById('userAgeGet').value,
      userPlace: document.getElementById('userPlaceGet').value
    }
    let xhr = new XMLHttpRequest();
    if (document.getElementById("userAgeGet").value >= 1 && document.getElementById("userAgeGet").value <= 100) {
      xhr.open('GET', '/userGet?userSurname=' + userData.userSurname + '&userName=' + userData.userName + '&userAge=' + userData.userAge + '&userPlace=' + userData.userPlace);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send();
      xhr.addEventListener("load", function () {
          for (var key in userData)
              console.log(userData[key] + " ValidatedByGET");
      });
    }
    else{
      document.getElementById("userAgeGet").value = "error";
    }
  }
/*post*/
function sendDataByPost(){
    let userData = {
      userSurname: document.getElementById('userSurnamePost').value,
      userName: document.getElementById('userNamePost').value,
      userAge: document.getElementById('userAgePost').value,
      userPlace: document.getElementById('userPlacePost').value
    }
    let xhr = new XMLHttpRequest();
    if (document.getElementById("userAgePost").value >= 1 && document.getElementById("userAgePost").value <= 100){
      xhr.open('POST', '/userPost');
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(userData));
      xhr.addEventListener("load", function () {
          for (var key in userData)
              console.log(userData[key] + " ValidatedByPOST");
      });
    }
    else{
      document.getElementById("userAgeGet").value = "error";
    }
  }