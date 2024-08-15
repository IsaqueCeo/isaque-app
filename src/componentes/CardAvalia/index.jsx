import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

export default function CardComponent() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleStarClick = (index) => {
    setRating(index);
  };

  return (
    <Card sx={{ width: 320, borderRadius: '12px', boxShadow: 3 }}>
      <CardContent sx={{ padding: '16px' }}>
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
              Angiologista
            </Typography>
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
              São Paulo - SP
            </Typography>
          </Box>
          <IconButton sx={{ ml: 'auto' }} onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{ color: isFavorite ? '#007BFF' : '#C4C4C4' }} />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              sx={{ color: rating > index ? '#007BFF' : '#C4C4C4', cursor: 'pointer' }}
              onClick={() => handleStarClick(index + 1)}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', padding: '0 16px 16px' }}>
        <Button 
          size="small" 
          sx={{
            backgroundColor: '#0D3B66',
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '10px 16px',
            '&:hover': {
              backgroundColor: '#052A4F',
            }
          }}
        >
          Agendar consulta
        </Button>
      </CardActions>
    </Card>
  );
}
