import { NextRequest, NextResponse } from "next/server";

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    // Check if webhook URL is configured
    if (!ZAPIER_WEBHOOK_URL) {
      console.error("❌ ZAPIER_WEBHOOK_URL environment variable not set!");
      return NextResponse.json(
        { error: "Webhook configuration missing" },
        { status: 500 }
      );
    }
    
    console.log("🔗 Using webhook URL:", ZAPIER_WEBHOOK_URL);

    // Get the data from the request
    const body = await request.json();

    // Validate required fields
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.acceptPrivacy
    ) {
      return NextResponse.json(
        { error: "Missing required fields or privacy acceptance" },
        { status: 400 },
      );
    }

    // Prepare data for Zapier (you can transform/add fields here if needed)
    const fullPhone = body.phone
      ? `${body.countryCode || "+49"}${body.phone}`
      : "";
    const zapierData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: fullPhone,
      acceptedPrivacyPolicy: body.acceptPrivacy,
      privacyPolicyAcceptedAt: new Date().toISOString(),
      timestamp: new Date().toISOString(),
      source: "Krypto Masterclass Landing Page",
      formType: "Lead Capture",
    };

    console.log("📤 Sending to Zapier webhook:", zapierData);

    // Send data to Zapier webhook
    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zapierData),
    });

    // Check if the request was successful
    if (!zapierResponse.ok) {
      console.error("❌ Zapier webhook failed:", zapierResponse.statusText);
      return NextResponse.json(
        { error: "Failed to submit data" },
        { status: 500 },
      );
    }

    console.log("✅ Zapier webhook successful!");

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Data submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in Zapier API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Optional: Handle other HTTP methods - Test endpoint to check env vars
export async function GET() {
  const isConfigured = !!ZAPIER_WEBHOOK_URL;
  const maskedUrl = ZAPIER_WEBHOOK_URL 
    ? ZAPIER_WEBHOOK_URL.substring(0, 30) + "..." 
    : "NOT_SET";
  
  return NextResponse.json({ 
    configured: isConfigured,
    webhookUrl: maskedUrl,
    timestamp: new Date().toISOString()
  }, { status: 200 });
}
