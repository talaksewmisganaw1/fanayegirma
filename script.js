const body = document.querySelector("body");
const projectsContainer = document.querySelector(".projects");
const menusContainer = document.querySelector(".menus");
const menus = document.querySelectorAll(".menu");
const prevNextBtn = document.querySelectorAll(".prev-next-btn");
const floorBtns = document.querySelectorAll(".prev-next-floor");
const elevBtns = document.querySelectorAll(".prev-next-elev");
const sectionBtns = document.querySelectorAll(".prev-next-section");
const images = document.querySelectorAll(".image");
const floorImages = document.querySelectorAll(".floor-plan-img");
const elevImages = document.querySelectorAll(".elevation-img");
const sectionImages = document.querySelectorAll(".section-img");
const dots = document.querySelectorAll(".dot");
const floorDots = document.querySelectorAll(".floor-dot");
const elevDots = document.querySelectorAll(".elev-dot");
const sectionDots = document.querySelectorAll(".section-dot");
const backBtn = document.querySelector(".back-btn");
const preloader = document.querySelector(".loader");
const opening = document.querySelector(".opening");
const fanayeText = document.querySelector(".name");

// ***************************
const projectDetail = document.querySelector(".project-detail");


// ***************************

window.addEventListener("load", () => {
    preloader.style.display="none";
    opening.style.display="grid";
    body.style.overflow="hidden";
    setTimeout(() => {
        opening.classList.add("animate-opening");
        fanayeText.classList.add("fanaye-logo");
        body.style.overflow="auto";
    }, 200)
    body.classList.add("visible-body");
    // body.style.overflow="hidden";
})


// tabs.forEach(tab => {
//     tab.classList.contains("section-tab")?tab.classList.remove("section-tab"):tab.classList.add("section-tab");
// })

const projectsList = [{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Lalibela Hotel",
    subtitle1: "10<sup>th</sup> semester project",
    year: "2016 E.C.",
    location: "Woldiya",
    description: `This project is a thesis design proposal 
    which i did for my graduation research by thinking 
    adaptability of anicient ethiopian architectural 
    wisdom. The concept of this project is adapting 
    lalibela architecture to contemporary architecture 
    in hotel design according to primary elements of 
    design.`
},
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "High Rise Hotel",
    subtitle1: "9<sup>th</sup> semester project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `This project is integrated design project by
    integrating system with buildings. The concept of this
    project is intervention - intervention between nature 
    ana man made thing(building)`
}, 
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Rehabilitation Center Design",
    subtitle1: "Freelance Project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `This project is for the purpose of 
    addiction rehabilitation to make the youth healed 
    by design. In this project my work was the landscape 
    part. I worked this project in collaboration with my 
    friend. Although we worked most part of the project 
    toghether, the role of working the landscape was mine`
},
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Residence Design",
    subtitle1: "Internship Project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `Due to the order of the client, this 
    project has ground plus two floors. As the client's 
    wish, the ground floor is complete family residential 
    floor for the client in order to reside.`
},
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Residence Design",
    subtitle1: "Internship Project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `This project is a family residential 
    project with beautiful design and family architectural 
    programs. This project was the one developed my skills 
    on personal residential projects. It helped me know 
    dominant people's need of how the form of their 
    residential building to be.`
},
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Landscape Design",
    subtitle1: "Freelance Project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `Since the pops of north wollo live there, 
    many activities and events are proformed in the 
    compound. The aim of the project is making the 
    landscape comfortable for the owners regarding the 
    dignity and respect for the pops, and also making it 
    suitable for the events and any situatios which could 
    be organized there.`
}
];


projectsList.forEach(item => {
    const project = document.createElement("div");
    project.id = item.title.toLowerCase().replace(/ /g, "-");
    project.classList.add("project");
    project.innerHTML = `
    <div class="image-container">
    <img src="${item.imageUrl}" alt="${project.id}">
    </div>
    <div class="text-container">
    <h1 class="title">${item.title}</h1>
    <div class="sub-titles">
    <h2 class="sb-title sb-title-1">${item.subtitle1}</h2>
    <h2 class="sb-title year">Year: ${item.year}</h2>
    </div>
    <p class="description">
    ${item.description}
    </p>
    </div>
    <div class="hidden-layer">
    <button class="view-btn">View Full Project<span class="view-icon"></span><i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    `
    
    projectsContainer.appendChild(project)
})


//opening full view
const viewBtn = document.querySelectorAll(".view-btn");
viewBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(body.style.height)
        fanayeText.style.display="none";
        projectDetail.classList.add("visible-detail");
        body.style.height="90vh";
        body.style.overflow="hidden";
        backBtn.classList.add("visible-back-btn");
    })
})

//closing full view
backBtn.addEventListener("click", () => {
    // console.log(projectDetail.classList);
    fanayeText.style.display="flex";
    projectDetail.classList.remove("visible-detail");
    body.style.height="inherit";
    body.style.overflow="auto";
    backBtn.classList.remove("visible-back-btn");
})


menusContainer.addEventListener("click", (e) => {
    const clickedMenu = e.target;
    menus.forEach(menu => {
        if(menu.classList.contains("active-menu")) {
            menu.classList.remove("active-menu");
        }
    })
    clickedMenu.classList.add("active-menu");
})

//photo gallery
let activeImage = 0;
prevNextBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        let i;
        if(btn.classList.contains("next")) {
            if(activeImage + 1 === images.length) {
                activeImage = 0;
            } else {
                activeImage++;
            }
        } else {
            if(activeImage - 1 < 0) {
                activeImage = images.length - 1;
            } else {
                activeImage--;
            }
        }
        
        console.log(activeImage);

        for (i = 0; i < images.length; i++) {
            console.log(images[1].classList);
            images[i].classList.remove("visible-photo");  
        }

        for (i = 0; i < images.length; i++) {
            console.log(dots[i]);
            dots[i].classList.remove("active-dot");  
        }

        images[activeImage].classList.add("visible-photo");
        dots[activeImage].classList.add("active-dot");
    })
})

//floorplan galley
let activeFloor = 0;
floorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let i;
        if(btn.classList.contains("next-floor")) {
            if(activeFloor + 1 === floorImages.length) {
                activeFloor = 0;
            } else {
                activeFloor++;
            }
        } else {
            if(activeFloor - 1 < 0) {
                activeFloor = floorImages.length - 1;
            } else {
                activeFloor--;
            }
        }
        
        console.log(activeFloor);

        for (i = 0; i < floorImages.length; i++) {
            console.log(floorImages[1].classList);
            floorImages[i].classList.remove("visible-floor");  
        }

        for (i = 0; i < floorImages.length; i++) {
            console.log(floorDots[i]);
            floorDots[i].classList.remove("active-floor-dot");  
        }

        floorImages[activeFloor].classList.add("visible-floor");
        floorDots[activeFloor].classList.add("active-floor-dot");
    })
})

//elevation gallery
let activeElev = 0;
elevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let i;
        if(btn.classList.contains("next-elev")) {
            if(activeElev + 1 === elevImages.length) {
                activeElev = 0;
            } else {
                activeElev++;
            }
        } else {
            if(activeElev - 1 < 0) {
                activeElev = elevImages.length - 1;
            } else {
                activeElev--;
            }
        }
        
        console.log(activeElev);

        for (i = 0; i < elevImages.length; i++) {
            console.log(elevImages[1].classList);
            elevImages[i].classList.remove("visible-elev");  
        }

        for (i = 0; i < elevImages.length; i++) {
            console.log(elevDots[i]);
            elevDots[i].classList.remove("active-elev-dot");  
        }

        elevImages[activeElev].classList.add("visible-elev");
        elevDots[activeElev].classList.add("active-elev-dot");
    })
})

//section gallery
let activeSection = 0;
sectionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let i;
        if(btn.classList.contains("next-section")) {
            if(activeSection + 1 === sectionImages.length) {
                activeSection = 0;
            } else {
                activeSection++;
            }
        } else {
            if(activeSection - 1 < 0) {
                activeSection = sectionImages.length - 1;
            } else {
                activeSection--;
            }
        }
        
        console.log(activeSection);

        for (i = 0; i < sectionImages.length; i++) {
            console.log(sectionImages[1].classList);
            sectionImages[i].classList.remove("visible-section");  
        }

        for (i = 0; i < sectionImages.length; i++) {
            console.log(sectionDots[i]);
            sectionDots[i].classList.remove("active-section-dot");  
        }

        sectionImages[activeSection].classList.add("visible-section");
        sectionDots[activeSection].classList.add("active-section-dot");
    })
})

