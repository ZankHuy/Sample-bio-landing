import { LeadFormData } from "@/types";

/**
 * Submit form data to Google Forms via programmatic POST.
 * Uses no-cors mode since Google Forms doesn't support CORS.
 * The form must be configured to accept anonymous responses.
 *
 * How to get the action URL:
 * 1. Open your Google Form
 * 2. Click "Send" → "<>" (Get embeded HTML)
 * 3. Find the <form> tag, copy the "action" attribute
 * 4. It looks like: https://docs.google.com/forms/d/e/xxx/formResponse
 * 5. Get entry IDs from the form source or by inspecting form fields
 */
export async function submitToGoogleForm(
  formActionUrl: string,
  fieldMapping: {
    name: string;
    phone: string;
    email: string;
    notes: string;
  },
  data: LeadFormData
): Promise<{ success: boolean; error?: string }> {
  // Build the submission URL with all form fields
  const params = new URLSearchParams();
  params.set(fieldMapping.name, data.name);
  params.set(fieldMapping.phone, data.phone);
  params.set(fieldMapping.email, data.email);
  params.set(fieldMapping.notes, data.notes);

  const submitUrl = `${formActionUrl}?${params.toString()}&submit=Submit`;

  try {
    await fetch(submitUrl, {
      method: "POST",
      mode: "no-cors",
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * Extract the form action URL from a Google Form view URL.
 * Input:  https://docs.google.com/forms/d/e/xxx/viewform
 * Output: https://docs.google.com/forms/d/e/xxx/formResponse
 */
export function getFormActionUrl(viewUrl: string): string {
  return viewUrl.replace("/viewform", "/formResponse");
}

/**
 * Extract entry IDs from Google Form HTML source.
 * Returns a mapping of field names to entry IDs.
 */
export function parseFormEntryIds(html: string): Record<string, string> {
  const mapping: Record<string, string> = {};
  const regex = /name="([^"]+)"[^>]*value="(entry\.\d+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const [, fieldName, entryId] = match;
    mapping[fieldName] = entryId;
  }
  return mapping;
}
