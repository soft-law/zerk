import { useRouter } from "next/router";
import { usePolkadotJSContext } from "../../context/PolkadotJS";
import Simple from "../comps/nav";
import Footer from "../comps/footer";
export default function Dashboard() {
  const { handleConnect, state } = usePolkadotJSContext();

  return (
    <>
      <Simple />
      <div>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error.message}</p>}
        {state.data && (
          <>
            <p>Data:</p>
            <ul>
              {state.data.accounts.map((account) => (
                <li key={account.address}>{account.address}</li>
              ))}
            </ul>
            <p>Default Account: {state.data.defaultAccount.address}</p>
          </>
        )}
        <button onClick={handleConnect} disabled={state.loading}>
          {state.loading ? "Connecting..." : "Connect"}
        </button>
      </div>
      <Footer />
    </>
  );
}
