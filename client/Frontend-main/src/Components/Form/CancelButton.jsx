import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); 
  };

  return (
    <Button
      color="error"
      onClick={handleCancel}
      sx={{
        minWidth: '40px',
        minHeight: '40px',
        borderRadius: '25%',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute', 
        top: '1px', 
        right: '4px',
        // Media queries using Material-UI breakpoints
        '@media (max-width: 1200px)': {
          right: '28%',
          minWidth: '50px',
          minHeight: '50px',
        },
        '@media (max-width: 768px)': {
          right: '20%',
          top: '10px',
          minWidth: '45px',
          minHeight: '45px',
        },
        '@media (max-width: 480px)': {
          right: '10%',
          top: '5px',
          minWidth: '40px',
          minHeight: '40px',
        },
      }}
    >
      <CloseIcon />
    </Button>
  );
};

export default CancelButton;
