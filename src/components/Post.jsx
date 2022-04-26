import {
    Favorite,
    FavoriteBorder,
    MoreVert,
    Share
} from "@mui/icons-material";
import { 
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, 
    Checkbox, 
    IconButton,
    Typography
} from "@mui/material";

function Post() {
  return (
    <Card sx={{margin:5}}>
        <CardHeader
        avatar={
            <Avatar sx={{bgcolor:"red"}} aria-label="recipe">
                R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
                <MoreVert/>
            </IconButton>
        }
        title="Shrimp and Chorizo Paela"
        subheader="September 14, 2016"
        
        />
        <CardMedia 
            component="img"
            height="20%"
            image="/static/images/cards/paella.jpg" 
            alt="paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas provident voluptatibus eum, quae ab itaque. Laudantium esse quis odio, quia facilis excepturi! Rerum nam veritatis explicabo, impedit iure aut!
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite/>}
                />
            </IconButton>
            <IconButton aria-label="share">
                <Share/>
            </IconButton>
        </CardActions>
    </Card>
  );
}

export default Post;