import express from 'express';
import Car from '../models/carSchema.mjs'
const router = express.Router()

//create
router.post('/', async(req , res)=>{
    //specify action 
    const newCar = await Car.create(req.body)
    res.json(newCar)
})

//read
router.get('/', async(req , res)=>{
    //specify action 
    const allCar = await Car.find(req.body)
    res.json(allCar)
})

//update
router.put('/:id', async(req , res)=>{
    //specify action 
    const editCar = await Car.findByIdAndUpdate(req.params.id,req.body,{new: true})
    res.json(editCar)
})


//delete

router.post('/:id', async(req , res)=>{
    //specify action 
    const deleteCar = await Car.create(req.body)
    res.json(deleteCar)
})



export default router;