import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (tasks.length === 0) return <h1>There is no task to show!</h1>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h2>{task.content}</h2>
          <div>
            <Link href="/" className="btn btn-accent btn-sm">
              Edit
            </Link>
            <DeleteForm />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
