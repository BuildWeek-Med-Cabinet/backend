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
    const { id } = req.params
    
    await Strains.remove(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'Could not find Strain with given id'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'There was a request error'})
    })
})
    
router.put('/:id', authentication, async (req, res) => {
    const { id } = req.params
    const changes = req.body

    await Strains.findById(id)
    .then(change => {
        if (change) {
            Strains.update(changes, id)
            .then(updatedStrain => {
                res.json(updatedStrain)
            })
        } else {
            res.status(404).json({message: 'Could not find strain with given id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to update strain'})
    })
})

module.exports = router