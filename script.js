const body = document.querySelector("body");
const projectsTab = document.getElementById("projects-tab");
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
const themeBtn = document.querySelector(".theme-changer");


// ***************************



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

//theme changer
themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
})

// tabs.forEach(tab => {
//     tab.classList.contains("section-tab")?tab.classList.remove("section-tab"):tab.classList.add("section-tab");
// })

const projectsList = {"lalibela-hotel": {
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
    design.`,
    formDevelopementImage: "./images/HRH-form-dev.png",
    detailParagraph1: "This project is integrated design project by integrating system with buildings. The concept of this project is intervention - intervention between nature and man made thing(building)",
    detailParagraph2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste deserunt voluptate, consequuntur id ut, nemo veritatis ad odio iusto illum libero ducimus commodi sequi maxime cum repudiandae, saepe aspernatur eum autem error dolorum. Amet consectetur doloremque praesentium, eos tempore odio suscipit quaerat repellat dolor iste, dolores nihil? Porro dolorem magni, rerum eaque in excepturi error amet a minus voluptatum consequuntur consectetur aperiam consequatur dolorum dolores non, dolor ullam. Dolorem beatae vero similique facere amet ea neque totam aperiam officia rerum non doloribus dolorum adipisci ipsam sint eveniet blanditiis cupiditate, in delectus aliquam perspiciatis corrupti? Culpa amet voluptatem deserunt odit.</p>",
    detailPhoto: ["images/HRH-photo-1.png", "images/HRH-photo-2.png"]
},
"high-rise-hotel": {
    imageUrl: `images/lalibela-hotel.png`,
    title: "High Rise Hotel",
    subtitle1: "9<sup>th</sup> semester project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `This project is integrated design project by
    integrating system with buildings. The concept of this
    project is intervention - intervention between nature 
    ana man made thing(building)`,
    formDevelopementImage: "./images/HRH-form-dev.png"
},
"rehabilitation-center-design":{
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
    toghether, the role of working the landscape was mine`,
    formDevelopementImage: "./images/HRH-form-dev.png"
},
"residence-design":{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Residence Design",
    subtitle1: "Internship Project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `Due to the order of the client, this 
    project has ground plus two floors. As the client's 
    wish, the ground floor is complete family residential 
    floor for the client in order to reside.`,
    formDevelopementImage: "./images/HRH-form-dev.png"
},
"residence-design-ii":{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Residence Design II",
    subtitle1: "Internship Project",
    year: "2015 E.C.",
    location: "Woldiya",
    description: `This project is a family residential 
    project with beautiful design and family architectural 
    programs. This project was the one developed my skills 
    on personal residential projects. It helped me know 
    dominant people's need of how the form of their 
    residential building to be.`,
    formDevelopementImage: "./images/HRH-form-dev.png"
},
"landscape-design":{
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
    be organized there.`,
    formDevelopementImage: "./images/HRH-form-dev.png"
}
};

for (let key in projectsList) {
    let item = projectsList[key];
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
    <button class="view-btn">View Full Project<div class="view-icons"><i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i></div></button>
    </div>
    `
    
    projectsContainer.appendChild(project)
}
// console.log(projectsList[0])

// projectsList.forEach(item => {
//     const project = document.createElement("div");
//     project.id = item.title.toLowerCase().replace(/ /g, "-");
//     project.classList.add("project");
//     project.innerHTML = `
//     <div class="image-container">
//     <img src="${item.imageUrl}" alt="${project.id}">
//     </div>
//     <div class="text-container">
//     <h1 class="title">${item.title}</h1>
//     <div class="sub-titles">
//     <h2 class="sb-title sb-title-1">${item.subtitle1}</h2>
//     <h2 class="sb-title year">Year: ${item.year}</h2>
//     </div>
//     <p class="description">
//     ${item.description}
//     </p>
//     </div>
//     <div class="hidden-layer">
//     <button class="view-btn">View Full Project<div class="view-icons"><i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i></div></button>
//     </div>
//     `
    
//     projectsContainer.appendChild(project)
// })


//opening full view
const viewBtn = document.querySelectorAll(".view-btn");
let projectDetail;
viewBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const detailElementId = e.currentTarget.parentElement.parentElement.id;
        let detailItem = projectsList[detailElementId];
        console.log(detailElementId);
        console.log(detailItem)

        fanayeText.style.display="none";
        const detailElement = `
        <div class="project-detail">
            <div class="detail-description detail">
                <h1 class="detail-title">
                    ${detailItem.title}
                </h1>
                <div class="caption-and-form">
                    <ul class="detail-caption">
                        <li class="caption-1">${detailItem.subtitle1}</li>
                        <li class="year">Year: ${detailItem.year}</li>    
                        <li class="location">Location: ${detailItem.location}</li>
                    </ul>
                    <div class="form-developement">
                        <img src=${detailItem.formDevelopementImage} alt="form-developement">
                    </div>
                </div>
                <p class="detail-text"> ${detailItem.detailParagraph1}
                    <br/>
                    <br/>
                    ${detailItem.detailParagraph2}
                    </div>
            <div class="detail-photo detail">
                <div class="images-container">
                    <div class="prev prev-next-btn"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="next prev-next-btn"><i class="fa-solid fa-chevron-right"></i></div>
                    ${detailItem.detailPhoto.forEach(item => {
                        const detailPhotoDiv = document.createElement("div");
                        detailPhotoDiv.innerHTML=`<img src="${item}" alt="photo${item.index}">`;
                        detailPhotoDiv.classList.add("image");
                        if (item === detailItem.detailPhoto[0]) {
                            detailPhotoDiv.classList.add("visible-photo");
                        }
                        console.log(detailPhotoDiv, item === detailItem.detailPhoto[0], item.index)
                        return `${detailPhotoDiv}`;
                        // console.log(detailPhotoDiv)
                    })}
                    // console.log(item === detailItem.detailPhoto[0]))}
                    // <div class="image visible-photo">
                    //     <img src="images/HRH-photo-1.png" alt="photo 1">
                    // </div>
                    // <div class="image">
                    //     <img src="images/HRH-photo-2.png" alt="photo-2">
                    // </div>
                    <div class="dots">
                        <div class="dot active-dot"></div>
                        <div class="dot"></div>
                    </div>
                    <!-- <div class="divider"></div> -->
                </div>
            </div>
            <div class="divider"></div>
            <div class="divider"></div>
            <div class="detail-siteplan detail">
                <h2>Site Plan</h2>
                <div class="siteplan-image">
                    <img src="images/HRH-siteplan.png" alt="siteplan">
                </div>
            </div>
            <div class="detail-floorplan detail">
                <h2>Floor Plans</h2>
                <div class="floorplan">
                    <div class="prev-floor prev-next-floor"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="next-floor prev-next-floor"><i class="fa-solid fa-chevron-right"></i></div>
                    <div class="floor-plan-img visible-floor">
                        <img src="images/HRH-ground-floor.png" alt="ground floor" />
                        <h3>Ground Floor</h3>
                    </div>
                    <div class="floor-plan-img">
                        <img src="images/HRH-basement-floor.png" alt="basement floor" />
                        <h3>Basement Floor</h3>
                    </div>
                    <div class="floor-plan-img">
                        <img src="images/HRH-first-floor.png" alt="first floor" />
                        <h3>First Floor</h3>
                    </div>
                    <div class="floor-plan-img">
                        <img src="images/HRH-4th-20th-floor.png" alt="4th-20th floor" />
                        <h3>4<sup>th</sup> to 20<sup>th</sup> Floor</h3>
                    </div>
                    <div class="floor-dots">
                        <div class="floor-dot active-floor-dot"></div>
                        <div class="floor-dot"></div>
                        <div class="floor-dot"></div>
                        <div class="floor-dot"></div>
                    </div>
                </div>
                <button class="download-btn">Download CAD file <i class="fa-solid fa-download"></i></button>
                <!-- <div class="floorplan">
                    <img src="images/HRH-basement-floor.png" alt="ground floor" />
                </div>
                <div class="floorplan">
                    <img src="images/HRH-first-floor.png" alt="first floor" />
                </div>
                <div class="floorplan">
                    <img src="images/HRH-4th-20th-floor.png" alt="4th-20th floor" />
                </div> -->
            </div>
            <div class="divider"></div>
            <div class="divider"></div>
            <div class="detail-elevation detail">
                <h2>Elevations</h2>
                <div class="elevation">
                    <div class="prev-elev prev-next-elev"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="next-elev prev-next-elev"><i class="fa-solid fa-chevron-right"></i></div>
                    <div class="elevation-img visible-elev">
                        <img src="images/HRH-front.png" alt="Front side Elevation" />
                        <h3>Front View</h3>
                    </div>
                    <div class="elevation-img">
                        <img src="images/HRH-rare.png" alt="Rare Elevation" />
                        <h3>Rare View</h3>
                    </div>
                    <div class="elevation-img">
                        <img src="images/HRH-left.png" alt="Left Elevation" />
                        <h3>Left View</h3>
                    </div>
                    <div class="elevation-img">
                        <img src="images/HRH-right.png" alt="Right Elevation" />
                        <h3>Right View</h3>
                    </div>
                    <div class="elev-dots">
                        <div class="elev-dot active-elev-dot"></div>
                        <div class="elev-dot"></div>
                        <div class="elev-dot"></div>
                        <div class="elev-dot"></div>
                    </div>
                </div>
                <button class="download-btn">Download CAD file <i class="fa-solid fa-download"></i></button>
            </div>
            <div class="detail-section detail">
                <h2>Sections</h2>
                <div class="section">
                    <div class="prev-section prev-next-section"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="next-section prev-next-section"><i class="fa-solid fa-chevron-right"></i></div>
                    <div class="section-img visible-section">
                        <img src="images/HRH-section-A-A.png" alt="section A-A" />
                        <h3>section A-A</h3>
                    </div>
                    <div class="section-img">
                        <img src="images/HRH-section-B-B.png" alt="section B-B" />
                        <h3>section B-B</h3>
                    </div>
                    <div class="section-dots">
                        <div class="section-dot active-section-dot"></div>
                        <div class="section-dot"></div>
                    </div>
                </div>
                <button class="download-btn">Download CAD file <i class="fa-solid fa-download"></i></button>
            </div>
        </div>
        `
        // projectsTab.appendChild(detailElement);

        projectDetail = document.querySelector(".project-detail");

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

