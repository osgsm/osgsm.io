"use client";

export function CodeSandbox({ id, module }: { id: string; module?: string }) {
  const defaultModule = "/src/App.tsx";
  return (
    <iframe
      src={`https://codesandbox.io/embed/${id}?view=preview&module=${module || defaultModule}&hidenavigation=1&hidedevtools=1`}
      style={{
        width: "100%",
        height: "30rem",
        border: "1px solid var(--border)",
        borderRadius: "0.75rem",
        overflow: "hidden",
        margin: "1.5rem 0",
      }}
      title="CodeSandbox"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}
