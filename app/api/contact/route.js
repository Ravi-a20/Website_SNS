import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const formData = await request.json()
    const { firstName, lastName, email, phone, subject, message, service } = formData

    // Format the WhatsApp message
    const whatsappMessage = `
*New Contact Form Submission*

*Contact Information*
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
${service ? `Service Interested In: ${service}` : ""}

*Message*
${message}
    `

    // Twilio API configuration
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER
    const recipientWhatsAppNumber = process.env.RECIPIENT_WHATSAPP_NUMBER

    // Send WhatsApp message using Twilio
    const twilioResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(`${accountSid}:${authToken}`).toString("base64"),
      },
      body: new URLSearchParams({
        From: `whatsapp:${twilioWhatsAppNumber}`,
        To: `whatsapp:${recipientWhatsAppNumber}`,
        Body: whatsappMessage,
      }),
    })

    if (!twilioResponse.ok) {
      const errorData = await twilioResponse.json()
      throw new Error(`Twilio API error: ${errorData.message || "Unknown error"}`)
    }

    return NextResponse.json({ success: true, message: "WhatsApp message sent successfully" })
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send WhatsApp message", error: error.message },
      { status: 500 },
    )
  }
}

