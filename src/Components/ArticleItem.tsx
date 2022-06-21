import { Card, Box, CardContent, CardMedia, Link, Typography } from "@mui/material"

interface ArticleItemProps {
    title: string,
    desc: string,
    image: string,
    onClick: React.MouseEventHandler,
  }

const ArticleItem = ({title, desc, image, onClick} : ArticleItemProps) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: '12px', cursor: 'pointer' }} onClick={onClick}>
        <CardMedia
            component="img"
            sx={{ width: 250 }}
            image={image}
            alt="article thumbnail"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" sx={{fontWeight: 'bold'}}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {desc}
                </Typography>
                <Link href="#" underline="hover" sx={{fontStyle: 'italic', fontSize: 12}}>
                    Baca Selengkapnya...
                </Link>
            </CardContent>
        </Box>
    </Card>
  )
}

export default ArticleItem