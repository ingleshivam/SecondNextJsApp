import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { useEffect } from "react";
// import { Employee } from "./definitions";

export async function fetchEmployee(){
    try{
        const fetchEmployee = await sql `select * from Employee;`;
        return fetchEmployee.rows;
    }catch(error){
        console.log("Error Occured !");
    }

}