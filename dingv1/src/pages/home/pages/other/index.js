import { Route } from 'react-keeper'

const PageOther= {
    page : require( './PageOther' ) ,
    route : ()=>{ return ( <Route index component={ PageOther.page } path= 'other/:id' /> )}
}

export default PageOther