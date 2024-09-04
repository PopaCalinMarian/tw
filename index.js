//etapa 4.1
const express = require('express');//import express
const path = require('path')//setez calea

const app = express()//creez instanta al obiectului(serverului in cazul asta) express

const port = process.env.port || 8080;

console.log(port);//testez portul


//setarea vizualizarii paginii pentru ejs
//app.use(express.static(path.join(__dirname, 'resurse')));//pentru a accesa resurse
app.use(express.static(__dirname + '/resurse'));
app.set('view engine', 'ejs');//aici am avut o problema ca imi aparea doar portalul cu caile, de aceea a trebuit sa configurez ejs aici
app.set('views', path.join(__dirname, 'views'));//pentru a randa paginile de tip ejs din views

//etapa 4.8 apelul get pentru a accessa rutele de lapt pagina prinicpala
app.get(['/','/index', '/home'], (req, res) => {
    res.render('pagini/index', { titlu: 'Pagina principala' });
});

app.get('/:pagina', (req, res) => {
    const pagina = req.params.pagina; // instanta al titlui paginii cerut
    res.render(`pagini/${pagina}`, { titlu: pagina}, (err) => {
        if(err)
        {
            //intai setam eroare de tip 404, apoi randam faptul ca pagina nu exista
            res.status(404).render('pagini/404', {titlu: 'Pagina nu a fost gasita'});
        }
    });
});


app.listen(port, () => {
    console.log(`Serverul asculta la adresa https:localhost:${port}`);
});//aici testez serverul


//etapa 4.2
function afiseazaFolder()
{
    console.log("Calea folderului index.js este:", __dirname);
}

function afiseazaCaleCompleta()
{
    console.log("Calea completa al index.js este:", __filename);
}

function afiseazaFolderCurent()
{
    console.log("Folderul curent in lucru:", process.cwd());
    console.log("process.cwd reprezeinta folderul din care am deschis CLI-ul, care nu e acelasi cu folderul in din care e deschis");
}

afiseazaFolder(); afiseazaCaleCompleta(); afiseazaFolderCurent(); // aici testez caile cerut

//etapa 4.3

