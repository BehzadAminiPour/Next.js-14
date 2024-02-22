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
    <ul className="mt-8">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center mb-4 px-6 py-4  border border-base-300 rounded-lg shadow-lg"
        >
          <h2 className="">{task.content}</h2>
          <div>
            <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-sm">
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
