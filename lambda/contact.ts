import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.AWS_REGION || "us-west-2" });

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "andy@andymendez.dev";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@andymendez.dev";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface APIGatewayEvent {
  body: string | null;
  httpMethod: string;
  headers: Record<string, string>;
  isBase64Encoded?: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

export async function handler(event: APIGatewayEvent) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "https://andymendez.dev",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    if (event.isBase64Encoded && event.body) {
      event.body = Buffer.from(event.body, "base64").toString("utf-8");
    }
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing request body" }),
      };
    }

    const { name, email, message } = JSON.parse(event.body) as ContactPayload;

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid email address" }),
      };
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Input too long" }),
      };
    }

    const safeName = sanitize(name);
    const safeMessage = sanitize(message);

    await ses.send(
      new SendEmailCommand({
        Source: SENDER_EMAIL,
        Destination: { ToAddresses: [RECIPIENT_EMAIL] },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Data: `Portfolio Contact: ${safeName}`,
          },
          Body: {
            Text: {
              Data: `Name: ${safeName}\nEmail: ${email}\n\nMessage:\n${safeMessage}`,
            },
          },
        },
      }),
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}
