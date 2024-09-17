import User from "@/models/User";
import connectMongo from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  await connectMongo();

  try {
    const user = await User.create(data);
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return NextResponse.json({ success: false, message: 'Erro ao registrar' }, { status: 400 });
  }
}
