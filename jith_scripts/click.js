

let appendfun=()=>{
    let data =JSON.parse(localStorage.getItem("click_itm"))||[]
    console.log(data)
 
        let container=document.getElementById('container')
        let div=document.createElement('div')
      
        
        let iframe=document.createElement('iframe')
        iframe.src=`https://www.youtube.com/embed/${data.vid}`
        iframe.width='100%';
        iframe.allow='fullscreen';
        iframe.height='400px';
        let name=document.createElement('h4')
        name.innerText=data.nam
        div.append(iframe,name)


        
        container.append(div);
        
    
}
appendfun()

window.onbeforeunload =()=>{
    let data =JSON.parse(localStorage.getItem("click_itm"))||[]
    localStorage.clear(data)
    localStorage.setItem("click_itm",JSON.stringify(data)) 
}