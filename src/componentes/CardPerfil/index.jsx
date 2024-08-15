import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


export default function CardComponent() {
  return (
    <Card sx={{ width: 320, borderRadius: '12px', boxShadow: 3 }}>
      <CardContent sx={{ padding: '16px 16px 0 16px' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar 
            alt="Dra. Ana Lúcia" 
            src="/path-to-your-image.jpg" 
            sx={{ width: 56, height: 56, border: '2px solid #007BFF', mr: 2 }}
          />
          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
              Dra. Ana Lúcia
            </Typography>
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
              03/03/2023
            </Typography>
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
              Angiologista
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', padding: '0 16px 16px' }}>
        <Button 
          size="small" 
          sx={{
            backgroundColor: '#0D3B66',
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '6px 16px',
            '&:hover': {
              backgroundColor: '#052A4F',
            }
          }}
        >
          Detalhes
        </Button>
        <Button 
          size="small" 
          sx={{
            backgroundColor: '#0D3B66',
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '6px 16px',
            '&:hover': {
              backgroundColor: '#052A4F',
            }
          }}
        >
          Remarcar
        </Button>
        <Button 
          size="small" 
          sx={{
            backgroundColor: '#B22222',
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '6px 16px',
            '&:hover': {
              backgroundColor: '#8B1A1A',
            }
          }}
        >
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
}
