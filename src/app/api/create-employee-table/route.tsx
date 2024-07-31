import { sql } from "@vercel/postgres";
import { error } from "console";
import { NextResponse } from "next/server";


export async function GET(request:Request){
    try{
        const result = await sql `create table Employees (
            EmployeeID bigint,
            EmployeeName varchar(20),
            EmployeeCity varchar(20),
            EmployeeSalary numeric(10,2)
        );`;

        return NextResponse.json({error},{status:200});
    }catch(error){
        return NextResponse.json({error},{status:500})
    }
}