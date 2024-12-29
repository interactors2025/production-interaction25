import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        color="error" // Set the button to red color
        onClick={handleCancel}
        sx={{
          textTransform: 'none',
          fontSize: '16px',
          padding: '8px 16px',
        }}
      >
        X
      </Button>
    </div>
  );
};

export default CancelButton;
