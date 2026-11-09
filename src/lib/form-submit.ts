// Sends form submissions to briangichuru254@gmail.com via FormSubmit (https://formsubmit.co),
// a free form-to-email relay that needs no API key or backend. The first submission to a new
// destination email triggers a one-time confirmation email that briangichuru254@gmail.com must
// click before further submissions are delivered.
const RECIPIENT_EMAIL = "briangichuru254@gmail.com";

export async function submitToEmail(subject: string, fields: Record<string, string>) {
  const formData = new FormData();
  formData.append("_subject", subject);
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }

  const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }

  return response.json();
}
