const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE
router.get ('/', (req, res) => {
    const sqlText = `SELECT * FROM pictures ORDER BY image, description, likes;`;
    pool.query(sqlText)
    .then((result)=>{
        console.log(result)
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})
// PUT Route
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    const galleryId = req.params.id;
    const sqlText = `UPDATE "pictures" SET "likes" = likes+1 WHERE "id"= $1;`;
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    
}); // END PUT Route

// GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

module.exports = router;