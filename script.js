/* Need to get a random num */
function generateRandomNum(num) {
    return Math.floor(Math.random() * num);
};

const demonWishes = {
    
    demonName: ['lilith', 'nukpana', 'cináed', 'malakor'],

    backstory: ['born from rage', 'slave to the dark/void',
        'i do not come from a place that measures time, we always are',
        'i am the manifestation of the screams of those who have been murdered'],
    

    wish: ['to feel human emotions', 'for those who believe in god, know that he is the true devil',
        'save the souls of those my friends have possessed',
        'be the most powerful of all']
}

/* Storing demon wishes into an array */
let wishes = [];

/* Iterating through the factory */
for (let obj in demonWishes) {
    let index = generateRandomNum(demonWishes[obj].length);
    wishes.push(demonWishes[obj][index]);
}

//console.log(demonWishes)

console.log(wishes)