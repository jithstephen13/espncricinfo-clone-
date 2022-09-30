//  535406d3232541aebbaa0608736333dd
let key="43952ba56a2e4570b47285bb77628cb6"
// 448bb457b22b421b9064cdf0689e842c
//80732b8fea5a4855a6728ee0eee12001

const url="https://newsapi.org/v2/everything?q=cricket&sortBy=popularity&apiKey="


    let getdata=async()=>{
        let res= await fetch(`${url}${key}&pageSize=5`)

        res=await res.json()
        apppenside_bar1(res.articles )

    }
    getdata()


    let apppenside_bar1=(data)=>{

        let container=document.getElementById('right_sidebar')
        container.innerHTML=""
        let box1=document.createElement('div')
        box1.setAttribute('id','right_in1')
        let ttl=document.createElement('h4')
        ttl.innerText="News Headlines"
        let ln=document.createElement('hr')
        box1.append(ttl,ln)
        data.forEach(({title}) => {

            let ns=document.createElement('p')
            ns.innerText="> "+title
            box1.append(ns)
            container.append(box1)

            
        });

    }

    
    let getdata2=async()=>{
        let res= await fetch(`${url}${key}&pageSize=15`)

        res=await res.json()
        apppenside_bar2(res.articles )

    }
    getdata2()


    let apppenside_bar2=(data)=>{

        let container=document.getElementById('right_sidebar')
        let box2=document.createElement('div')
        box2.setAttribute('class','right_in2')
       
        data.forEach(({title,urlToImage}) => {
            let im=document.createElement('img')
            im.src=urlToImage
            let ns=document.createElement('h6')
            ns.innerText=title
            box2.append(im,ns)
            container.append(box2)

            
        });

    }

      
    let getdata3=async()=>{
        let res= await fetch(`${url}${key}&page=2&pageSize=6`)

        res=await res.json()
        apppenside_bar3(res.articles )

    }
    getdata3()

    let apppenside_bar3=(data)=>{
        let container=document.getElementById("Main_container1")
        container.innerHTML=""
        let N1=document.createElement('div')
         N1.setAttribute("class","N1")
        let im1=document.createElement('img')
        im1.src=data[0].urlToImage
        let h1=document.createElement('h3')
        h1.innerText=data[0].title
        N1.append(im1,h1)
        
        
        let N2=document.createElement('div')
        N2.setAttribute('id','N2')
        let N2_1=document.createElement('div')
        let im2=document.createElement('img')
        im2.src=data[1].urlToImage
        N2_1.append(im2)

        let h2=document.createElement('h3')
        h2.innerText=data[1].description
       


        N2.append( N2_1,h2)



        let N3=document.createElement('div')
        N3.innerHTML=""
         N3.setAttribute('id','N3')
         for(let i=2;i<5;i++){
            let bx=document.createElement('div')
            let im1=document.createElement('img')
            im1.src=data[i].urlToImage
            let h1=document.createElement('h5')
            h1.innerText=data[i].title
            bx.append(im1,h1)
            N3.append(bx)
            
         }


        // let N4=document.createElement('div')
        // N1.setAttribute('id','N4')
        container.append(N1,N2,N3)


    }

    let getvdo=async()=>{

   
    //let API_key='AIzaSyBdCatVit3HGi73SsyJLiX14t7v7orur1A'AIzaSyBOEF0LDn-V7Drakrg_WCuci1_id2m067k
    let API_key='AIzaSyCtzHGe1Xc6YVtsvMQL0ta3jeuFE7cVVvg'

    let res= await fetch(`https://www.googleapis.com/youtube/v3/search?q=icc cricket&key=${API_key}&part=snippet&maxResults=20&chart=mostPopular&regionCode=IN`)
             let {items}=await res.json()
        let data=items
        appendfun(data) 
        appendvdo(data)        
      
 }
// getvdo()

 
let appendfun=(data)=>{
    let container=document.getElementById('Main_container1')
    let h1=document.createElement('h3')
    h1.innerText="Must Watch"
    container.append(h1)
    let box=document.createElement('div')
    box.setAttribute("class",'vddiv')
    

    let i=0
    data.forEach(({snippet :{title,thumbnails},id:{videoId}}) => {

        if(i<3){
            let div=document.createElement('div')
        let imag=document.createElement('img')
        imag.src=thumbnails.high.url
        let name=document.createElement('h4')
        name.innerText=title
        div.append(imag,name)
        let obj={
            nam:title,
            vid:videoId
        }
        div.onclick=()=>{
        localStorage.setItem("click_itm",JSON.stringify(obj))
        location.href = "click.html";
        }
        box.append(div);
        container.append(box)
        i++
    }
        
    });
    console.log(data)
}


let getvdo2=async()=>{

   
  //  let API_key='AIzaSyBdCatVit3HGi73SsyJLiX14t7v7orur1A''AIzaSyBOEF0LDn-V7Drakrg_WCuci1_id2m067k'
  let API_key='AIzaSyCtzHGe1Xc6YVtsvMQL0ta3jeuFE7cVVvg'
    
let res= await fetch(`https://www.googleapis.com/youtube/v3/search?q=icc cricket&key=${API_key}&part=snippet&maxResults=20&chart=mostPopular&regionCode=IN`)
             let {items}=await res.json()
        let data=items
        appendvdo(data)       
 }
 getvdo2()

 let appendvdo=(data)=>{
    console.log(data[4] )
    let container=document.getElementById('Main_container1')
    let div=document.createElement('div')
    let imag=document.createElement('img')
    imag.src=data[4].snippet.thumbnails.high.url
    let name=document.createElement('h4')
    name.innerText=data[4].snippet.description

    div.append(imag,name)
    let obj={
        nam:data[4].snippet.description,
        vid:data[4].snippet.videoId
    }
    name.onclick=()=>{
    localStorage.setItem("click_itm",JSON.stringify(obj))
    location.href = "click.html";
    }
    
   
    container.append(div)
    
}

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3118dd2d14mshdfad9c2fabf2770p18b735jsn7300e71c05f8',
// 		'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
// 	}
// };


// fetch('https://cricket-live-data.p.rapidapi.com/results', options)
	// .thn(eresponse => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

    const url1="https://apii.ap-cricket.com/cricket/?method=get_leagues&APIkey="
    const url2="https://apiv2.api-cricket.com/?method=get_livescore&APIkey="

let getlivsr=async()=>{
 let res=await fetch(`${url2}af640d3ab47e3bbdad6344e4f9e2fd540d68e1756dbeb949638546065d37733e`)
 res=await res.json()
 console.log(res)
 appendlivescoer(res.result)
 appendliv_navbar(res.result)

}
// event_away_team_logo    event_away_team   

getlivsr()

let appendlivescoer=(data)=>{

    let container=document.getElementById('Main_container3')
    let div=document.createElement('div')
    div.setAttribute("class","div10")
    div.innerHTML=""
    let i=0
    data.forEach(({event_away_final_result,
        event_away_team,
        event_away_team_logo,
        event_home_final_result,
        event_home_team,
        league_name,
        event_stadium,
        event_home_team_logo
        }) => {
       if( i<2){
        let div1=document.createElement('div')
        let lege_div=document.createElement('div')
        lege_div.setAttribute('id',"lege_div")
        
        let lname=document.createElement('h4')
        lname.innerText=league_name
        
        let st=document.createElement('p')
        st.innerText=event_stadium

        lege_div.append(lname,st)

        



        let team_div=document.createElement('div')
        team_div.setAttribute('id','tem_div')

        let home_div=document.createElement('div')
        let h_log=document.createElement('img')
        h_log.src=event_home_team_logo
        let h_name=document.createElement('p')
        h_name.innerText=event_home_team
        let h_score=document.createElement('p')
        h_score.innerText=event_home_final_result
        home_div.append(h_log,h_name,h_score)




        let away_div=document.createElement('div')
        let a_log=document.createElement('img')
        a_log.src=event_away_team_logo
        let a_name=document.createElement('p')
        a_name.innerText=event_away_team
        let a_score=document.createElement('p')
        a_score.innerText=event_away_final_result

        away_div.append(a_log,a_name,a_score)

        team_div.append(home_div,away_div)
        


       
        

        div1.append(lege_div,team_div)
        div.append(div1)
        container.append(div)

      
     
       }
       i++
        
    });
}
 
let getdata4 =async()=>{
    let res= await fetch(`${url}${key}&page=2&pageSize=15`)

    res=await res.json()
    apppenside_bar5(res.articles )

}
getdata4()

let apppenside_bar5=(data)=>{
    let container=document.getElementById('Main_container2')
    container.innerHTML=""
    data.forEach(({title,urlToImage}) => {

        let N11=document.createElement('div')
        N11.setAttribute("id","boxnews")
       let im1=document.createElement('img')
       im1.src=urlToImage
       let h1=document.createElement('h3')
       h1.innerText=title
       N11.append(im1,h1)
       container.append(N11)
        
    });
 
}

let appendliv_navbar=(data)=>{
    let container=document.getElementById('upnav_contnt')
    container.innerHTML=""
    let i=0
    data.forEach(({event_away_final_result,
        event_away_team,
        event_away_team_logo,
        event_home_final_result,
        event_home_team,
        league_name,
        event_stadium,
        event_home_team_logo}) => {
           if(i<4){
            let box=document.createElement('div')
            box.setAttribute("class","Navbox1")

            let ti=document.createElement('p')
            ti.innerText=league_name

            let box2=document.createElement('div')
            box2.setAttribute("class","Navbox2")

            let box3=document.createElement('div')
            box3.setAttribute("class","Nav_homdiv")

            let t1_name=document.createElement('p')
            t1_name.innerText=event_home_team
            let t1_scor=document.createElement('p')
            t1_scor.innerText=event_home_final_result

            box3.append(t1_name,t1_scor)

            let box4=document.createElement('div')
            box4.setAttribute("class","Nav_awaydiv")

            let t2_name=document.createElement('p')
            t2_name.innerText=event_away_team
            let t2_scor=document.createElement('p')
            t2_scor.innerText=event_away_final_result

            box4.append(t2_name,t2_scor)

            box2.append(box3,box4)
            let hr=document.createElement('hr')
            box.append(ti,box2,hr)
            container.append(box)
           }
        i++
    });
}
 


    





