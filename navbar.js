let search=document.getElementById("search").value
let getData=async()=>{
    let res=await fetch(`https://api.cricapi.com/v1/players?apikey=756e1d1c-197a-42a9-9615-007c0563d6d7&offset=0&search=${search}`)
    res=await res.json()
    console.log(res)
}

