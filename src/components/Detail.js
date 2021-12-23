import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { doc, onSnapshot } from 'firebase/firestore'



function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        //grab movie info from database
        const unsub = onSnapshot(doc(db, "movies", id), (doc) => {
            //console.log("Current data: ", doc.data());
            setMovie(doc.data())

        });
    }, [])

    console.log('movie found: ', movie);

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img alt="" src={movie.backgroundImg} />
                    </Background>
                    <ImageTitle>
                        <img alt="" src={movie.titleImg} />
                    </ImageTitle>
                    <Controls>

                        <PlayButton>
                            <img alt="" src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>

                        <TrailerButton>
                            <img alt="" src="/images/play-icon-white.png" />
                            <span>TRAILER</span>
                        </TrailerButton>

                        <AddButton>
                            <span>+</span>
                        </AddButton>

                        <GroupWatchButton>
                            <img alt="" src="/images/group-icon.png" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>
            )}
        </Container>
    )
}

export default Detail
const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
    position:fixed;
    top:0;left:0;right:0;bottom:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const ImageTitle = styled.div`
    height:30vh;
    min-height:175px;
    min-widht:200px;
    width:30vw;
    margin-top:60px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items:center;
`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:46px;
    background:rgb(249,249,249);
    border:none;
    padding:0px 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    cursor:pointer;
    &:hover{
        background:rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid white;
    color:white;
`
const AddButton = styled.button`
    cursor:pointer;
    width:44px;
    height:44px;
    margin-right:16px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.5);
    span{
        font-size:30px;
        color:white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background:black;
`
const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`
const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
    width:760px;
`