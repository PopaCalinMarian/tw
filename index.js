//etapa 4.1
const express = require('express');//import express

const app = express()//creez instanta al obiectului(serverului in cazul asta) express

const port = process.env.port || 8080;

console.log(port);//testez portul

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

