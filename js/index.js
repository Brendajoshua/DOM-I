const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let grtidea = document.getElementById("cta-img");
grtidea.src = "img/header-img.png";


let navitem = document.getElementsByTagName("a");
navitem[0].textContent = "Services";
navitem[1].textContent = "Product";
navitem[2].textContent = "Vision";
navitem[3].textContent = "Features";
navitem[4].textContent = "About";
navitem[5].textContent = "Contact";


const ctaText = document.getElementsByTagName('h1');    
ctaText[0].innerText = "Dome\r\n Is\r\n Awesome";

const button = document.getElementsByTagName('button');
button[0].textContent = "Get Started";

//top-content
const firstTitle = document.querySelectorAll('.top-content h4');
firstTitle[0].textContent = siteContent["main-content"]["features-h4"];
firstTitle[1].textContent = siteContent["main-content"]["about-h4"];

const firstParagraph = document.querySelectorAll('.top-content p');
firstParagraph[0].textContent = siteContent["main-content"]["features-content"];
firstParagraph[1].textContent = siteContent["main-content"]["about-content"];

//image
const secondpic = document.getElementById("middle-img");
secondpic.src = "img/mid-page-accent.jpg";

//bottom-content
const title = document.querySelectorAll('.bottom-content h4');
title[0].textContent = "Services";
title[1].textContent = "Products";
title[2].textContent = "Vision";


const ptext = document.querySelectorAll('.bottom-content p');
ptext[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//contact

const contactTitle = document.querySelectorAll('.contact h4');
contactTitle[0].textContent = "contact";

const contactText = document.querySelectorAll('.contact p');
contactText[0].innerText = "123 Way 456 Street\r\n Somewhere, USA";
contactText[1].textContent = "1 (888) 888-88889";
contactText[2].textContent = "sales@greatidea.io";

//footer
const footerText = document.getElementsByTagName("footer");
footerText[0].textContent = "Copyright Great Idea! 2018";


