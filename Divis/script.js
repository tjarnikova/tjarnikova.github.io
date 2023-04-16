
let quotes=[

            'Básníkovi rádi a rychle odpouštíme neblahý život pro dobré dílo, nikdy však mizerné dílo, byť by býval světcem.',
            'Cítíme, že tajemství existuje a že existuje i zázrak. Další dva výrazy úporně se vzpěčující jakékoli definici a výměru. Definicí čtverce je a2 a krychle a3. Jenže z definic co normální lidé, nezabývající se právě matematikou, musíme vzápětí vystoupit, ne-li odtud prchat.',
            'Inspirace, co to je? Je to od slova inspiro, nadechnout se. Já nerad to slovo frekventuju, ale nemám jiné po ruce. Je to zázrak: mně se to za 43 let básnickému principu stalo pětkrát, nanejvýš šestkrát. Všechny ty stavy si pamatuju, tak pronikavé jsou ty zážitky...',
            'Nedat si ze zásady s ničím práci; simplifikovat notoricky a debilně — podstata fašismu. Absolutní nevědomost, rochnění se v ní, nechtít vědět, že nevím, pýcha na tento stav, konec.',
            'Jen neštěstí nás přivádí k sobě samým.',
            'Každý člověk má všechno. I svého génia, i kolosální tupost, i schopnost rozhořčení, shovívavost i rouhačství a třeba v skrytu nošené ponětí o svatosti, svůj um a zkum a svoje nadání, i lásku k hudbě, i naprostou amúzičnost, i svou radost i své tajné hoře, domnívám se, že co do vloh a výbavy není lidí privilegovaných.',
            'To nevím, ale zato vím, že jsem vynikající český básník.',
            'Považuji za nežádoucí zkrat, dokonce za svého druhu příkoří, aby po umělci zbylo jen a jen dílo a současně nebyl vydán počet i o jeho soukromém utrpení, kterým je nejen vykupoval, ale bez něhož by prostě nebyl ani občanem, ani otcem, doslova nikým.',
            'Talent bez statečnosti je jak dort s polevou z hoven.',
            'Mám na světě jen jediného přítele, totiž sebe sama.',
            'Rozháranost, roztěkanost, nervozita, lehká zranitelnost, vydanost odkudkoli mohou být jen vnějšími podobami vnitřního pnutí a vypětí, maskami vnitřního zahledění, lépe, vytrženosti z věcí, paradoxním avízem soustředěnosti, kázně a píle a de facto nepřetržité vnitřní pracovitosti a sebepřipomínavosti.',

];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">

    <p>${quotes[index]}</p>

   </div>

    `;
    div.innerHTML=quote;
    
}

