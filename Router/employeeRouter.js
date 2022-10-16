const express= require("express");
const employeeModules= require("../Module/employeeModule");

const router=express.Router();

router.get("/get",employeeModules.getEmployees)
   
router.post("/create",employeeModules.createEmployees);

router.put("/update/:id",employeeModules.updateEmployees);

router.delete("/delete/:id",employeeModules.deleteEmployees);

module.exports=router;