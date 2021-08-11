const gitBtn = document.querySelector('#btnSwc');
const gitOutput = document.querySelector('#git-output');
const newImage = document.querySelector('#image');

const getApi = () =>{
    let results;
    
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(res => res.json())
    .then(data => 
    {        
            let img = document.createElement('img');            
            img.id = 'image';
            img.src = data.cards[0].image;

            let output = document.getElementById('image');
            console.log(output);
            if(output !== null){
               output.parentNode.removeChild(output);  //Tar bort existerande bild                         
            }            
            let testOuput = document.getElementById('git-output').appendChild(img); 
    })
    .catch(err => console.log(err))
}
gitBtn.addEventListener('click', getApi);