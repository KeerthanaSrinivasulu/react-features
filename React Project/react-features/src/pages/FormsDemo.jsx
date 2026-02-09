import { useState } from "react";

export default function FormsDemo() {
  const [form, setForm] = useState({ name: "", email: "" });

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    alert(`Submitted:\nName: ${form.name}\nEmail: ${form.email}`);
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Forms (Controlled Inputs)</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, maxWidth: 320 }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>

      <pre style={{ marginTop: 12, background: "#f6f6f6", padding: 12 }}>
        {JSON.stringify(form, null, 2)}
      </pre>

      <p>
        <b>What you learned:</b> Controlled inputs keep form values in React state.
      </p>
    </div>
  );
}
