import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
function Movies() {
    const movies = useSelector(selectMovies)
    console.log('movies geliyor ulan ', movies);
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                {movies &&
                    movies.map((movie,index) => (
                        <Wrap key={index}>
                            <img alt="" src={movie.cardImg} />
                        </Wrap>
                    ))
                }
                {/* <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap>
                <Wrap>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU" />
                </Wrap> */}
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding:
`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    margin-bottom:4px;
    cursor:pointer;
    border-radius:10px;
    overflow:hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width:100%;
        heigth:100%;
        object-fit:cover;
    }
    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color:rgba(250, 250, 250, 0.8)
    }
`