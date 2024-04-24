var countrySateCityinfo = {
    "LLC": [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "Washington DC",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ],
    "S-CORPORATION": [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "Washington DC",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ],

    "C-CORPORATION": [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "Washington DC",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ],
    "NON-PROFIT":[
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "Washington DC",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ],
    // betech:["a","b","c", "d"],
}

window.onload = function(){
    const selectCountry = document.getElementById('state'),
        selectState = document.getElementById('entity'),
        selects = document.querySelectorAll('select')

        selectState.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let state in countrySateCityinfo){
            // console.log(country);
            selectCountry.options[selectCountry.options.length] = new Option(state, state)
        }


        // country change
        selectCountry.onchange = (e) =>{
            
            selectState.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectState.length = 1
            // selectCity.length = 1
            // selectZip.length = 1

            // for(let state in countrySateCityinfo[e.target.value]){
            //     // console.log(state);
            //     //selectState.options[selectState.options.length] = new Option(state, state);
            //     console.log(countrySateCityinfo[e.target.value])
            //     break;
            // }
            countrySateCityinfo[e.target.value].map((entity)=> {
                console.log(entity)
                selectState.options[selectState.options.length] = new Option(entity, entity)
            })
        }

        // state change
        // selectState.onchange = (e) =>{
        //     // selectCity.disabled = false
        //     // selectZip.disabled = true

        //     selects.forEach(select => {
        //         if(select.disabled == true){
        //             select.style.cursor = "auto"
        //         }
        //         else{
        //             select.style.cursor = "pointer"
        //         }
        //     })

        //     // selectCity.length = 1
        //     // selectZip.length = 1

        //     // for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
        //     //     // console.log(city);
        //     //     selectCity.options[selectCity.options.length] = new Option(city, city)
        //     // }
        // }

        // change city
        // selectCity.onchange = (e) =>{
        //     selectZip.disabled = false

        //     selects.forEach(select => {
        //         if(select.disabled == true){
        //             select.style.cursor = "auto"
        //         }
        //         else{
        //             select.style.cursor = "pointer"
        //         }
        //     })
            
        //     selectZip.length = 1

        //     let zips = countrySateCityinfo[selectCountry.value][selectState.value][e.target.value]
            
        //     for(let i=0; i<zips.length; i++){
        //         selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
        //     }
        // }
}



// from order now sticky table heading


window.onscroll = function() {myFunction()};

var price_table = document.getElementById("price_table");

function myFunction() {
    if(window.pageYOffset >= price_table.offsetTop){
        price_table.classList.add("sticky")
    } else {
        price_table.classList.remove("sticky")
    }
}




const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}


// for home page slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  })



        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });

