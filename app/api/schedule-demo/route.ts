import { NextRequest, NextResponse } from "next/server";
import getEnvConfig from "@/components/getenv";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, phone, countryCode, message } =
      await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Forward request to your backend API
    const backendResponse = await fetch(
      `${getEnvConfig()}/api/customer/scheduledemo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          phone,
          countryCode,
          message,
        }),
      }
    );

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
        { error: responseData.message || "Failed to submit demo request" },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Schedule demo API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
