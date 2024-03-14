import Footer from "../footer";
import { Nav } from "../navbar";

const MainLayout = ({ children, activeTab }) => {
  return (
    <div className="flex flex-col justify-center">
      <Nav activeTabId={activeTab} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
