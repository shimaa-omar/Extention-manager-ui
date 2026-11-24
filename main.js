let mode = document.getElementById("mode");
let logo = document.getElementById("logo");

mode.addEventListener("click",function() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        mode.innerHTML = `<img src="./images/icon-sun.svg" alt="#">`
        logo.src = "./images/logo_white_text.svg";
    }else{
        mode.innerHTML = `<img src="./images/icon-moon.svg" alt="#">`
        logo.src = "./images/logo.svg";
    }
})

// ////////////////fetch/////////////////////
let all = [];
let activeExtention = [];
let inActiveExtention = [];

fetch("data.json")
.then(response => {return response.json()})
.then(data => {
    all = data;
    activeExtention = all.filter(e => e.isActive)
    inActiveExtention = all.filter(e => !e.isActive)
    display(all)
})

///////////////////////Display///////////////////////////////
let body = document.getElementById("body");
function display(extention){ 
    extention.forEach(e => {
        body.innerHTML +=`
            <div class="ext">
                <div class="ext-t">
                    <img src="${e.logo}" alt="#">
                    <div class="dis">
                        <h3>${e.name}</h3>
                        <p>${e.description}</p>
                    </div>
                </div>
                <div id="btns">
                    <button id="remove">Remove</button>
                    <button class="switch ${(e.isActive) ? "active" : ""}"><span></span></button>
                </div>
            </div>` 

    })
}

// ////////////All/////////////////////
let allbtn = document.getElementById("all");
allbtn.addEventListener("click" , function(){
    body.innerHTML =``;
    display(all)
})

// ////////////Active/////////////////////
let activBtn = document.getElementById("active");
activBtn.addEventListener("click" , function(){
    body.innerHTML =``;
    display(activeExtention)
})

// ////////////inActive/////////////////////
let inActivBtn = document.getElementById("inactive");
inActivBtn.addEventListener("click" , function(){
    body.innerHTML =``;
    display(inActiveExtention)
})


let filters = document.querySelectorAll(".flt");

filters.forEach(btn => {
    btn.addEventListener("click", function() {

        filters.forEach(button => {
            button.classList.remove("clicked");
        });

        btn.classList.add("clicked");
    });
});


// let active = [];
// body.addEventListener("click", function(e) {

//     if (e.target.closest(".switch")) {
//         let btn = e.target.closest(".switch");
//         btn.classList.toggle("active");
//     }


// });
