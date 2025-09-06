import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { getAdminUsers, saveAdminUsers } from "./json-storage"

const JWT_SECRET = process.env.JWT_SECRET || "soliid-admin-secret-2025"

export interface AdminUser {
  id: number
  email: string
  password_hash: string
  created_at: string
  updated_at: string
}

export async function createDefaultAdmin() {
  const users = await getAdminUsers()

  // Check if admin already exists
  const existingAdmin = users.find((user) => user.email === "admin@buildermats.com")

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash("Adbuilder@2025-", 12)
    const newAdmin = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      email: "admin@buildermats.com",
      password_hash: passwordHash,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    users.push(newAdmin)
    await saveAdminUsers(users)
  }
}

export async function verifyAdminCredentials(email: string, password: string): Promise<AdminUser | null> {
  const users = await getAdminUsers()
  const admin = users.find((user) => user.email === email) as AdminUser | undefined

  if (!admin) {
    return null
  }

  const isValid = await bcrypt.compare(password, admin.password_hash)
  return isValid ? admin : null
}

export async function updateAdminPassword(email: string, newPassword: string): Promise<boolean> {
  try {
    const users = await getAdminUsers()
    const adminIndex = users.findIndex((user) => user.email === email)

    if (adminIndex === -1) {
      return false
    }

    const passwordHash = await bcrypt.hash(newPassword, 12)
    users[adminIndex].password_hash = passwordHash
    users[adminIndex].updated_at = new Date().toISOString()

    await saveAdminUsers(users)
    return true
  } catch (error) {
    console.error("Error updating admin password:", error)
    return false
  }
}

export function generateAdminToken(admin: AdminUser): string {
  return jwt.sign(
    {
      id: admin.id,
      email: admin.email,
      role: "admin",
    },
    JWT_SECRET,
    { expiresIn: "24h" },
  )
}

export function verifyAdminToken(token: string): { id: number; email: string; role: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: number; email: string; role: string }
  } catch {
    return null
  }
}

export async function getAdminFromRequest(request: NextRequest): Promise<{ id: number; email: string } | null> {
  const token = request.cookies.get("admin-token")?.value

  if (!token) {
    return null
  }

  const payload = verifyAdminToken(token)
  return payload ? { id: payload.id, email: payload.email } : null
}

export async function getAdminFromCookies(): Promise<{ id: number; email: string } | null> {
  const cookieStore = cookies()
  const token = cookieStore.get("admin-token")?.value

  if (!token) {
    return null
  }

  const payload = verifyAdminToken(token)
  return payload ? { id: payload.id, email: payload.email } : null
}
