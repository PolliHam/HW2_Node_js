const express = require('express');
const bodyParser= require('body-parser');

const User = require('./classes/es6').User;

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;

const app = express();
const url = 'mongodb+srv://user:1111@cluster0-gmvft.mongodb.net/test?retryWrites=true&w=majority';
let db;

app.use(bodyParser.json())
app.use(express.static('public'))

MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err);
    db = client.db('hw2');
    app.listen(3000, function() {
        console.log('Server connected to MongoDB and listening on 3000.')
      })
})

app.route('/workers/:id')
        .get((req, res) => {
            let {id} = req.params;
            console.log(id);
            db.collection('workers').aggregate([
                { "$match": { "_id": ObjectID(id)} },
                { $lookup:
                   {
                     from: 'users',
                     localField: 'userId',
                     foreignField: '_id',
                     as: 'userdetails'
                   }
                 }
                ]).toArray(function(err, result) {  
                    if (err) throw err;
                    res.send(result)
                });
                
        })

        .put((req, res) => {
            let {id} = req.params;
            let position = {position : req.body.position};
            db.collection('workers').findOne({_id: ObjectID(id)}, (err, worker) => {
                db.collection('workers').updateOne({_id:ObjectID(id)}, {$set: position},(err, result) => {
                    if (err) return console.log(err);
                    db.collection('users').updateOne({_id: worker.userId}, {$set:{
                        name: req.body.name,
                        age : req.body.age,
                        gender: req.body.gender,
                        email: req.body.email}}, (err, result) => {
                        if (err) return console.log(err);
                        res.send(result);                
                    })
                })
            })
            
        })
        
        .delete((req, res) => {
            let {id} = req.params;
            db.collection('workers').deleteOne({_id: ObjectID(id)}, (err, result) => {
                if (err) return console.log(err);
                res.send(result);
            })
        });


app.route('/workers')
        .get((req, res) => {
            db.collection('workers').aggregate([
                { $lookup:
                   {
                     from: 'users',
                     localField: 'userId',
                     foreignField: '_id',
                     as: 'userdetails'
                   }
                 }
                ]).toArray(function(err, result) {
                    if (err) throw err;
                    res.send(result)
                });
        })

        .post((req, res) => {
            let { name, age, gender, email, position }= req.body;
            let user = new User(name, age, gender, email,);

            db.collection('users').insertOne(user, (err, result) => {
                if (err) return console.log(err);
                db.collection('workers').insertOne({userId:result.insertedId, position:position}, 
                    (err, result) => {
                    if (err) return console.log(err);
                    res.send(result);
                })
            })
        });

