import { useSelector } from "react-redux";
function Counter() {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current Counter value:{counterVal}</p>;
}

export default Counter;
