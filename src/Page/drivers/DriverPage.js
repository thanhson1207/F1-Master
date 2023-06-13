import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./DriverPage.module.css";
import ContentDriverPage from "../../components/ContentDriverPage/ContentDriverPage";

function DriverPage() {
  let { state } = useLocation();
  return (
    <div>
      <Header />
        <ContentDriverPage data={state}/>
    </div>
  );
}

export default DriverPage;
