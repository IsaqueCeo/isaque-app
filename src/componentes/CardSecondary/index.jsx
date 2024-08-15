import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';; // Ícone de pessoa


export default function CardComponent() {
  return (
    <Card sx={{ minWidth: 275, borderRadius: '12px' }}>
      <CardContent>

        <Typography variant="h6" component="div">
          Joana Magalhães Souza
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
          28/05/1990
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
          São Paulo - SP
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="large" 
          sx={{
            backgroundColor: '#0D3B66',
            color: '#FFFFFF',
            width: '100%',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#052A4F',
            }
          }}
        >
          Ver mais
        </Button>
      </CardActions>
    </Card>
  );
}
