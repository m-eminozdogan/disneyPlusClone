import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <div>
            <Nav>
                <Logo src='/images/logo.svg'/>
                <NavMenu>
                    <a>
                        <img src='/images/home-icon.svg'/>
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src='/images/search-icon.svg'/>
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src='/images/watchlist-icon.svg'/>
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src='/images/original-icon.svg'/>
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src='/images/movie-icon.svg'/>
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src='/images/series-icon.svg'/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg src="https://scontent.fist2-3.fna.fbcdn.net/v/t1.6435-1/c0.25.200.200a/p200x200/48035070_2266390030272527_2164551719185285120_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=a_5pKjldDcwAX8JZS5y&_nc_ht=scontent.fist2-3.fna&oh=00_AT_j2o8MAARWXndYG7uiAM4Nzw5ojKPVr1cADaJvnHMytA&oe=61E1F4C3" />
            </Nav>
        </div>
    )
}

export default Header

const Nav =styled.nav`
    overflow-x:hidden;
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;    

`
const Logo=styled.img`
    width:80px;
    
`
const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        cursor:pointer;
        display:flex;
        align-items:center;
        padding:0 12px;
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
const UserImg=styled.img`
    width:48px;
    heigth:48px;
    border-radius:50%;
    cursor:pointer;
`