let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business model
let Business = require('../models/business');

module.exports.displayBusinessList = (req,res,next) => {
    Business.find((err,BusinessList) =>{
       if (err)
       {
           return console.error(err);

       }

       else{
         
          res.render('business/list', {title: 'Business List', BusinessList: BusinessList});
       }
    }
    );
}

module.exports.displayAddPage= (req,res, next) => {

    res.render('business/add', {title: 'Add Business Contact'});
 
}

module.exports.processAddPage= (req,res, next) => {

    let newBusiness = Business({
    
       "name": req.body.name,
       "contact":req.body.contact,
       "email":req.body.email,
    });
       Business.create(newBusiness,(err, Book) =>{
          if(err)
          {
             console.log(err);
             res.end(err);
          }
    
          else{
             res.redirect('/business-list');
          }
       });
}

module.exports.displayEditPage = (req,res, next) => {

    let id = req.params.id;

    Business.findById(id,(err, businesstoEdit) =>{
      if (err)
      {
         console.log(err);
         res.end(err);
      }

      else{
         res.render('business/edit', {title: 'Edit business', Business: businesstoEdit})
      }

    })
   
}

module.exports.processEditPage = (req,res, next) => {

    let id = req.params.id;
    
    let updatedBusiness = Business({
        "_id":id,
       "name": req.body.name,
       "contact":req.body.contact,
       "email":req.body.email,
    
    });
    
       Business.updateOne({_id: id}, updatedBusiness, (err) =>{
          if(err)
          {
             console.log(err);
             res.end(err);
          }
         else{
           res.redirect('/business-list');
    
         }
    
       });
       
}

module.exports.performDelete =(req,res, next) => {

    let id = req.params.id;
 
    Business.remove({_id: id}, (err) =>{
 
       if(err)
       {
          console.log(err);
          res.end(err);
       }
      else{
        res.redirect('/business-list');
 
      }
 
    });
 
    
 }