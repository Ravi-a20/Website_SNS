import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

// Path to the file that will store the visitor count
const countFilePath = path.join(process.cwd(), "visitor-count.json")

// Initialize the count file if it doesn't exist
async function initCountFile() {
  try {
    await fs.access(countFilePath)
  } catch (error) {
    // File doesn't exist, create it with initial count of 1000
    await fs.writeFile(countFilePath, JSON.stringify({ count: 1000 }))
  }
}

// Get the current count
async function getCount() {
  await initCountFile()
  const data = await fs.readFile(countFilePath, "utf8")
  return JSON.parse(data).count
}

// Update the count
async function updateCount(count) {
  await fs.writeFile(countFilePath, JSON.stringify({ count }))
}

export async function GET() {
  try {
    const count = await getCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error("Error getting visitor count:", error)
    return NextResponse.json(
      { success: false, message: "Failed to get visitor count", error: error.message },
      { status: 500 },
    )
  }
}

export async function POST() {
  try {
    let count = await getCount()
    count += 1
    await updateCount(count)
    return NextResponse.json({ count })
  } catch (error) {
    console.error("Error updating visitor count:", error)
    return NextResponse.json(
      { success: false, message: "Failed to update visitor count", error: error.message },
      { status: 500 },
    )
  }
}

