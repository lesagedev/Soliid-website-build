import { promises as fs } from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

// Generic function to read JSON file
async function readJsonFile<T>(filename: string): Promise<T[]> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, filename)

  try {
    const data = await fs.readFile(filePath, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty array
    return []
  }
}

// Generic function to write JSON file
async function writeJsonFile<T>(filename: string, data: T[]): Promise<void> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, filename)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8")
}

// Admin Users
export interface AdminUser {
  id: number
  email: string
  password_hash: string
  created_at: string
  updated_at: string
}

export async function getAdminUsers(): Promise<AdminUser[]> {
  return readJsonFile<AdminUser>("admin-users.json")
}

export async function saveAdminUsers(users: AdminUser[]): Promise<void> {
  return writeJsonFile("admin-users.json", users)
}

// Products
export interface Product {
  id: number
  type: string
  name: string
  dimensions: string
  price: number
  description: string
  image: string
  created_at: string
}

export async function getProducts(): Promise<Product[]> {
  return readJsonFile<Product>("products.json")
}

export async function saveProducts(products: Product[]): Promise<void> {
  return writeJsonFile("products.json", products)
}

export async function getProductsByType(type: string): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((product) => product.type === type)
}

// Leads
export interface Lead {
  id: number
  name: string
  email?: string
  phone: string
  project_type: string
  project_details: string
  calculated_quantity?: number
  estimated_cost?: number
  created_at: string
}

export async function getLeads(): Promise<Lead[]> {
  return readJsonFile<Lead>("leads.json")
}

export async function saveLeads(leads: Lead[]): Promise<void> {
  return writeJsonFile("leads.json", leads)
}

export async function addLead(lead: Omit<Lead, "id" | "created_at">): Promise<Lead> {
  const leads = await getLeads()
  const newLead: Lead = {
    ...lead,
    id: leads.length > 0 ? Math.max(...leads.map((l) => l.id)) + 1 : 1,
    created_at: new Date().toISOString(),
  }

  leads.push(newLead)
  await saveLeads(leads)
  return newLead
}

// Messages (Contact Form)
export interface Message {
  id: number
  name: string
  email?: string
  phone: string
  subject: string
  message: string
  created_at: string
}

export async function getMessages(): Promise<Message[]> {
  return readJsonFile<Message>("messages.json")
}

export async function saveMessages(messages: Message[]): Promise<void> {
  return writeJsonFile("messages.json", messages)
}

export async function addMessage(message: Omit<Message, "id" | "created_at">): Promise<Message> {
  const messages = await getMessages()
  const newMessage: Message = {
    ...message,
    id: messages.length > 0 ? Math.max(...messages.map((m) => m.id)) + 1 : 1,
    created_at: new Date().toISOString(),
  }

  messages.push(newMessage)
  await saveMessages(messages)
  return newMessage
}

// Downloads
export interface Download {
  id: number
  name: string
  email?: string
  phone: string
  document_type: string
  created_at: string
}

export async function getDownloads(): Promise<Download[]> {
  return readJsonFile<Download>("downloads.json")
}

export async function saveDownloads(downloads: Download[]): Promise<void> {
  return writeJsonFile("downloads.json", downloads)
}

export async function addDownload(download: Omit<Download, "id" | "created_at">): Promise<Download> {
  const downloads = await getDownloads()
  const newDownload: Download = {
    ...download,
    id: downloads.length > 0 ? Math.max(...downloads.map((d) => d.id)) + 1 : 1,
    created_at: new Date().toISOString(),
  }

  downloads.push(newDownload)
  await saveDownloads(downloads)
  return newDownload
}

// Calculator Configs
export interface CalculatorConfig {
  id: number
  product_type: string
  name: string
  price_per_unit: number
  coverage_per_m2: number
  dimensions: string
}

export async function getCalculatorConfigs(): Promise<CalculatorConfig[]> {
  return readJsonFile<CalculatorConfig>("calculator-configs.json")
}

export async function saveCalculatorConfigs(configs: CalculatorConfig[]): Promise<void> {
  return writeJsonFile("calculator-configs.json", configs)
}

export async function getCalculatorConfigsByType(type: string): Promise<CalculatorConfig[]> {
  const configs = await getCalculatorConfigs()
  return configs.filter((config) => config.product_type === type)
}
