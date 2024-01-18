import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return Response.json({ nombre: 'Sergio' })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log(body) // Aquí puedes ver el cuerpo de la solicitud
  return new NextResponse(JSON.stringify(body))
}
