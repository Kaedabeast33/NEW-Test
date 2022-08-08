const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const body= document.querySelector("body")
const newFortune = document.querySelector("#fortuneId")

const newFortuneButton = document.getElementById("buttonId")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () =>{
    axios.get("http://localhost:4000/api/fortune/").then(res =>{
        console.log("hello")
        const data = res.data;
        alert(data)
    })
}
const addFortune = (body)=>{
    axios.post("http://localhost:4000/api/fortune/",body)
    .then(res=>{
        console.log(res.data)
        
    }).catch(err=>{
        console.log("oooppps")
        console.log(err)
    }
    ) 
}
formFortune.addEventListener("submit",addFortune)


// newFortuneButton.addEventListener("click",formInput)
fortuneBtn.addEventListener("click", getFortune)
complimentBtn.addEventListener('click', getCompliment)

function formInput (e){
    e.preventDefault()

let newFortuneValue = {Fortune:newFortune.value}
console.log(newFortuneValue)
addFortune(newFortuneValue)

}