"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof formSchema>;

export async function submitContactForm(values: ContactFormValues) {
  try {
    // Simulate API call or database interaction
    console.log("Form values received:", values);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

    // In a real application, you would send an email, save to a database, etc.
    // For example:
    // await sendEmail({ to: "admin@adaptai.solutions", subject: values.subject, html: `...` });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
