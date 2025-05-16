import { useSelector } from "react-redux";
function Counter() {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current Counter value:{counter}</p>;
}

export default Counter;
