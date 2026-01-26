import './Task.css';

function Task({ title, descr, isCompleted, children }) {
  return (
    <div
      className={`${isCompleted ? "bg-blue-200" : "bg-red-200"
        } flex flex-col items-center gap-3 p-6 shadow-lg rounded-xl m-4 transition duration-300 hover:scale-105`}
    >
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600 italic text-center">{descr}</p>
      {isCompleted ? (
        <span className="font-bold text-green-600">✅ Task completed</span>
      ) : (
        <span className="font-medium text-red-600">❌ Task not completed</span>
      )}
      {children}
    </div>
  );
}

export default Task;
