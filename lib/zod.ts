import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(5, 'Fullname at least 5 characters'),
  email: z.string().email('Format email tidak valid'),
  subject: z.string().min(7, 'Subject at least 7 characters'),
  message: z.string().min(10, 'Message at least 10 characters'),
});

export type ContactFormType = z.infer<typeof ContactSchema>;
