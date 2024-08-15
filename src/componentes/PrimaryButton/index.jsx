import { Button } from '@mui/material';

export default function PrimaryButton(props) {
  return (
    <Button 
      variant="contained"
      size="large"
      sx={{
        // backgroundColor: '#0D3B66',
        backgroundColor: `${props.color}`,
        color: '#FFFFFF', 
        width: '240px', 
        height: '48px', 
        borderRadius: '12px', 
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#052A4F', 
        },
      }}
    >
      {props.text}
    </Button>
  );
}
