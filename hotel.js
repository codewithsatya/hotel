const express=require('express')
const app=express()
app.set('view-engine','ejs')
app.get('/',function(req,res){
    res.render('index.ejs')
    })
// contact
app.get('/contact',function(req,res){
res.render('contact.ejs')
})
//hotels
app.get('/hotels',function(req,res){
res.render('hotel.ejs')
})
//about
app.get('/about',function(req,res){
res.render('about.ejs')
})
app.get('/gallery',function(req,res){
    res.render('gallery.ejs')
    })
app.listen(7000,function(){
    console.log('hello')
})


