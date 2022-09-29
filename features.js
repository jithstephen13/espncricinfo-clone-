let page=1
let res;
let getData=async()=>{
    res=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=20&page=${page}&apiKey=b9454b681f23465b843e586f2f2255de`)
    res=await res.json();
    console.log(res)
    appendData(res.articles)
}

getData()

let appendData=(data)=>{
    let container=document.getElementById("container")
    container.innerHTML=null
    data.forEach(function (elem,index){
        if(elem.urlToImage!=null){
            
        
        let div=document.createElement("div")
        div.setAttribute("class","card")
        let p1=document.createElement("img")
        p1.src=elem.urlToImage;
        let t1=document.createElement("div")
        t1.setAttribute("class","pic")
        let p2=document.createElement("h4")
        p2.innerText=elem.title;
        let p3=document.createElement("p")
        p3.innerText=elem.description;
        let d1=document.createElement("div")
        d1.setAttribute("class","para")
        t1.append(p1)
        d1.append(p2,p3)
        div.append(t1,d1)
        container.append(div)
        }
    })
}

let previous=()=>{
    if(page==1){
        return
    }
    page--
    getData() 
}

let next=()=>{
    page++
    getData()
}

/*.card>img{
    width: 300px;
    height: 100%;
    border-radius: 10px;
}*/