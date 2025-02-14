$('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

// Array of Text Content for H1 and P
const textData = [
    { title: "Reliable & High Quality Laboratory", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut per spiciatis unde omnis natus error." },
    { title: "Molecular biology: RNA editing packs a two punch", description: "Sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur. Sequi nesciunt est qui dolorem ipsum quia dolor sit amet consectetur." },
    { title: "Immunology: T-cell tweaks to target tumors", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut per spiciatis unde omnis natus error." },
    { title: "Cardiovascular disease: Commonality with cancer", description: "Sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur. Sequi nesciunt est qui dolorem ipsum quia dolor sit amet consectetur." }
];

let index = 0; // Current index

// Function to Update H1 & P Text
function updateText() {
    document.getElementById("carousel-title").innerText = textData[index].title;
    document.getElementById("carousel-description").innerText = textData[index].description;
}

// Function for Next Text
function nextText() {
    index = (index + 1) % textData.length; // Loop back to first after last
    updateText();
}

// Function for Previous Text
function prevText() {
    index = (index - 1 + textData.length) % textData.length; // Loop back to last if at first
    updateText();
}

// Auto-Change Text Every 2 Seconds
setInterval(nextText, 2000);