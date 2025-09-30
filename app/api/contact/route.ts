import { NextRequest, NextResponse } from "next/server";
import getEnvConfig from "@/components/getenv";

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      businessEmail,
      companyName,
      jobTitle,
      phone,
      country,
      message,
    } = await request.json();

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !businessEmail ||
      !companyName ||
      !jobTitle ||
      !country
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Get backend URL
    const backendUrl = getEnvConfig();
    if (!backendUrl) {
      return NextResponse.json(
        { error: "Backend URL not configured" },
        { status: 500 }
      );
    }

    // Forward request to your backend API
    const backendResponse = await fetch(`${backendUrl}/site/lead/contactus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        businessEmail,
        companyName,
        jobTitle,
        phone,
        country,
        message,
      }),
    });

    let responseData;
    if (backendResponse.ok) {
      responseData = await backendResponse.json();
    } else {
      // For error responses, try to parse as JSON, but if not, use a default message
      try {
        responseData = await backendResponse.json();
      } catch {
        responseData = { message: "Backend error" };
      }
    }

    if (!backendResponse.ok) {
      return NextResponse.json(
        { error: responseData.message || "Failed to submit contact form" },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
