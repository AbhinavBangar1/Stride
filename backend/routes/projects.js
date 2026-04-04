import express from 'express' ;
import supabase from './db/db.js' ;

const router = express.Router() ;

router.get('/' , async (req,res) => {
    const user = req.user.id ;
    try{
        const {data , error} = await supabase.from('projects').select('*').eq('user' , user) ;
        if (error){
            return res.status(500).json({error : error.message});
        }
        if (data.length === 0 || !data){
            return res.status(404).json("No Projects found");
        }
        return res.status(200).json(data) ;

    }catch(error){
        return res.status(500).json({error : error.message})
    }
});


export default router ;