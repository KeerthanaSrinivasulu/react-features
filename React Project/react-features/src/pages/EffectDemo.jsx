import { useEffect, useState } from "react";

export default function EffectsDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        if (!ignore) setUsers(data);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      // cleanup: stops setting state if component unmounts
      ignore = true;
    };
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Effects + Fetch</h2>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}

      <hr style={{ margin: "16px 0" }} />
      <p>
        <b>What you learned:</b> <code>useEffect</code> runs side-effects (like API calls)
        after render. Cleanup prevents state updates after unmount.
      </p>
    </div>
  );
}
