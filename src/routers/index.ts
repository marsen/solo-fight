import express, { Router } from 'express';

const router: Router = express.Router();

router.use("/",(req,res)=>{
  const result: HealthRes = { status: "Error", version: "beta.230903.3" };
  res.status(200).json(result)
})

type HealthRes = { 
  status: "OK"|"Error";
  version:string
}

export default router;