const fortunes = [{id:1,fortune:"You will make your Mamma proud today"},{id:2,fortune:"Give your Dama a Llama and everything will turn out"},{id:3,fortune:"Give up on not trying to try"},{id:4,fortune:"You will have a good day today"},{id:5,fortune:"You will have a bad day today"}]
const baseId = 6

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune:(req,res)=>{
       
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },
    addFortune:(req,res)=>{
        console.log(req.body)
        let {newFortune} = req.body
        fortunes.push({id:baseId, fortune:newFortune})
        baseId++
        console.log(fortunes)
        res.status(200).send(fortunes)
    }


}