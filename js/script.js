const portfolioItem=[
    {
        id:1,
        category:"web",
        img:"./images/portfolio/scroll.jpg",
        link:"https://https://scrollprojs.netlify.app/",
    },
    {
        id:2,
        category:"graphic",
        img:"./images/portfolio/portfolio-2.jpg",
        link:"https://scroll-website.netlify.app/",
    },
    {
        id:3,
        category:"designing",
        img:"./images/portfolio/designe12.jpg",
        link:"https://app.clickup.com/9012150273/v/s/90121060353",
    },
    {
        id:4,
        category:"database",
        img:"./images/portfolio/portfolio-4.jpg",
        link:"https://https://app.clickup.com/9012150273/v/s/90121060353",
    },
    {
        id:4,
        category:"database",
        img:"./images/portfolio/ecomweb.JPG",
        link:"https://tedshop.onrender.com/",
    },
    
]
const portfolio=document.querySelector(".portfolio-items-section");
window.addEventListener("DOMContentLoaded",function(){
    displayPortfolio(portfolioItem)
})
function displayPortfolio(portfolioItems){
    let displayPortfolio=portfolioItems.map(function(item){
        // console.log(item)
        return`
            <div class="portfolio-items">
                                <div class="portfolio-item-inner">
                                    <a href="${item.link}">
                                        <img src=${item.img} alt="">
                                    </a>
                                </div>
                            </div>
        `
    })
    displayPortfolio=displayPortfolio.join("")
    portfolio.innerHTML=displayPortfolio
    // console.log(displayPortfolio)
}
//filter icons
const filterIcon=document.querySelectorAll(".filter-icon, .filter-btn");
filterIcon.forEach(function(icon){
    icon.addEventListener("click",function(e){
        const category=e.currentTarget.dataset.id
        const clean=portfolioItem.filter(function(item){
            // console.log(item.category)
            // return the items based on the icon selected
            if(item.category===category){
                return item;   
            }
        })
        // console.log(clean)
        //to handle all
        if(category==="all"){
            displayPortfolio(portfolioItem)
        }else{
            displayPortfolio(clean)
        }
    })
})
// Define your date of birth (year, month, day)
const birthYear = 2003; // Replace with your year of birth
const birthMonth = 11;   // Replace with your month of birth (1-12)
const birthDay = 2;    // Replace with your day of birth (1-31)

// Get the current date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // Months are 0-based in JS
const currentDay = today.getDate();

// Calculate age
let age = currentYear - birthYear;

// Adjust age if the birthday hasn't occurred yet this year
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
}

// Display the age in the HTML
document.getElementById("age").textContent = age;


//how long i have been coding in years
const startYear = 2022; // Replace with the year you started coding
const currentYear2 = new Date().getFullYear();
const yearsCoding = currentYear2 - startYear;

document.getElementById("coding").textContent = yearsCoding;
document.getElementById("code").textContent = yearsCoding;


const starYear=2023
const currentYear3 = new Date().getFullYear();
const yearsCoding2 = currentYear3 - starYear;
document.getElementById("cod").textContent = yearsCoding2;
document.getElementById("year").textContent = currentYear
document.getElementById("yr").textContent = currentYear
document.getElementById("des").textContent = currentYear
document.getElementById("code4").textContent = currentYear


//typing animation
const text =[
    "Web Developer",
    "Web Designer",
    "Graphic Designer",
    "Database Administrator"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;

    if(letter.length === currentText.length){
        count++; 
        index = 0;
    }

    setTimeout(type, 300);
}
)();
// aside
const nav = document.querySelector('.nav')
    navList=nav.querySelectorAll('li'),
    totalNavList = navList.length;
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        // console.log(navList[i])
        const a = navList[i].querySelector('a');
        // console.log(a)
        a.addEventListener('click', function(){
            // console.log(this)
            removeBackSection()
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    // console.log("back-section"+navList[j].querySelector("a"))
                    // allSection[j].classList.add('back-section')
                    addBackSection(j)
                }
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    //dislay each section
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove('active');
        }
        const target = element.getAttribute('href').slice(1);
        document.querySelector(`#${target}`).classList.add('active');
        // console.log(element);
    }
    function addBackSection(num){
        allSection[num].classList.add('back-section')
    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove('back-section');
        }
    }
    function updateNav(element){
        // console.log(element.getAttribute('href').slice('#')[1])
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector('a').classList.remove('active');
            const target= element.getAttribute('href').slice('#')[1];
            if(target===navList[i].querySelector('a').getAttribute('href').slice("#")[1]){
                navList[i].querySelector('a').classList.add('active');;
            }
        }
    }
    document.querySelector('.hire-me').addEventListener('click', function(){
        // console.log(this)
        const sectionIndex=this.getAttribute('data-section-index');
        // console.log(sectionIndex)

        showSection(this)
        updateNav(this)
        removeBackSection()
        addBackSection(sectionIndex)
    })

    //active nav bar
    const NavTogglerBtn= document.querySelector(".nav-toggler");
        aside =document.querySelector(".aside");
        NavTogglerBtn.addEventListener("click", ()=>{
            asideSectionTogglerBtn()
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("change");
            NavTogglerBtn.classList.toggle("change");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("change");
            }
        }
        //click nav
