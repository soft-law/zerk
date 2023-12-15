import { useRouter } from "next/router";
import { usePolkadotJSContext } from "../../context/PolkadotJS";
export default function Dashboard() {
  const { handleConnect, api } = usePolkadotJSContext();

  return (
    <div>
      {api.loading && <p>Loading...</p>}
      {api.error && <p>Error: {api.error.message}</p>}
      {api.data && (
        <>
          <p>Data:</p>
          <ul>
            {api.data.accounts.map((account) => (
              <li key={account.address}>{account.address}</li>
            ))}
          </ul>
          <p>Default Account: {api.data.defaultAccount.address}</p>
        </>
      )}
      <button onClick={handleConnect} disabled={api.loading}>
        {api.loading ? "Connecting..." : "Connect"}
      </button>
    </div>
  );
}
