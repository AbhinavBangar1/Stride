import express from 'express';
import supabase from '../db/db';

const router = express.Router();

router.get('/' , async(req , res) => {
    const user = req.user.id ;
    try{
        const {data , error} = await supabase.from('todo').select('*').eq('user' , user) ;
        if(error){
            return res.status(500).json({error :error.message})
        }
        if (!data || data.length === 0){
            return res.status(404).json({message :  "No Todos Found"});
        }
        return res.status(200).json(data) ;
    }catch(err){
        res.status(500).json({error : err.message}) ;
    }
});

router.get('/:id' , async(req , res) => {
    
});

export default router ;