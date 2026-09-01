Enter"use server";

/* =========================================================
 * Verde Capital — Contact form Server Action.
 *
 * Runs exclusively on the server. Validates input, simulates
 * a database write, and returns a structured JSON response
 * so the client can update UI state without a full reload.
 * ========================================================= */

export interface ContactFormState {
  success: boolean;
  message: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

/** Simple email regex for structural validation. */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server-side validation. Returns a list of human-readable errors.
 */
function validate(input: ContactFormInput): string[] {
  const errors: string[] = [];

  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }
  if (name.length > 100) {
    errors.push("Name must be 100 characters or fewer.");
  }

  if (!EMAIL_REGEX.test(email)) {
    errors.push("Please provide a valid email address.");
  }
  if (email.length > 200) {
    errors.push("Email must be 200 characters or fewer.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters.");
  }
  if (message.length > 2000) {
    errors.push("Message must be 2000 characters or fewer.");
  }

  return errors;
}

/**
 * Contact form handler.
 * Safe against errors: any unexpected failure returns a
 * user-friendly message instead of crashing the request.
 */
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // 1. Extract raw values from the form
    const input: ContactFormInput = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    // 2. Validate
    const errors = validate(input);
    if (errors.length > 0) {
      return {
        success: false,
        message: errors.join(" "),
      };
    }

    // 3. Simulated database write (replace with Prisma/Drizzle/etc.)
    // In production this would persist to a database or email service.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("[VerdeCapital] New contact lead:", {
      name: input.name.trim(),
      email: input.email.trim(),
      receivedAt: new Date().toISOString(),
    });

    // 4. Structured success response
    return {
      success: true,
      message:
        "Thank you — your message has been received. Our relationship team will respond within one business day.",
    };
  } catch (error) {
    console.error("[VerdeCapital] Contact form error:", error);
    return {
      success: false,
      message:
        "An unexpected error occurred. Please try again or email us directly.",
    };
  }
}
