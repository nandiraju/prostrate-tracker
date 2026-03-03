import { z } from "zod";

export const formSchema = z.object({
  // Section 1: Registration
  centerName: z.string().optional(),
  registrationNumber: z.string().optional(),
  hospitalRegistrationNumber: z.string().optional(),
  websiteGeneratedNumber: z.string().optional(),
  dateOfRegistration: z.string().optional(),
  patientName: z.string().optional(),
  fatherName: z.string().optional(),
  caretakerName: z.string().optional(),

  // Section 2: Contact
  localAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  telephoneNumber: z.string().optional(),
  emailId: z.string().email().optional().or(z.literal("")),

  // Section 3: Demographics
  age: z.string().optional(),
  dob: z.string().optional(),
  sex: z.string().optional(),
  basisOfDiagnosis: z.array(z.string()).optional(),
  dateOfDiagnosis: z.string().optional(),

  // Add other sections as needed...
});

export type FormValues = z.infer<typeof formSchema>;
