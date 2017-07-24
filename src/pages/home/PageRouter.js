import { Route } from 'react-keeper'
import Page from './PageHome';
import nav from './nav';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/home' >

            </Route>
            <Route component={nav} path= '/nav' />
        </div>)
};
