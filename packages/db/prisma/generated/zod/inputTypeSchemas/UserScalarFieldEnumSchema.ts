import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','username','profileImageUrl']);

export default UserScalarFieldEnumSchema;
