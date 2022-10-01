
// news api key 
let key="448bb457b22b421b9064cdf0689e842c"
// 448bb457b22b421b9064cdf0689e842c  43952ba56a2e4570b47285bb77628cb6
//80732b8fea5a4855a6728ee0eee12001

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today =yyyy+'-'+mm+'-'+(+dd) ;

let next=yyyy+'-'+mm+'-'+(+dd)


console.log(today);
let getlive_data1=async()=>{
    let res=await fetch(`https://api.api-cricket.com/cricket/?method=get_events&APIkey=af640d3ab47e3bbdad6344e4f9e2fd540d68e1756dbeb949638546065d37733e&date_start=2019-07-24&date_stop=2019-07-24`)
       res=await res.json()
       appendlivescoer12(res.result)
       console.log(res.result)
}
getlive_data1()

let getlive_data=async()=>{
    let res=await fetch(`https://apiv2.api-cricket.com/cricket/?method=get_events&APIkey=af640d3ab47e3bbdad6344e4f9e2fd540d68e1756dbeb949638546065d37733e&date_start=${today}&date_stop=${next}`)
       res=await res.json()
       appendlivescoer(res.result)
       appendlivescoer1(res.result)
       console.log(res.result)
}
getlive_data()



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

    
let appendlivescoer=(data)=>{

    let container=document.getElementById('live_div')
    let div=document.createElement('div')
    div.setAttribute("class","div10")
    div.innerHTML=""
    let i=0
    data.forEach(({event_away_final_result,
        event_away_team,
        // event_away_team_logo,
        event_home_final_result,
        event_home_team,
        league_name,
        event_stadium,
        // event_home_team_logo
        }) => {
    
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
        // let h_log=document.createElement('img')
        // h_log.src=event_home_team_logo
        let h_name=document.createElement('p')
        h_name.innerText=event_home_team
        let h_score=document.createElement('p')
        h_score.innerText=event_home_final_result
        home_div.append(h_name,h_score)




        let away_div=document.createElement('div')
        // let a_log=document.createElement('img')
        // a_log.src=event_away_team_logo
        let a_name=document.createElement('p')
        a_name.innerText=event_away_team
        let a_score=document.createElement('p')
        a_score.innerText=event_away_final_result

        away_div.append(a_name,a_score)

        team_div.append(home_div,away_div)
        


       
        

        div1.append(lege_div,team_div)
        div.append(div1)
        container.append(div)

      
     
       
    
        
    });
}


   
let appendlivescoer1=(data)=>{

    let container=document.getElementById('fixtr_div')
    let div=document.createElement('div')
    div.setAttribute("class","div10")
    div.innerHTML=""
    let i=0
    data.forEach(({event_away_final_result,
        event_away_team,
        
        event_home_team,
        league_name,
        event_stadium,
        event_date_start
        }) => {
    
        let div1=document.createElement('div')
        let lege_div=document.createElement('div')
        lege_div.setAttribute('id',"lege_div")
        
        let lname=document.createElement('h4')
        lname.innerText=league_name
        
        let st=document.createElement('p')
        st.innerText="Venue :"+event_stadium
         ldate=document.createElement('h4')
         ldate.innerText=event_date_start
        lege_div.append(lname,st,ldate)

    
        let team_div=document.createElement('div')
        team_div.setAttribute('id','tem_div1')

        let home_div=document.createElement('div')
        
        let h_name=document.createElement('p')
        h_name.innerText=event_home_team
        
        home_div.append(h_name)

        let away_div=document.createElement('div')
        
        let a_name=document.createElement('p')
        a_name.innerText=event_away_team
        let a_score=document.createElement('p')
        a_score.innerText=event_away_final_result

        away_div.append(a_name)

        team_div.append(home_div,away_div)
        

        div1.append(lege_div,team_div)
        div.append(div1)
        container.append(div)
        
    });
}

  
let appendlivescoer12=(data)=>{

    let container=document.getElementById('Result_div')
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
    
        let div1=document.createElement('div')
        div1.setAttribute('id',"div125")
        let lege_div=document.createElement('div')
        lege_div.setAttribute('id',"lege_div")
        
        let lname=document.createElement('h4')
        lname.innerText=league_name
        
        let st=document.createElement('p')
        st.innerText=""

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

    });
}

window.onload=()=>{
    document.getElementById('Live').addEventListener("click",()=>{
        document.getElementById('fixtr_div').style.display="none"
        document.getElementById('Result_div').style.display="none"
        document.getElementById('live_div').style.display="block"
        document.getElementById('Live').style.backgroundColor= "blue"
        document.getElementById('Upcomming').style.backgroundColor=""
        document.getElementById('Result').style.backgroundColor= ""

    })
    document.getElementById('Upcomming').addEventListener("click",()=>{
        document.getElementById('fixtr_div').style.display="block"
        document.getElementById('Result_div').style.display="none"
        document.getElementById('live_div').style.display="none"
        document.getElementById('Upcomming').style.backgroundColor="blue"
        document.getElementById('Live').style.backgroundColor= ""
        document.getElementById('Result').style.backgroundColor= ""

        
    })
    document.getElementById('Result').addEventListener("click",()=>{
        document.getElementById('fixtr_div').style.display="none"
        document.getElementById('Result_div').style.display="block"
        document.getElementById('live_div').style.display="none"
          document.getElementById('main1_container').style.width="100%"
          document.getElementById('Result').style.backgroundColor="blue"
          document.getElementById('Upcomming').style.backgroundColor=""
        document.getElementById('Live').style.backgroundColor= ""

    })


}
