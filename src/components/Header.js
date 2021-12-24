import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function Header() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }
        })
    }, [])



    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                //console.log(user);
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                //const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                //const email = error.email;
                // The AuthCredential type that was used.
                //const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage)
            });
    }

    function handleSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(setSignOut())
            navigate('/login')
        }).catch((error) => {
            // An error happened.
            alert('çıkış yapılırken hata')
        });
    }

    return (
        <div>
            <Nav>
                <Logo src='/images/logo.svg' />
                {!userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>
                            LOGIN
                        </Login>
                    </LoginContainer>
                ) : (
                    <>
                        <NavMenu>
                            <a href="/">
                                <img src='/images/home-icon.svg' alt="" />
                                <span>HOME</span>
                            </a>
                            <a href="#">
                                <img src='/images/search-icon.svg' alt="" />
                                <span>SEARCH</span>
                            </a>
                            <a href='#'>
                                <img src='/images/watchlist-icon.svg' alt="" />
                                <span>WATCHLIST</span>
                            </a>
                            <a href='#'>
                                <img src='/images/original-icon.svg' alt="" />
                                <span>ORIGINALS</span>
                            </a>
                            <a href='#'>
                                <img src='/images/movie-icon.svg' alt="" />
                                <span>MOVIES</span>
                            </a>
                            <a href='#'>
                                <img src='/images/series-icon.svg' alt="" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <UserImg onClick={handleSignOut} alt="" src={userPhoto} />

                        {/*<UserImg onClick={handleSignOut} alt="" src="https://scontent.fist2-3.fna.fbcdn.net/v/t1.6435-1/c0.25.200.200a/p200x200/48035070_2266390030272527_2164551719185285120_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=a_5pKjldDcwAX8JZS5y&_nc_ht=scontent.fist2-3.fna&oh=00_AT_j2o8MAARWXndYG7uiAM4Nzw5ojKPVr1cADaJvnHMytA&oe=61E1F4C3" />*/}

                    </>)

                }

            </Nav>
        </div>
    )
}

export default Header

const Nav = styled.nav`
    overflow-x:hidden;
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;    

`
const Logo = styled.img`
    width:80px;
    
`
const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`
const Login = styled.div`
    cursor:pointer;
    border:1px solid #f9f9f9;
    border-radius:4px;
    padding:8px 16px;
    letter-spacing:1.5px;
    background-color:rgba(0,0,0, 0.6);
    transition:all 0.2s ease 0s;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        cursor:pointer;
        display:flex;
        align-items:center;
        padding:0 12px;
        color:white;
        text-decoration:none;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing: 1.42px;
            position:relative;
            &:after{
                content:'';
                position:absolute;
                height:2px;
                left:0; right:0; bottom:-6px;
                background:white;
                opacity:0;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
            }
       }
       &:hover{
           span:after{
               transform:scaleX(1);
               opacity:1;
           }
       }
    }
`
const UserImg = styled.img`
    width:48px;
    heigth:48px;
    border-radius:50%;
    cursor:pointer;
`