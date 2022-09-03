
// categories url

const catagoreyUrl = () =>{
    

   
 // try catch use
    try{
        const  url = `https://openapi.programming-hero.com/api/news/categories`
        fetch(url)
        .then(res => res.json())
        .then(data => dispalyCatagorey(data.data.news_category)) //retun dispalyCatagorey

    }
    catch(error){
        console.log(error);
    }
}

// categories dispaly

const dispalyCatagorey = (data) =>{
    const catagoreyMenu = document.getElementById('catagorery-menu'); //cotagory menu prent tag
  

    data.forEach(element => {
        
        const li = document.createElement('li'); //cotagory menu li tag creat 
        li.classList.add('nav-item'); //cotagory menu li tag add class 
        li.innerHTML = `
            <li>
                <a class="nav-link " aria-current="page" onclick="singleCatagore(${element.category_id}, toggleSpner(${true}))">${element.category_name}</a> 
            </li>
        `
        catagoreyMenu.appendChild(li); //catagorey in append li tag
    });

}

// single catagorey id

const singleCatagore = (categoryId)=> {
    
    const singleCatagoreUrl = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`; // single catagorey url

    // try catch use

    try{
        fetch(singleCatagoreUrl)
        .then(res => res.json())
        .then(data => singleCatagoreDispaly(data.data))
       
    }
    catch(error){
        console.log(error);
    };

   
    
}

// singleCatagore Dispaly

const singleCatagoreDispaly = (data) =>{

    
    const total = document.getElementById('slecte'); // slecte tag 
    const totalNumber = data.length 
    if (totalNumber != 0) { // check all item 
        total.innerText= totalNumber + ' Total News' // set total item
    }else{
        total.innerText = ' Not found Data' //no data massese
    }

 
    const singleCatagoryId = document.getElementById('single-catagory'); // select single-catagory tag
    singleCatagoryId.innerHTML = ' '; // emty single-catagory tag befor evey lodimg
    
    

    toggleSpner(false); // spninner stop




    data.forEach(element => { 
        const {thumbnail_url, title, details, author, total_view} = element ; // Datstacher
       
        const {img, name, published_date} = author // author info

   

        const div = document.createElement('div'); // creat tag 
        div.classList.add('row', 'bg-cat', 'align-items-center','mb-4'); //add class list
        div.innerHTML = `
                <div class="col-xl-3 col-lg-6 col-md-6 ">
                    <div class="image text-center">
                        <img src=${thumbnail_url} class="w-100" alt=""> 
                    </div>
                </div>
                <div class="col-xl-9 col-lg-6 col-md-6 ">
                    <div class="catagare-text">
                        <h2>${title}</h2>
                        <p>${details.length > 500 ? details.slice(0,500) + ' SEE MORE...' : details}</p>
                    </div>
                    <div class="feed-back d-flex justify-content-between">
                        <div class="bettn comment d-flex ">
                            <div class="user-img">
                                <img src=${img} alt="">
                            </div>
                            <div class="user-name">
                                <h3>${name ? name : 'No Auther Name'}</h3>
                                <p>${published_date ? published_date : 'No date'}</p>
                            </div>
                        </div>
                        <div class="bettn view-area">
    
                            <p><i class="fa-solid fa-eye"></i></i>  ${total_view ? total_view + 'M': ' No View'}</p>
                        </div>
                        <div class="bettn mt-t rewview">
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="bettn mt-t modal-btu">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="dispalymodal('${title}', '${thumbnail_url}', '${total_view}')"><i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
        `
        
        singleCatagoryId.appendChild(div); // apped into singleCatagoryId tage
        
    });

 
    
}

// spner

const toggleSpner = (isLoder)=> {
    const spnerId = document.getElementById('spniner'); // secletor spniner tag
    if(isLoder){
        spnerId.classList.remove('d-none') //spniner add 
    }else{
        spnerId.classList.add('d-none') //spniner none
    }
}

// modal box add
const dispalymodal = (title, image_url, total_view ) =>{
    
    const modalId = document.getElementById('modalid'); //modal id select
    modalId.innerHTML= `
                <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Modal</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h3>${title}</h3>
                        <div class="text-center">
                            <img src=${image_url} alt="" srcset="">
                        </div>
                        
                        <p>Total View ${total_view}</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
    `
}



catagoreyUrl();





