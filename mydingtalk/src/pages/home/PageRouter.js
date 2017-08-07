import { Route } from 'react-keeper'
import Page from './PageHome';
import nav from './nav';
import entry from './entry';
import display from './display';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/home' >
            	<Route index component={nav} path= '/nav' />
                
                <Route component={display} path='/display' />
            </Route>
            <Route component={entry} path='/entry/:formId' />
        </div>)
};
