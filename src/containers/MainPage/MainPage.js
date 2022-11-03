import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Grid} from "@mui/material";
import {fetchAllPicturesFailure, fetchAllPicturesRequest, fetchAllPicturesSuccess} from "../../store/actions";
import Spinner from "../../components/UI/Spinner/Spinner";
import PictureCard from "../../components/PictureCard/PictureCard";
import {apiUrl} from "../../config";

const MainPage = () => {
    const dispatch = useDispatch();
    const allPictures = useSelector(state => state.pictures);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        const fetch = async () => {
            try{
                dispatch(fetchAllPicturesRequest());

                const response = await axios(apiUrl + '/assets?format=json');
                const data = response.data.assets;

                const pictures = data.map(pic => {
                    return ({
                        title: pic.name || pic.collection.name,
                        id: pic.id,
                        token: pic.token_id,
                        address: pic.asset_contract.address,
                        image: pic.image_url || pic.asset_contract.image_url
                    });
                });

                dispatch(fetchAllPicturesSuccess(pictures));
            } catch (e) {
                dispatch(fetchAllPicturesFailure(e.message));
            }
        };
        fetch().catch(e => console.error(e));
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            {loading
                ? <Spinner/>
                : <Grid item container spacing={3}>
                    {allPictures.map(pic => (
                        <PictureCard
                            key={pic.id}
                            id={pic.id}
                            address={pic.address}
                            title={pic.title}
                            img={pic.image}
                        />
                    ))}
                </Grid>
            }
        </Grid>
    );
};

export default MainPage;