import { Route } from 'react-keeper'

import PageNav from './pages/nav';
import PageEntry from './pages/entry';
import PageDisplay from './pages/display';

const PageHome= {
    page : require('./PageHome') ,
    route : ()=>{ return ( 
        <div>
            <Route index component={PageHome.page} path= '/home' >
                <PageNav.route />
                <PageEntry.route />
                <PageDisplay.route />
                
            </Route>
        </div>
    )}
}

export default PageHome