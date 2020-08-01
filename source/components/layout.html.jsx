import Head from "./head.html.jsx";

export default ({ children }) => {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
};
