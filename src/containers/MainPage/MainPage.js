import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPicturesFailure, fetchAllPicturesRequest, fetchAllPicturesSuccess} from "../../store/actions";
import axios from "axios";
import {Grid} from "@mui/material";
import Spinner from "../../components/UI/Spinner/Spinner";
import PictureCard from "../../components/PictureCard/PictureCard";

const MainPage = () => {
    const dispatch = useDispatch();
    const allPictures = useSelector(state => state.pictures);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        const fetch = async () => {
            try{
                dispatch(fetchAllPicturesRequest());

                const response = await axios('https://api.opensea.io/api/v1/assets?format=json');

                const data = response.data.assets;
                console.log(response.data.assets);
                const pictures = data.map(pic => {
                    return ({
                        title: pic.name || pic.collection.name,
                        id: pic.token_id,
                        address: pic.asset_contract.address,
                        image: pic.image_url || pic.asset_contract.image_url
                    });

                });
                console.log(pictures);
                dispatch(fetchAllPicturesSuccess(pictures));
            } catch (e) {
                dispatch(fetchAllPicturesFailure(e.message));
            }
        };
        fetch().catch(e => console.error(e));
        console.log(allPictures);
        console.log(loading);
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            {loading
                ? <Spinner/>
                : <Grid item container spacing={3}>
                    {allPictures.map((pic, index) => (
                        <PictureCard
                            key={index}
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