

let appendfun=()=>{
    let data =JSON.parse(localStorage.getItem("click_itm"))||[]
    console.log(data)
 
        let container=document.getElementById('container14')
        let div=document.createElement('div')
      
        
        let iframe=document.createElement('iframe')
        iframe.src=`https://www.youtube.com/embed/${data.vid}`
        iframe.width='100%';
        iframe.allow='fullscreen';
        iframe.height='500px';
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


let key="43952ba56a2e4570b47285bb77628cb6"
// 448bb457b22b421b9064cdf0689e842c
//80732b8fea5a4855a6728ee0eee12001

const url="https://newsapi.org/v2/everything?q=cricket&sortBy=popularity&apiKey="
    let getdata2=async()=>{
        let res= await fetch(`${url}${key}&pageSize=8`)

        res=await res.json()
        apppenside_bar2(res.articles )

    }
    getdata2()


    let apppenside_bar2=(data)=>{

        let container=document.getElementById('right_sidebar')
        let box2=document.createElement('div')
        box2.setAttribute('class','right_in2')
       
        data.forEach(({title,urlToImage}) => {
            let im=document.createElement("img")
            im.src=urlToImage
            let ns=document.createElement('h6')
            ns.innerText=title
            box2.append(im,ns)
            container.append(box2)

            
        });

    }

    