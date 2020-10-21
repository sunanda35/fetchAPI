const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const names = [
    {name: 'sunanda', age: '21'},
    {name: 'debajyoti', age: '22'},
    {name: 'ashis', age: 69, work: 'baap k paise udata hai', reading: 'So rediculas, he is chutia :)', work2: 'stocking karna, chutia har time stocking karta hai, har jaga'}
]

app.get('/', (req, res)=>{
    res.send('Hi, how are you. It\s normally data fetch site. go: /api/sunanda<br>If your name available with this list, search on parms: /api/{your name}');
})

app.get('/:name', (req, res)=>{
   const name = names.find(url => url.name===parseInt(req.params.name));
   if(!name) res.status(404).send('Sorry, no data found.<br><br>Also know about our developer with params: /sunanda')
   else res.send(names[0])
});
api/

app.listen(PORT, ()=> console.log(`I'm listining you on ${PORT}`))