const router = require('express').Router();
router.post('/xml-api/checkavailable.php', (req, res) => {
    res.send(1)
})

router.post('/xml-api/getuserdomains.php', (req, res) => {
res.send('[["ACTIVE","subdomain.example.com"]]')
})

router.post('/xml-api/getdomainuser.php', (req, res) => {
    res.send(`["ACTIVE","subdomain.example.com","\\/home\\/vol15_2\\/example.com\\/hname_12345678\\/htdocs","hname_12345678"]`)
})

module.exports = router
