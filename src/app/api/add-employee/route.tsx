
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const employeeID = searchParams.get("employeeID");
    // const employeeName = searchParams.get("employeeName");
    // const employeeCity = searchParams.get("employeeCity");
    // const employeeSalary = searchParams.get("employeeSalary");

    console.log(employeeID);

    // try{
    //     if(!employeeName || !employeeCity || !employeeSalary) throw new Error("Please enter valid details");
    //     await sql `insert into Employee values (${employeeID},${employeeName},${employeeCity},${employeeSalary});`;

    // }catch(error){
    //     return NextResponse.json({error},{status:500})
    // }

    // const Employees  = await sql `select * from Employee;`;
    // return NextResponse.json({Employees},{status:200});
}