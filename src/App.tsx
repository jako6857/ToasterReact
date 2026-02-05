import Toast from "./components/toast";
import { useToast } from "./hooks/useToast";

function App() {
  const { toast, showToast } = useToast();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Toast Notifications</h1>

      <button onClick={() => showToast("Success! Det virkede 🎉", "success")}>
        Show Success
      </button>

      <button
        onClick={() => showToast("Advarsel! Noget skal tjekkes ⚠️", "warning")}
        style={{ marginLeft: "10px" }}
      >
        Show Warning
      </button>

      <button
        onClick={() => showToast("Fejl! Noget gik galt ", "error")}
        style={{ marginLeft: "10px" }}
      >
        Show Error
      </button>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

export default App;
