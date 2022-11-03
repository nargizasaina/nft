import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button, Card, CardActions, CardMedia, Grid, Typography} from "@mui/material";
import imageNotAvailable from '../../assets/noimage.png';

const PictureCard = ({id, title, img}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', padding: '5px 0 5px 15px '}}>
                    <Typography variant='h6'>{title}</Typography>
                </Box>
                <Box>
                    <CardMedia
                        component="div"
                        title={title}
                        image={img || imageNotAvailable}
                        sx={{paddingTop: '56.25%', height: 0}}
                    />
                    <CardActions>
                        <Button component={Link} to={'/nft/' + id}>See more >>></Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    );
};

export default PictureCard;