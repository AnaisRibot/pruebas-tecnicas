import "@styles/globals.css";

export const metadata = {
  title: "Reading List",
  description: "Discover books and plan your reading list",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
