const express = require('express')
const morgan = require('morgan')
const request = require('request');
const app = express()
const https = require('https');
const http = require("http");
const beautify = require('simply-beautiful');
var converter = require('number-to-words');
const meta = require('./meta');


app.set('view engine','ejs')

app.listen(3000)
app.use(express.static('public'))
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home',
        meta: meta.standart
    })
})

app.get('/html-beautify',(req,res)=>{
    res.render('htmlbeatufiy',{
        title:'HTML Formatter',
        meta: meta.standart
    })
})

app.get('/javascript-beautify',(req,res)=>{
    res.render('jsbeautify',{
        title:'JS Formatter',
        meta: meta.standart
    })
})

app.get('/json-beautify',(req,res)=>{
    res.render('jsonbeautify',{
        title:'JSON Formatter',
        meta: meta.standart
    })
})
app.get('/json-minifier',(req,res)=>{
    res.render('jsonminifier',{
        title:'JSON Minifier',
        meta: meta.standart
    })
})
app.get('/lua-minifier',(req,res)=>{
    res.render('luamin',{
        title:'Lua Minifier',
        meta: meta.luamin
    })
})
app.get('/html-minifier',(req,res)=>{
    res.render('htmlminifier',{
        title:'HTML Minifier',
        meta: meta.htmlmin
    })
})
app.get('/css-minifier',(req,res)=>{
    res.render('cssminifier',{
        title:'CSS Minifier',
        meta: meta.standart
    })
})
app.get('/sql-minifier',(req,res)=>{
    res.render('sqlminifier',{
        title:'SQL Minifier',
        meta: meta.standart
    })
})
app.get('/xml-minifier',(req,res)=>{
    res.render('xmlminifier',{
        title:'XML Minifier',
        meta: meta.standart
    })
})
app.get('/mirror-online',(req,res)=>{
    res.render('mirroronline',{
        title:'Mirror Online',
        meta: meta.standart
    })
})
app.get('/excel-to-html',(req,res)=>{
    res.render('excel-to-html',{
        title:'Excel to HTML',
        meta: meta.standart
    })
})
app.get('/number-to-words',(req,res)=>{
    res.render('number-to-words',{
        title:'Number to Words',
        meta: meta.standart
    })
})

app.get('/binary-to-decimal',(req,res)=>{
    res.render('binary-to-decimal',{
        title:'Binary to Decimal',
        meta: meta.standart
    })
})
app.get('/decimal-to-binary',(req,res)=>{
    res.render('decimal-to-binary',{
        title:'Binary to Decimal',
        meta: meta.standart
    })
})
app.get('/string-to-hex',(req,res)=>{
    res.render('stringtohex',{
        title:'String to Hex',
        meta: meta.standart
    })
})

app.get('/xml-to-json',(req,res)=>{
    res.render('xml-to-json',{
        title:'XML to JSON',
        meta: meta.standart
    })
})

app.get('/login',(req,res)=>{
    res.render('login',{
        title:'Giriş Yap',
        meta: meta.standart
    })
})

app.use((req,res) =>{
    res.status(404).render('404',{title:'Sayfa Bulunamadı'})
})
//Number to Words


