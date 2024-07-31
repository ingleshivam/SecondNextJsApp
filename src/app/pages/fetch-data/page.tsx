
import { sql } from "@vercel/postgres";
import { fetchEmployee } from "@/app/lib/data";
import { NextResponse } from "next/server";

export default async function Page(){
    const fetchEmp = await fetchEmployee();
    return (
        <>
            <div className="flex justify-center">
                <table className="text-center table-auto bg-white border border-white">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className=" py-3 px-2">Employee ID</th>
                            <th className=" py-3 px-2">Employee Name</th>
                            <th className=" py-3 px-2">Employee City</th>
                            <th className=" py-3 px-2">Employee Salary</th>    
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                fetchEmp?.map(
                                    (index) => (
                                        <>

                                        <td className=" py-3 px-2">{index.employeeid}</td>
                                        <td className="py-3 px-2">{index.employeename}</td>
                                        <td>{index.employeecity}</td>
                                        <td>{index.employeesalary}</td  >
                                        </>
                                    )
                                )
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );  
}