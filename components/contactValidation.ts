export type Field = "name" | "email" | "message";
export type Values = Record<Field, string>;
export type Errors = Partial<Record<Field, string>>;

export const LIMITS = { name: 100, email: 254, message: 3000 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns an error message, or undefined when the value is valid. All fields are required. */
export function validateField(field: Field, raw: string): string | undefined {
  const value = raw.trim();

  switch (field) {
    case "name":
      if (!value) return "Name is required.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      if (value.length > LIMITS.name) return `Name must be ${LIMITS.name} characters or fewer.`;
      return;
    case "email":
      if (!value) return "Email is required.";
      if (value.length > LIMITS.email || !EMAIL_RE.test(value)) return "Enter a valid email address, like name@example.com.";
      return;
    case "message":
      if (!value) return "Message is required.";
      if (value.length < 10) return "Message must be at least 10 characters.";
      if (value.length > LIMITS.message) return `Message must be ${LIMITS.message} characters or fewer.`;
      return;
  }
}

export function validateAll(values: Values): Errors {
  const errors: Errors = {};
  (["name", "email", "message"] as Field[]).forEach((f) => {
    const msg = validateField(f, values[f]);
    if (msg) errors[f] = msg;
  });
  return errors;
}