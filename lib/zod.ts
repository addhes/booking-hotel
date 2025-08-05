import { array, coerce, object, string, z } from 'zod';

export const RoomSchema = object({
  name: string().min(1, 'name at least 5 character'),
  description: string().min(50, 'description at least 50 character'),
  capacity: coerce.number().gt(0),
  price: coerce.number().gt(0),
  amenities: array(string()).nonempty(),
})

export const ReserveSchema = object({
  name: string().min(1, 'name at least 3 character'),
  phone: string().min(10, 'phone at least 10 character')
})

export const ContactSchema = z.object({
  name: z.string().min(5, 'Fullname at least 5 characters'),
  email: z.string().email('Format email tidak valid'),
  subject: z.string().min(7, 'Subject at least 7 characters'),
  message: z.string().min(10, 'Message at least 10 characters'),
});

export type ContactFormType = z.infer<typeof ContactSchema>;
