import { Route, Routes  } from 'react-router';

// Page imports
import App from './pages/App';

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    )
}