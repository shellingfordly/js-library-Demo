import { Provider } from "./useContext";

export default function Form({ children, form }) {
  return (
    <form>
      <Provider value={form}>{children}</Provider>
    </form>
  );
}
