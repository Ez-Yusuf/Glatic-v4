if (localStorage.getItem("cloak") == "glatic") {
  document.querySelector("link[rel='icon']").href = "imgs/Logo.png";
  document.title = "glatic'";
  console.log("railin")
} 

if (localStorage.getItem("cloak") == "classroom") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/classroom.png";
  document.title = "Classroom";
  console.log("classroom")
} 

if (localStorage.getItem("cloak") == "canvas") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/canvas.png";
  document.title = "Canvas";
  console.log("canvas")
} 

if (localStorage.getItem("cloak") == "ps") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/powerschool.png";
  document.title = "Grades and Attendance";
  console.log("powerschool")
}

if (localStorage.getItem("cloak") == "google") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/Google.png";
  document.title = "Google";
  console.log("google")
}

if (localStorage.getItem("cloak") == "drive") {
  document.querySelector("link[rel='icon']").href = "/imgs/cloaks/drive.png";
  document.title = "My Drive - Google Drive";
  console.log("drive")
}
    
if (localStorage.getItem("panic") == "on") {
  document.addEventListener('keydown', event => {
    if (event.keyCode == 192) {
      window.open("https://www.google.com/", "_self");
    }
  })
  console.log('panic')
}

if (localStorage.getItem("panic") == "off") {
  console.log('no panic');
} 

window.addEventListener('DOMContentLoaded', () => {

  if (localStorage.getItem("theme") === "dark") {
    document.body.setAttribute("class", "");
    console.log('dark');
  }
  
  if (localStorage.getItem("theme") === "light") {
    document.body.setAttribute("class", "light");
    console.log('light');
  }
  
  if (localStorage.getItem("theme") === "amoled") {
    document.body.setAttribute("class", "amoled");
    console.log('amoled');
  }

  if (localStorage.getItem("theme") === "ugly") {
    document.body.setAttribute("class", "ugly");
    console.log('ugly');
  }


});
