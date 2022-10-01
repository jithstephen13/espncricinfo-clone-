

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
        
            
        
        let div=document.createElement("div")
        div.setAttribute("class","card")
        let p1=document.createElement("iframe")
        p1.src=elem.url;
        
        div.append(p1)
        container.append(div)
        
    })
}