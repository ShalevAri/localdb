import express from "express"
import mysql2 from "mysql2"
import { setTimeout } from "timers"
import {
  LOCAL_MYSQL_DB,
  LOCAL_MYSQL_DB_HOST,
  LOCAL_MYSQL_DB_PASSWORD,
  LOCAL_MYSQL_DB_USER,
} from "../../consts"

const PORT = process.env.PORT || 5432 // note: port 3000 is always active for me because I use it for something else I built, therefore I'll simply use port 5432 instead

const app = express()

const db = mysql2.createConnection({
  host: `${LOCAL_MYSQL_DB_HOST}`,
  user: `${LOCAL_MYSQL_DB_USER}`,
  password: `${LOCAL_MYSQL_DB_PASSWORD}`,
  database: `${LOCAL_MYSQL_DB}`,
})

db.connect(err => {
  if (err) {
    console.error(
      `Error connecting to the ${LOCAL_MYSQL_DB} MySQL database: ${err}`
    )
    process.exit(1)
  }
  console.log(
    `Successfully connected to the '${LOCAL_MYSQL_DB}' MySQL database!`
  )
})

const createGenericTable = async (tableName: string): Promise<void> => {
  try {
    const query = `CREATE TABLE ? (
      id INT PRIMARY KEY AUTO_INCREMENT,
    )`
    db.query(query, [tableName])
  } catch (err) {
    console.error("Error creating the Generic Table")
    throw err
  }
}

const createAccountTable = async (tableName: string): Promise<void> => {
  try {
    const query = `CREATE TABLE ? (
      id INT PRIMARY KEY AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      deleted_at DATETIME NULL
    )`
    db.query(query, [tableName])
  } catch (err) {
    console.error("Error creating the Account Table")
    throw err
  }
}

const createAdminTable = async (tableName: string): Promise<void> => {
  try {
    const query = `CREATE TABLE ? (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
    )`
    db.query(query, [tableName])
  } catch (err) {
    console.error("Error creating the Admin Table")
    throw err
  }
}

const deleteTable = async (tableName: string): Promise<void> => {
  const forbiddenTables = ["admins", "users", "customers", "orders"]
  if (forbiddenTables.includes(tableName)) {
    throw new Error(
      `WARNING: The table you are trying to delete is in the forbidden list, therefore you cannot delete it.\n This is to prevent accidental deletion of important tables and data.\n If you are sure you want to delete the ${tableName} table, please force-delete it.`
    )
  }
  try {
    console.log(
      `Deleting table ${tableName} in 5 seconds.\n This is irreversible.`
    )

    let countdown = 5
    const intervalId = setInterval(() => {
      console.log(`${countdown}...`)
      countdown--
    }, 1000)

    await new Promise(resolve => setTimeout(resolve, 5000))

    clearInterval(intervalId)
    const query = `DROP TABLE IF EXISTS ?`
    db.query(query, [tableName])
  } catch (err) {
    console.error("Error deleting table")
    throw err
  }
}

const forceDeleteTable = async (tableName: string): Promise<void> => {
  try {
    console.log(
      `Force deleting table ${tableName} in 5 seconds.\nThis is irreversible.`
    )

    let countdown = 5
    const intervalId = setInterval(() => {
      console.log(`${countdown}...`)
      countdown--
    }, 1000)

    await new Promise(resolve => setTimeout(resolve, 5000))

    clearInterval(intervalId)
    const query = `DROP TABLE IF EXISTS ?`
    db.query(query, [tableName])
    console.log(`Force deleted table ${tableName}`)
  } catch (err) {
    console.error("Error force deleting table")
    throw err
  }
}

app.post("/create-generic-table", async (req, res) => {
  try {
    const tableName = req.body.tableName
    if (!tableName) {
      res.status(400).json({ error: "Table name is required" })
    }
    await createGenericTable(tableName)
    res.json({ message: `Created table ${tableName}` })
  } catch (err) {
    console.error(`Error creating table: ${err}`)
    res.status(500).json({ error: "Internal server error" })
  }
})

app.post("/delete-table", async (req, res) => {
  try {
    const tableName = req.body.tableName
    if (!tableName) {
      res.status(400).json({ error: "Table name is required" })
    }
    await deleteTable(tableName)
    res.json({ message: `Deleted table ${tableName}` })
  } catch (err) {
    console.error("Error deleting table")
    res.status(500).json({ error: "Internal server error" })
  }
})

app.post("/force-delete-table", async (req, res) => {
  try {
    const tableName = req.body.tableName
    if (!tableName) {
      res.status(400).json({ error: "Table name is required" })
    }
    await forceDeleteTable(tableName)
    res.json({ message: `Force deleted table ${tableName}` })
  } catch (err) {
    console.error("Error force deleting table")
    res.status(500).json({ error: "Internal server error" })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
