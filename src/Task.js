export default function Todo({ todo }) {
  return (
    <div className="todo">
      <p>{todo.task}</p>
    </div>
  );
}
