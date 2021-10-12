
  document.getElementById('heartOne').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
  });
  document.getElementById('heartTwo').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
  });
  document.getElementById('heartThree').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
  });
  document.getElementById('heartFour').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
  });
  document.getElementById('heartPostCreated').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
  });

  function likesCounterUma() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("resultUma").innerHTML = "Likes " + localStorage.clickcount;
    } else {
      document.getElementById("resultUma").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  function likesCounterZelda() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("resultZelda").innerHTML = "Likes " + localStorage.clickcount;
    } else {
      document.getElementById("resultZelda").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  function likesCounterOli() {
        if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("resultOli").innerHTML = "Likes " + localStorage.clickcount;
        } else {
        document.getElementById("resultOli").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
    function likesCounterSol() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("resultSol").innerHTML = "Likes " + localStorage.clickcount;
        } else {
          document.getElementById("resultSol").innerHTML = "Sorry, your browser does not support web storage...";
        }
      }
      function likesCounterNewCard(){
        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("resulNewCard").innerHTML = "Likes " + localStorage.clickcount;
        } else {
          document.getElementById("resulNewCard").innerHTML = "Sorry, your browser does not support web storage...";
        }
      }

//Image file upload.
function getImgData() {
  const chooseFile = document.getElementById("choose-file");
  const imgPreview = document.getElementById("img-preview");
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" class="card-img-top img-cat"/>';
    });    
  }
}

//Adds card.
  function addPost(evet){
    cardToggle()
    let captionInput = document.getElementById("caption").value;
    let nameInput = document.getElementById("name").value;
    getImgData();

    if(captionInput && nameInput){
      let captionPost = document.getElementById('captionPost');         
      let namePost = document.getElementById('namePost');
      let captionPostStrg = `${captionInput}`;
      let namePostStrg = `${nameInput}`;
      captionPost.textContent = captionPostStrg;
      namePost.textContent = namePostStrg;
  }
  
  }
  //Hides card created.
  function cardToggle() {
    var toggle = document.getElementById("cardCreated");
    toggle.style.display = toggle.style.display === "none" ? "block" : "block";
  } 
