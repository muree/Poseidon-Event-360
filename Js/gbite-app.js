let categories = [
    {
        catimg: 'Rectangle 101 (2)',
        catName: 'Artists'
    },
    {
        catimg: 'image 65',
        catName: 'Events Decorators'
    },
    {
        catimg: 'Rectangle 101 (4)',
        catName: 'Caterers'
    },
    {
        catimg: 'image 51',
        catName: "Dj's"
    },
    {
        catimg: 'image 74',
        catName: 'Cakes'
    },
    {
        catimg: 'image 53',
        catName: 'Chefs'
    },
    {
        catimg: 'image 76',
        catName: "MC's"
    },
    {
        catimg: 'image 75',
        catName: 'Bridals'
    },
    {
        catimg: 'Rectangle 102 (1)',
        catName: 'Photographers'
    },
    {
        catimg: 'Rectangle 102',
        catName: 'Cleaning Service'
    },
    {
        catimg: 'image 80',
        catName: 'Videographers'
    },
    {
        catimg: 'image 81',
        catName: 'Rentals'
    },
    
]
let categorySect = document.getElementById('category-section');
let html = "";
categories.forEach(e => {
    html += `
        <div class="col-12 col-md-3 col-lg-3 pb-3" id="category-section">
            <a href="#" class="text-decoration-none"><img src="img/Vendors/${e.catimg}.png" alt="" class="img-fluid vendor-img">
            <p class="bg-white shadow-vend color-blue poppins-nav small-text2 fw-bolder py-2 ps-3">${e.catName}</p>
            </a>
        </div>
    
    `
    console.log(e)

    categorySect.innerHTML = html
})


  
