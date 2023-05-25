import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutUserInputSchema } from './TaskUncheckedCreateNestedManyWithoutUserInputSchema';
import { ProjectUncheckedCreateNestedManyWithoutUserInputSchema } from './ProjectUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  Task: z.lazy(() => TaskUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Project: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
