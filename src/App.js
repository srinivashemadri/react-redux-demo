import {Provider} from "react-redux";
import {store} from "./redux/store";
import {FormControl} from "./components/FormControl";
import {FormDisplay} from "./components/FormDisplay";

function App() {
  return (
    <Provider store={store}>
        <FormDisplay/>
        <FormControl/>
    </Provider>
  );
}

export default App;
