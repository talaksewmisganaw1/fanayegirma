const projectsContainer = document.querySelector(".projects");
const menusContainer = document.querySelector(".menus");
const menus = document.querySelectorAll(".menu");

const projectsList = [{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Lalibela Hotel",
    subtitle1: "10<sup>th</sup> semester project",
    Year: "2016 E.C.",
    Location: "Woldiya",
    description: `His project is a thesis design proposal 
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
    Year: "2015 E.C.",
    Location: "Woldiya",
    description: `This project is integrated design project by
    integrating system with buildings. The concept of this
    project is intervention - intervention between nature 
    ana man made thing(building)`
}, 
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Rehabilitation Center Design",
    subtitle1: "Freelance Project",
    Year: "2015 E.C.",
    Location: "Woldiya",
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
    Year: "2015 E.C.",
    Location: "Woldiya",
    description: `Due to the order of the client, this 
    project has ground plus two floors. As the client's 
    wish, the ground floor is complete family residential 
    floor for the client in order to reside.`
},
{
    imageUrl: `images/lalibela-hotel.png`,
    title: "Residence Design",
    subtitle1: "Internship Project",
    Year: "2015 E.C.",
    Location: "Woldiya",
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
                        <h2 class="sb-title location">Location: ${item.location}</h2>
                    </div>
                    <p class="description">
                        ${item.description}
                    </p>
                </div>
            `

    console.log(project)
    projectsContainer.appendChild(project)
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