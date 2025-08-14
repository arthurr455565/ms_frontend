import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleGoToDashboard} type="button">Go to Dashboard</button>
    </div>
  );
};

export default HomePage; 