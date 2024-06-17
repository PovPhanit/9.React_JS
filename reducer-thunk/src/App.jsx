import { Provider } from "react-redux";
import Header from "./Header";
import store from './services/store';
import { updateName } from "./services/accoutSlice";
export default function App() {
store.dispatch(updateName("Phanit"));
  return (
    <div>
        <Header />
    </div>
  );
}
