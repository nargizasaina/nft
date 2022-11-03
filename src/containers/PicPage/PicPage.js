import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPictureFailure, fetchPictureRequest, fetchPictureSuccess} from "../../store/actions";
import axios from "axios";
import {apiUrl} from "../../config";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Spinner from "../../components/UI/Spinner/Spinner";

const PicPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const pictures = useSelector(state => state.pictures);
    const picture = useSelector(state => state.picture);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        const nft = pictures.find(pic => pic.id === Number(params.id));

        const fetch = async () => {
            try{
                dispatch(fetchPictureRequest());

                const response = await axios(`${apiUrl}/asset/${nft.address}/${nft.token}`);
                const data = response.data;

                const picture = {
                    title: data.name || data.collection.name,
                    id: data.id,
                    token: data.token_id,
                    address: data.asset_contract.address,
                    image: data.image_url || data.asset_contract.image_url,
                    date: data.asset_contract.created_date,
                    creator: data.creator.user.username,
                    owner: data.owner.user.username,
                    type: data.asset_contract.asset_contract_type,
                    description: data.asset_contract.description,
                };

                dispatch(fetchPictureSuccess(picture));
            } catch (e) {
                dispatch(fetchPictureFailure(e.message));
            }
        };
        fetch().catch(e => console.error(e));
    }, [dispatch, params, pictures]);

    return (
        <Grid container justifyContent="center" spacing={2}>
            {loading
                ? <Spinner/>
                : picture && <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card>
                        <CardMedia
                            component="div"
                            height="140"
                            image={picture.image}
                            alt={picture.title}
                            sx={{paddingTop: '56.25%', height: 0}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {picture.title}
                            </Typography>
                            {picture.description &&
                                <Typography variant="body2" color="text.secondary">
                                    Description: <b>{picture.description}</b>
                                </Typography>
                            }
                            <Typography variant="body2" color="text.secondary">
                                Created on {new Date(picture.date).toLocaleDateString([], {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric'
                                })}
                            </Typography>
                            {picture.creator &&
                                <Typography variant="body2" color="text.secondary">
                                    Creator: <b>{picture.creator}</b>
                                </Typography>
                            }
                            {picture.owner &&
                                <Typography variant="body2" color="text.secondary">
                                    Owner: <b>{picture.owner}</b>
                                </Typography>
                            }
                            {picture.type &&
                                <Typography variant="body2" color="text.secondary">
                                    Asset contract type: <b>{picture.type}</b>
                                </Typography>
                            }
                        </CardContent>
                    </Card>
                </Grid> }
        </Grid>
    );
};

export default PicPage;