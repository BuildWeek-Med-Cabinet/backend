const express = require('express')

const Strains = require('./strain-model')
const authentication = require('../middleware/restricted-middleware')


const router = express.Router()

router.get('/', authentication, async (req, res) => {

    try {
        const results =  await Strains.find()
        console.log(results)
        if (results) { return res.status(200).json(results)}
        else {  
         res.status(404).json({ message: '0 results' })
        }
    } catch(e) {
        res.status(500).json({ message: 'There was an a request error' })
    }
})

router.post('/', authentication, async (req, res) => {
    const newStrain = req.body
    try {
        const newMarijuana = await Strains.add(newStrain)
        if(newMarijuana) { 
            res.status(200).json(newMarijuana)
        } else {
            res.status(404).json({message: 'Invalid Request'})
        }
    } catch(e) {
        res.status(500).json({ message: 'There was a request error' })
    }
})

router.delete('/:id', authentication, async (req, res) => {
    const cannabis_id = req.params.id
    const user_id = req.decodedToken.id
    try {
        const remove = await Strains.remove(cannabis_id, user_id)
        if (remove > 0) { return res.status(200).json({ message: 'Strain has been removed successfully' })}
        res.status(404).json({ message: 'Strain not found' })
    } catch(e) {
        res.status(500).json({ message: 'There was a request error' })
    }
})

module.exports = router