const { z } = require('zod')

const studentEventSchema = z.object({
  Id: z.string().optional(), 
  firstName: z.string(),
  lastName: z.string(),
  mobile: z.string().min(10, ' at least 10 digits').max(10, 'up to 10 digits'),
  email: z.string().email('Invalid email address'),
  collegeName: z.string(),
  Events: z.string(),
  section: z.string(),
  amount: z
    .string()
    .transform((val) => parseInt(val, 10)) // Convert string to integer
    .refine((val) => !isNaN(val), { message: "Amount must be a valid number" }) ,// Ensure it's a valid number
    country:z.string(),
    state:z.string(),
//   Image: z.string(),
//   Date: z.date().default(() => new Date()),
//   Status: z.string(),
});

module.exports = studentEventSchema 