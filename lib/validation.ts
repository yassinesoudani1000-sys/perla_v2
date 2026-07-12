import { z } from "zod";

export const cartItemSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  price: z.number().positive(),
  qty: z.number().int().positive(),
  vol: z.string().optional(),
  img: z.string().optional(),
});

export const checkoutCartSchema = z.object({
  items: z.array(cartItemSchema).min(1),
  total: z.number().positive(),
});

export const orderSchema = z.object({
  customer_name: z.string().min(1, "Name erforderlich"),
  customer_email: z.string().email("Ungültige E-Mail"),
  customer_phone: z.string().optional(),
  items: z.array(cartItemSchema).min(1),
  total: z.number().positive(),
  type: z.enum(["retail", "wholesale"]).default("retail"),
  notes: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Ungültige E-Mail"),
  lang: z.string().default("de"),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name erforderlich"),
  email: z.string().email("Ungültige E-Mail"),
  message: z.string().min(10, "Nachricht zu kurz"),
});

export const b2bSchema = z.object({
  company: z.string().min(1, "Firmenname erforderlich"),
  contact_name: z.string().min(1, "Name erforderlich"),
  email: z.string().email("Ungültige E-Mail"),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().optional(),
  interest: z.string().default("general"),
});
