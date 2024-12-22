const { z } = require('zod')

const staffEventSchema = z.object({
  Id: z.string().optional(), 
  firstName: z.string(),
  lastName: z.string(),
  mobile: z.string().min(10, ' at least 10 digits').max(10, 'up to 10 digits'),
  email: z.string().email('Invalid email address'),
  collegeName: z.string(),
  state: z.string(), // Ensure this is present and required
  country: z.string(),
  event: z.string().optional(),

//   Image: z.string(),
//   Date: z.date().default(() => new Date()),
//   Status: z.string(),
});

module.exports = staffEventSchema 