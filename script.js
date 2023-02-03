// import fetch from 'node-fetch';
/* api url: https:http://api.alquran.cloud/v1/ayah/{{reference}}/{{edition}}
reference will be Quran ayah that will be generated randomly below 
*/
let quotes = [
    "Rabbana taqabbal minna innaka antas Sameeaul Aleem. Our Lord! Accept (this service) from us: For Thou art the All-Hearing, the All-knowing. Surah Al-Baqarah - 2:127",
    "Rabbana wa-j'alna Muslimayni laka wa min Dhurriyatina 'Ummatan Muslimatan laka wa 'Arina Manasikana wa tub 'alayna 'innaka 'antat-Tawwabu-Raheem. Our Lord! Make of us Muslims, bowing to Thy (Will), and of our progeny a people Muslim, bowing to Thy (will); and show us our place for the celebration of (due) rites; and turn unto us (in Mercy); for Thou art the Oft-Returning, Most Merciful. Surah Al-Baqarah - 2:128",
    "Rabbanaaa Aatinaa Fiddunyaa H’asanata Wa Fil Aakhirati H’asanata Wa Qinaa A’d’aaban Naar. Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire! Surah Al-Baqarah - 2:20",
    "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin. Our Lord! Bestow on us endurance, make our foothold sure, and give us help against the disbelieving folk. Al-Baqarah - 2:250"
    
]

// const apiUrl = 'https://api.alquran.cloud/v1/ayah/rndNumber';
/* not doing api call here because fetch is not available on node-fetch for some reason*/

// defining async function for quote//

function newQuote() {
    // generate random number//
    let rndNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[rndNumber];
}






