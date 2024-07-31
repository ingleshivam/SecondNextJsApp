import { sql } from '@vercel/postgres';
import { error } from 'console';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function GET(request:Request){
//     try{
//         const result = await sql `create table Employee (
//         EmployeeID bigint constraint PK_Employee primary key identity,
//         EmployeeName varchar(255),
//         EmployeeCity varchar(255),
//         EmployeeSalary decimal (10,2),
//         EmployeeAddress varchar(50)
//         );`;

//         return NextResponse.json({error},{status:200});

//     }catch(error){
//         return NextResponse.json({error},{status:500});
//     }
// }