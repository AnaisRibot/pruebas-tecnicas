import { StateContext } from "../context/StateContext";
import "@styles/globals.css";

export const metadata = {
  title: "Reading List",
  description: "Discover books and plan your reading list",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black to-[#b9b9b9]">
        <StateContext>
          <main>{children}</main>
        </StateContext>
      </body>
    </html>
  );
};

export default layout;
