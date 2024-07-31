import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request:Request){
    const result = await sql `select * from Employee;`;
    return NextResponse.json({result},{status:200})
}



