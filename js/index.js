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

let logoCenter = document.getElementById("cta-img");
logoCenter.setAttribute('src', siteContent["cta"]["img-src"])

let logoStretch = document.getElementById("middle-img");
logoStretch.setAttribute('src',  siteContent["main-content"]["middle-img-src"])

const anchors = document.getElementsByTagName('a')
anchors[0].textContent = siteContent.nav["nav-item-1"];

anchors[1].textContent = siteContent.nav["nav-item-2"];
anchors[2].textContent = siteContent.nav["nav-item-3"];
anchors[3].textContent = siteContent.nav["nav-item-4"];
anchors[4].textContent = siteContent.nav["nav-item-5"];
anchors[5].textContent = siteContent.nav["nav-item-6"];

for(let i = 0; i < anchors.length; i++){
  anchors[i].style.color = "green"
}



//????????????????????????????????????????????????????????????????????????????


let h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta.h1.replace(new RegExp(" ", 'g'), '<br>');

const btn = document.querySelector('button')
btn.textContent = siteContent.cta.button;

const h4s = document.getElementsByTagName("h4")
h4s[0].textContent = siteContent["main-content"]["features-h4"]
h4s[1].textContent = siteContent["main-content"]["about-h4"]
h4s[2].textContent = siteContent["main-content"]["services-h4"]
h4s[3].textContent = siteContent["main-content"]["product-h4"]
h4s[4].textContent = siteContent["main-content"]["vision-h4"]
h4s[5].textContent = siteContent["contact"]["contact-h4"]

console.log(h4s)

const mainContent = document.getElementsByTagName('p')
mainContent[0].textContent = siteContent["main-content"]["features-content"]
mainContent[1].textContent = siteContent["main-content"]["about-content"]
mainContent[2].textContent = siteContent["main-content"]["services-content"]
mainContent[3].textContent = siteContent["main-content"]["product-content"]
mainContent[4].textContent = siteContent["main-content"]["vision-content"]
mainContent[5].textContent = siteContent.contact.address
mainContent[6].textContent = siteContent.contact.phone
mainContent[7].textContent = siteContent.contact.email
mainContent[8].textContent = siteContent.footer.copyright

console.log(mainContent)

const childElement1 = document.createElement("a")

childElement1.textContent = 'Sign-Up';
childElement1.setAttribute('href', '#');
let navbar = document.querySelector('header nav')
navbar.appendChild(childElement1);
childElement1.style.color = "green"

const childElement2 = document.createElement("a")
childElement2.textContent = "News"
childElement2.setAttribute('href', '#');
navbar.prepend(childElement2)
childElement2.style.color = 'green'

