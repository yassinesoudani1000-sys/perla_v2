import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "laperla.db");

let db: Database.Database;

export function getDb() {
  if (!db) {
    db = new Database(dbPath);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    initSchema();
  }
  return db;
}

function initSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      cat TEXT NOT NULL,
      name TEXT NOT NULL,
      vol TEXT NOT NULL,
      notes TEXT NOT NULL,
      price REAL NOT NULL,
      img TEXT,
      flag TEXT DEFAULT '',
      trust TEXT DEFAULT '',
      available INTEGER DEFAULT 1,
      badge TEXT DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lang TEXT NOT NULL DEFAULT 'de',
      stars INTEGER NOT NULL DEFAULT 5,
      text TEXT NOT NULL,
      author TEXT NOT NULL,
      location TEXT NOT NULL,
      avatar_color TEXT,
      verified INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      customer_phone TEXT,
      items TEXT NOT NULL,
      total REAL NOT NULL,
      currency TEXT DEFAULT 'EUR',
      status TEXT DEFAULT 'pending',
      type TEXT DEFAULT 'retail',
      notes TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      lang TEXT DEFAULT 'de',
      subscribed_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS b2b_inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT NOT NULL,
      contact_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      country TEXT,
      message TEXT,
      interest TEXT DEFAULT 'general',
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);

  seedData();
}

function seedData() {
  const count = db.prepare("SELECT COUNT(*) as c FROM products").get() as { c: number };
  if (count.c > 0) return;

  const insertProduct = db.prepare(`
    INSERT INTO products (id, cat, name, vol, notes, price, img, flag, trust, available, badge)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const products = [
    ["p3", "glass", "Vestige 250 ml", "250 ml · Runde Glasflasche", "Kompaktes Format — perfekt zum Probieren oder Mitnehmen.", 8.90, "/extracted_images/image_112.png", "", "", 1, ""],
    ["p2", "glass", "Vestige 500 ml", "500 ml · Runde Glasflasche", "Der ideale Einstieg in die Prestige-Linie für die tägliche Tafel.", 14.90, "/extracted_images/image_113.png", "", "", 1, ""],
    ["p1", "glass", "Vestige 750 ml", "750 ml · Runde Glasflasche", "Das Flaggschiff der Édition Prestige.", 19.90, "/extracted_images/image_114.png", "Best in the World · Genf", "", 1, ""],
    ["p4", "tin", "Heritage Dose 1 L", "1 L · Metalldose", "Lichtdicht versiegelt — schützt Polyphenole über Monate.", 24.90, "/extracted_images/image_119.png", "Zurzeit nicht verfügbar", "", 0, ""],
    ["p5", "tin", "Heritage Dose 3 L", "3 L · Metalldose", "Für Genießer und Familien, die Laperla großzügig schätzen.", 64.90, "/extracted_images/image_118.png", "", "Mit internationalen Goldmedaillen ausgezeichnet", 1, "Mehrfach goldprämiert 2026"],
    ["p8", "tin", "Heritage Dose 5 L", "5 L · Metalldose", "Das Großformat für die anspruchsvolle Küche.", 99.90, "/extracted_images/image_111.png", "", "Mit internationalen Goldmedaillen ausgezeichnet", 1, "Mehrfach goldprämiert 2026"],
    ["p6", "gift", "Coffret Prestige", "2 × 250 ml · Geschenkbox", "Zwei 250-ml-Flaschen der Édition Prestige.", 17.00, "/extracted_images/image_112.png", "Wieder verfügbar", "", 1, ""],
    ["p7", "gift", "Coffret Or Suprême", "750 ml + Karaffe", "Flaschenset mit handgefertigter Ausgießkaraffe.", 89.00, "/extracted_images/image_114.png", "Zurzeit nicht verfügbar", "", 0, ""],
  ];

  const tx = db.transaction(() => {
    for (const p of products) {
      insertProduct.run(...p);
    }
  });
  tx();
}
