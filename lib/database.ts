import Database from "better-sqlite3"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "soliid.db")

// Ensure data directory exists
import fs from "fs"
const dataDir = path.dirname(dbPath)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const db = new Database(dbPath)

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL, -- 'parpaings' or 'paves'
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    project_description TEXT,
    calculation_data TEXT, -- JSON string with calculation details
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL, -- 'configuration' for settings, 'parpaing' or 'pave' for individual products
    name TEXT,
    config TEXT, -- JSON configuration for product settings
    length REAL,
    width REAL,
    height REAL,
    price REAL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT 1,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS downloads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    download_id TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    project_type TEXT,
    status TEXT DEFAULT 'new', -- 'new', 'read', 'replied', 'closed'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Email tracking table
  CREATE TABLE IF NOT EXISTS email_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipient TEXT NOT NULL,
    subject TEXT NOT NULL,
    template_type TEXT,
    status TEXT DEFAULT 'sent', -- 'sent', 'failed', 'bounced'
    error_message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Added admin users table for authentication
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Added calculator_configs table for dynamic calculator configuration
  CREATE TABLE IF NOT EXISTS calculator_configs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL, -- 'parpaings', 'paves', 'bordures'
    name TEXT NOT NULL,
    dimensions TEXT NOT NULL,
    price REAL NOT NULL,
    coverage REAL NOT NULL, -- m² coverage per unit
    description TEXT,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

// Insert default products if none exist
const productCount = db.prepare("SELECT COUNT(*) as count FROM products").get() as { count: number }

if (productCount.count === 0) {
  const insertProduct = db.prepare(`
    INSERT INTO products (type, name, config, length, width, height, price, description, is_active)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
  `)

  // Default parpaings
  insertProduct.run(
    "parpaing",
    "Parpaing Standard 20x20x40",
    JSON.stringify({ length: 40, width: 20, height: 20 }),
    40,
    20,
    20,
    350,
    "Parpaing standard pour construction résidentielle",
  )
  insertProduct.run(
    "parpaing",
    "Parpaing Standard 15x20x40",
    JSON.stringify({ length: 40, width: 20, height: 15 }),
    40,
    20,
    15,
    300,
    "Parpaing pour cloisons intérieures",
  )
  insertProduct.run(
    "parpaing",
    "Parpaing Standard 10x20x40",
    JSON.stringify({ length: 40, width: 20, height: 10 }),
    40,
    20,
    10,
    250,
    "Parpaing pour cloisons légères",
  )

  // Default pavés
  insertProduct.run(
    "pave",
    "Pavé Rectangulaire 20x10",
    JSON.stringify({ length: 20, width: 10 }),
    20,
    10,
    6,
    450,
    "Pavé rectangulaire pour allées et terrasses",
  )
  insertProduct.run(
    "pave",
    "Pavé Carré 20x20",
    JSON.stringify({ length: 20, width: 20 }),
    20,
    20,
    6,
    800,
    "Pavé carré pour espaces décoratifs",
  )
  insertProduct.run(
    "pave",
    "Pavé Hexagonal 20x17",
    JSON.stringify({ length: 20, width: 17 }),
    20,
    17,
    6,
    650,
    "Pavé hexagonal design moderne",
  )

  insertProduct.run(
    "bordure",
    "Bordure T1 - 100x20x8",
    JSON.stringify({ length: 100, width: 20, height: 8 }),
    100,
    20,
    8,
    2500,
    "Bordure standard pour trottoirs et allées piétonnes",
  )
  insertProduct.run(
    "bordure",
    "Bordure T2 - 100x25x12",
    JSON.stringify({ length: 100, width: 25, height: 12 }),
    100,
    25,
    12,
    3200,
    "Bordure renforcée pour voiries et parkings",
  )
  insertProduct.run(
    "bordure",
    "Bordure Jardinière - 100x30x15",
    JSON.stringify({ length: 100, width: 30, height: 15 }),
    100,
    30,
    15,
    4100,
    "Bordure décorative pour espaces verts et jardins",
  )
}

const configCount = db.prepare("SELECT COUNT(*) as count FROM calculator_configs").get() as { count: number }

if (configCount.count === 0) {
  const insertConfig = db.prepare(`
    INSERT INTO calculator_configs (type, name, dimensions, price, coverage, description, is_active)
    VALUES (?, ?, ?, ?, ?, ?, 1)
  `)

  // Default parpaings configs
  insertConfig.run(
    "parpaings",
    "Parpaing 20x20x40",
    "40cm × 20cm × 20cm",
    350,
    0.08,
    "Parpaing standard pour construction résidentielle",
  )
  insertConfig.run(
    "parpaings",
    "Parpaing 15x20x40",
    "40cm × 20cm × 15cm",
    300,
    0.08,
    "Parpaing pour cloisons intérieures",
  )
  insertConfig.run("parpaings", "Parpaing 10x20x40", "40cm × 20cm × 10cm", 250, 0.08, "Parpaing pour cloisons légères")

  // Default pavés configs
  insertConfig.run(
    "paves",
    "Pavé Rectangulaire 20x10",
    "20cm × 10cm × 6cm",
    450,
    0.02,
    "Pavé rectangulaire pour allées et terrasses",
  )
  insertConfig.run("paves", "Pavé Carré 20x20", "20cm × 20cm × 6cm", 800, 0.04, "Pavé carré pour espaces décoratifs")
  insertConfig.run("paves", "Pavé Hexagonal 20x17", "20cm × 17cm × 6cm", 650, 0.034, "Pavé hexagonal design moderne")

  // Default bordures configs
  insertConfig.run("bordures", "Bordure T1", "100cm × 20cm × 8cm", 2500, 1.0, "Bordure standard pour trottoirs")
  insertConfig.run("bordures", "Bordure T2", "100cm × 25cm × 12cm", 3200, 1.0, "Bordure renforcée pour voiries")
  insertConfig.run(
    "bordures",
    "Bordure Jardinière",
    "100cm × 30cm × 15cm",
    4100,
    1.0,
    "Bordure décorative pour jardins",
  )
}

export default db

export const getDatabase = async () => {
  return db
}

// Helper functions
export const initDatabase = async () => {
  return db
}

export const addLead = (lead: {
  type: string
  name: string
  email: string
  phone: string
  project_description?: string
  calculation_data?: string
}) => {
  const stmt = db.prepare(`
    INSERT INTO leads (type, name, email, phone, project_description, calculation_data)
    VALUES (?, ?, ?, ?, ?, ?)
  `)

  return stmt.run(
    lead.type,
    lead.name,
    lead.email,
    lead.phone,
    lead.project_description || null,
    lead.calculation_data || null,
  )
}

export const addContactMessage = (contact: {
  name: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
  project_type?: string
}) => {
  const stmt = db.prepare(`
    INSERT INTO contact_messages (name, email, phone, company, subject, message, project_type)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)

  return stmt.run(
    contact.name,
    contact.email,
    contact.phone || null,
    contact.company || null,
    contact.subject || null,
    contact.message,
    contact.project_type || null,
  )
}

export const addDownload = (download: {
  download_id: string
  name: string
  email: string
  phone?: string
  company?: string
}) => {
  const stmt = db.prepare(`
    INSERT INTO downloads (download_id, name, email, phone, company)
    VALUES (?, ?, ?, ?, ?)
  `)

  return stmt.run(download.download_id, download.name, download.email, download.phone || null, download.company || null)
}

export const logEmail = (log: {
  recipient: string
  subject: string
  template_type?: string
  status: string
  error_message?: string
}) => {
  const stmt = db.prepare(`
    INSERT INTO email_logs (recipient, subject, template_type, status, error_message)
    VALUES (?, ?, ?, ?, ?)
  `)

  return stmt.run(log.recipient, log.subject, log.template_type || null, log.status, log.error_message || null)
}

export const getProducts = (type?: "configuration" | "parpaing" | "pave" | "bordure") => {
  const query = type
    ? "SELECT * FROM products WHERE type = ? AND is_active = 1 ORDER BY name"
    : "SELECT * FROM products WHERE is_active = 1 ORDER BY type, name"

  return type ? db.prepare(query).all(type) : db.prepare(query).all()
}

// Function to add admin user
export const addAdminUser = (adminUser: {
  email: string
  password_hash: string
}) => {
  const stmt = db.prepare(`
    INSERT INTO admin_users (email, password_hash)
    VALUES (?, ?)
  `)

  return stmt.run(adminUser.email, adminUser.password_hash)
}

// Function to get admin user by email
export const getAdminUserByEmail = (email: string) => {
  const stmt = db.prepare("SELECT * FROM admin_users WHERE email = ?")
  return stmt.get(email)
}
