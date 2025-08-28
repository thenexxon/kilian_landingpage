import { NextRequest, NextResponse } from "next/server";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/14260077/uhmlbsc/";

export async function POST(request: NextRequest) {
  try {
    // Get the data from the request
    const body = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.acceptPrivacy) {
      return NextResponse.json(
        { error: "Missing required fields or privacy acceptance" },
        { status: 400 }
      );
    }

    // Prepare data for Zapier (you can transform/add fields here if needed)
    const fullPhone = body.phone ? `${body.countryCode || "+49"}${body.phone}` : "";
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
        { status: 500 }
      );
    }

    console.log("✅ Zapier webhook successful!");

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Data submitted successfully" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in Zapier API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}