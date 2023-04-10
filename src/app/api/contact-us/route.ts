import { NextResponse } from "next/server";
import { SchemaType } from "../../../components/HomePage/Contact/schemaValidation";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
    responseLimit: "8mb",
  },
  runtime: "edge",
};

export async function POST(req: Request) {
  const body: SchemaType = await req.json();

  console.log(body);

  return NextResponse.json(
    { success: true, message: "success" },
    { status: 200 }
  );
}
