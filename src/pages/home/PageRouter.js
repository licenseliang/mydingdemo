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
            </Route>
            <Route component={nav} path= '/nav' />
            <Route component={entry} path='/entry/:formId' />
            <Route component={display} path='/display' />
        </div>)
};
