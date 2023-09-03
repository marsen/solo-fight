import express, { Router } from 'express';

const router: Router = express.Router();
type HealthRes = { 
  status: "OK"|"Error";
  version:string
}
router.use("/",(req,res)=>{
  const result: HealthRes = { status: "OK", version: "beta" };
  res.status(200).json(result)
})

export default router;