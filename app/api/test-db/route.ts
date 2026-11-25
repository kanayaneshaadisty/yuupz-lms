import { connectDB } from "../../lib/mongodb";
import {NextResponse} from "next/server";


export async function GET(){
    try{
        await connectDB();

        return NextResponse.json({
            succes: true,
            message: "MONGODB berhasil terhubung",
        });
    }catch (error){
        
    }
}