import './Task.css';

function Task({ title, descr, isCompleted, onToggle }) {
  return (
    <li
      className={`
                group relative flex justify-between items-start gap-4
                p-5 rounded-xl shadow-sm border transition
                ${isCompleted ? 'bg-gray-50 opacity-70' : 'bg-white'}
            `}
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500">{descr}</p>
        <span
          className={`
                        absolute bottom-1 left-5 text-sm font-medium
                        opacity-0 group-hover:opacity-100 transition
                        ${isCompleted ? 'text-green-600' : 'text-red-600'}
                    `}
        >
          {isCompleted ? '✔ Task completed' : '✖ Task not completed'}
        </span>
      </div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className="w-5 h-5 mt-1 accent-blue-500 cursor-pointer"
      />
    </li>
  );
}

export default Task;
