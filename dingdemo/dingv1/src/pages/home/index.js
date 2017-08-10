import { Route } from 'react-keeper'

import PageNav from './pages/nav';
import PageEntry from './pages/entry';
import PageDisplay from './pages/display';
import PageFeedBack from './pages/feedback';
import PageOther from './pages/other';

const PageHome= {
    page : require('./PageHome.jsx') ,
    route : ()=>{ return ( 
        <div>
            <Route index component={PageHome.page} path= '/home' >
                <PageNav.route />
                <PageEntry.route />
                <PageFeedBack.route />
                <PageOther.route /> 
            </Route>

            <PageDisplay.route />
        </div>
    )}
}

export default PageHome