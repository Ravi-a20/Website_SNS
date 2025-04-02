import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

// Path to the file that will store applications
const applicationsFilePath = path.join(process.cwd(), "career-applications.json")

// Initialize the applications file if it doesn't exist
async function initApplicationsFile() {
  try {
    await fs.access(applicationsFilePath)
  } catch (error) {
    // File doesn't exist, create it with empty applications array
    await fs.writeFile(applicationsFilePath, JSON.stringify({ applications: [] }))
  }
}

// Get all applications
async function getApplications() {
  await initApplicationsFile()
  const data = await fs.readFile(applicationsFilePath, "utf8")
  return JSON.parse(data).applications
}

// Save a new application
async function saveApplication(application) {
  const applications = await getApplications()

  // Add application with timestamp and ID
  const newApplication = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    ...application,
  }

  applications.push(newApplication)
  await fs.writeFile(applicationsFilePath, JSON.stringify({ applications }, null, 2))

  return newApplication
}

export async function POST(request) {
  try {
    const formData = await request.json()

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Save the application
    const savedApplication = await saveApplication(formData)

    // In a real application, you would send an email notification here
    // and potentially integrate with an HR system

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      applicationId: savedApplication.id,
    })
  } catch (error) {
    console.error("Error processing career application:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process application", error: error.message },
      { status: 500 },
    )
  }
}

export async function GET() {
  // This endpoint would typically be protected and only accessible to admins
  // For demonstration purposes, we're returning a simple message
  return NextResponse.json({ message: "This endpoint is for submitting applications only" })
}

