
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
        console.log(element);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <li>
                <a class="nav-link " aria-current="page" href="#">${element.category_name}</a>
            </li>
        `
        catagoreyMenu.appendChild(li);
    });

}

catagoreyUrl();