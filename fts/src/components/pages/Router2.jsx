import React, {useEffect, useState}from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Season1 from './series/Season1';
import SeasonHome from './series/SeasonHome';

function Router2(){

    return (
<>  

<Routes>
<Route  path='/' element={<SeasonHome />} />
<Route path='/season1' element={<Season1 />} />
</Routes>


    </>
    )
}
export default Router2