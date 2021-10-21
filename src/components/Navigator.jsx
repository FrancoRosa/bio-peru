import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
      <p>Navigator</p>
      <p>This shoudl apear allways</p>
      <Link to="/home">Home</Link>
      <Link to="/report">Reports</Link>
      <Link to="/next_maintenances">NextMaintenances</Link>
    </div>
  );
};

export default Navigator;
