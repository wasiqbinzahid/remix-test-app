import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/list");
  }, [navigate]);
  return <div></div>;
};
export default Index;
