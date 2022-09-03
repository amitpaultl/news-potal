
// categories url

const catagoreyUrl = () =>{
    const  url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => dispalyCatagorey(data.data.news_category))
}

// categories dispaly

const dispalyCatagorey = (data) =>{
    const catagoreyMenu = document.getElementById('catagorery-menu');
  

    data.forEach(element => {
        
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <li>
                <a class="nav-link " aria-current="page" onclick="singleCatagore(${element.category_id})">${element.category_name}</a>
            </li>
        `
        catagoreyMenu.appendChild(li);
    });

}

// single catagorey id

const singleCatagore = (categoryId)=> {
    
    const singleCatagoreUrl = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`;
    fetch(singleCatagoreUrl)
    .then(res => res.json())
    .then(data => singleCatagoreDispaly(data.data))
   
    
}

// singleCatagore Dispaly

const singleCatagoreDispaly = (data) =>{
    const total = document.getElementById('slecte');
    const totalNumber = data.length
    if (totalNumber != 0) {
        total.innerText= totalNumber + ' Total News'
    }else{
        total.innerText = ' Not found Data'
    }

 
    const singleCatagoryId = document.getElementById('single-catagory');
    singleCatagoryId.innerHTML = ' ';

    data.forEach(element => {
        console.log(element);
        const {thumbnail_url, title, details,author,total_view} = element
       
        const {img, name, published_date} = author

   

        const div = document.createElement('div');
        div.classList.add('row', 'bg-cat', 'align-items-center','mb-4');
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
                            <button onclick="dispalymodal('${title}')"><i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
        `
        
        singleCatagoryId.appendChild(div);
    });

}

const dispalymodal = (details) =>{
    console.log(details);
}



catagoreyUrl();