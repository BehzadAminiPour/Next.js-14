import prisma from "@/utils/db";

const prismaHandler = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExamplePge = async () => {
  const tasks = await prismaHandler();
  return (
    <div>
      <h1>Prisma Examples</h1>
      {tasks.map((task) => {
        return <h2 key={task.id}>{task.content}</h2>;
      })}
    </div>
  );
};

export default PrismaExamplePge;
