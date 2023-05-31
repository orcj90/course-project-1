let countryData = 0
let code
async function getCountry(){
    let name_person = document.getElementById("name").value;
    try {
        const request = await fetch(`https://api.nationalize.io?name=${name_person}`)
        const data = await request.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup() {
     countryData = await getCountry()
     const tbody = document.querySelector("tbody")
     str = JSON.stringify(countryData);
     str = JSON.stringify(countryData, null, 4);
     console.log(str);
     let i = 0
     for (i = 0; i<countryData.country.length; i++) {
         code = JSON.stringify(countryData.country[i]);
         code = code.substring(15,17)
         probability= JSON.stringify(countryData.country[i]);
         probability = probability.substring(33,38)
         const trTmpl = `
         <tr>
         <td scope="col">${JSON.stringify(countryData.country[i])}</td>
         <td scope="col">${code}</td>
         <td scope="col"><img src="https://flagsapi.com/`+code+`/flat/48.png"></td>
         <td scope="col">${probability}</td>
         </tr>`
         tbody.innerHTML+=trTmpl
         console.log(code)
         console.log(probability)
}
}

function btn(){
   return setup()  
}