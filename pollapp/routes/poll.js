const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '465774',
    key: 'd020bd434e7613ad44ce',
    secret: '24adba827373413120d2',
    cluster: 'ap2',
    encrypted: true
  });


router.get('/', (req, res) =>{
    res.send('poll');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os:req.body.os
      });
    return res.json({sucess:true, message: 'thank you for voting'});
});

module.exports = router;