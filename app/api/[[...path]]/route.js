import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let cachedClient = null
async function getDb() {
  if (cachedClient) return cachedClient.db(process.env.DB_NAME || 'vyom_academy')
  const client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  cachedClient = client
  return client.db(process.env.DB_NAME || 'vyom_academy')
}

function cors(res) {
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return res
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }))
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/')
  if (path === '' || path === 'health') {
    return cors(NextResponse.json({ ok: true, service: 'Vyom Academy API' }))
  }
  if (path === 'leads') {
    try {
      const db = await getDb()
      const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return cors(NextResponse.json({ leads }))
    } catch (e) {
      return cors(NextResponse.json({ error: e.message }, { status: 500 }))
    }
  }
  return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }))
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    const body = await request.json()
    if (path === 'leads' || path === 'enroll' || path === 'contact') {
      const { name, email, phone, message, source } = body || {}
      if (!name || !email || !phone) {
        return cors(NextResponse.json({ error: 'Name, email and phone are required' }, { status: 400 }))
      }
      const db = await getDb()
      const lead = {
        id: uuidv4(),
        name,
        email,
        phone,
        message: message || '',
        source: source || path,
        createdAt: new Date().toISOString(),
      }
      await db.collection('leads').insertOne(lead)
      return cors(NextResponse.json({ success: true, lead }))
    }
    return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }))
  } catch (e) {
    return cors(NextResponse.json({ error: e.message }, { status: 500 }))
  }
}
