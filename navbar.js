let search=document.getElementById("search").value
let getData=async()=>{
    let res=await fetch(`https://api.cricapi.com/v1/players?apikey=535406d3232541aebbaa0608736333dd&offset=0&search=${search}`)
    res=await res.json()
    console.log(res)
}

