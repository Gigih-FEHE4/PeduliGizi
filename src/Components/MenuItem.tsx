import { Card, CardMedia, CardContent, Typography } from "@mui/material"

interface MenuItemProps {
  title: String,
  category: string,
  image: string,
  onClick: React.MouseEventHandler
}

const MenuItem = ({title, category, image, onClick}: MenuItemProps) => {
  return (
    <Card sx={{ width: 300, margin: '16px', cursor: 'pointer' }} onClick={onClick}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="omelet bayam"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MenuItem