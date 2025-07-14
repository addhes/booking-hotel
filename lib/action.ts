'use server';

import { ContactSchema } from './zod';
import { prisma } from './prisma'; // sesuaikan path prisma kamu
import type { ContactFormState } from './action-types';

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData
): Promise<ContactFormState> => {
  const validatedField = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedField.success) {
    return { error: validatedField.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedField.data;

  try {
    await prisma.contact.create({
      data: { name, email, subject, message },
    });

    return { message: 'Thanks for contacting us!' };
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: ['Terjadi kesalahan saat menyimpan data.'],
      },
    };
  }
};
