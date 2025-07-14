// lib/action-types.ts

export type ContactFormState =
  | {
      message: string; // jika berhasil submit
    }
  | {
      error: {
        name?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
      };
    };
