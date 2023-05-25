import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const taskRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.task.findFirst({ where: { id: input } });
  }),
  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.task.create({ data: input });
    }),
});
