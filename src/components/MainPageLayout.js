import React from 'react'
import Navs from './Navs'
import Title from './Title';


const MainPageLayout=({children})=>{
    return (
        <div>
            <Title title="BOX-OFFICE" subTitle="Are you looking for movies and actors."/>
            <Navs />
            {children}
        </div>
    )
}
export default MainPageLayout;