/**
 * This file is a wrapper that allows for isomorphic rendering of the application, and is also the main entry point for webpack.
 * You can include any MainComponent. Here, we're including the QuickCommerce app itself.
 */
if (!global.setTimeout) {
    global.setTimeout = function() {}
}

if (!global.setInterval) {
    global.setInterval = function() {}
}

import React from 'react'
import ReactDOM from 'react-dom'
import {renderToString} from 'react-dom/server'

import {inject, observer, Provider} from 'mobx-react'

// Start App imports
import AppDispatcher from 'quickcommerce-react/dispatcher/AppDispatcher.jsx'
import AuthenticatedApp from 'quickcommerce-react/components/AuthenticatedApp.jsx'

import LoginActions from 'quickcommerce-react/actions/LoginActions.jsx'
import UserActions from 'quickcommerce-react/actions/UserActions.jsx'
import CustomerActions from 'quickcommerce-react/actions/CustomerActions.jsx'
import CustomerListActions from 'quickcommerce-react/actions/CustomerListActions.jsx'
import CustomerSearchActions from 'quickcommerce-react/actions/CustomerSearchActions.jsx'
//import OmniSearchActions from 'quickcommerce-react/actions/OmniSearchActions.jsx'
import CartActions from 'quickcommerce-react/modules/cart/CartActions.jsx'
import CheckoutActions from 'quickcommerce-react/actions/CheckoutActions.jsx'
import CatalogActions from 'quickcommerce-react/actions/BrowserActions.jsx'
import ProductActions from 'quickcommerce-react/actions/ProductActions.jsx'
import SettingActions from 'quickcommerce-react/actions/SettingActions.jsx'

import AuthService from 'quickcommerce-react/services/AuthService.jsx'
import UserService from 'quickcommerce-react/services/UserService.jsx'
//import LoginService from 'quickcommerce-react/services/LoginService.jsx'
import CustomerService from 'quickcommerce-react/services/CustomerService.jsx'
import CustomerAddressService from 'quickcommerce-react/services/CustomerAddressService.jsx'
import ProductService from 'quickcommerce-react/services/ProductService.jsx'
import CheckoutService from 'quickcommerce-react/services/CheckoutService.jsx'

import { LoginStore } from 'quickcommerce-react/stores/LoginStore.jsx'
import { UserStore } from 'quickcommerce-react/stores/UserStore.jsx'
import { CustomerStore } from 'quickcommerce-react/stores/CustomerStore.jsx'
//import { CustomerListStore } from 'quickcommerce-react/stores/CustomerListStore.jsx'
import { ProductStore } from 'quickcommerce-react/stores/ProductStore.jsx'
import { CartStore } from 'quickcommerce-react/modules/cart/CartStore.jsx'
import { CheckoutStore } from 'quickcommerce-react/stores/CheckoutStore.jsx'
import { BrowserStore as CatalogStore } from 'quickcommerce-react/stores/BrowserStore.jsx'
import { SettingStore } from 'quickcommerce-react/stores/SettingStore.jsx'
import { StarMicronicsStore } from 'quickcommerce-react/stores/StarMicronicsStore.jsx'

import FluxHelper from 'quickcommerce-react/helpers/Flux.js'
import HashProxy from 'quickcommerce-react/utils/HashProxy.js'

const dispatcher = AppDispatcher

// Initialize stores
const settingStore = new SettingStore(dispatcher)
const loginStore = new LoginStore(dispatcher)
const userStore = new UserStore(dispatcher)
const customerStore = new CustomerStore(dispatcher)
//const customerListStore = new CustomerListStore(dispatcher)
const productStore = new ProductStore(dispatcher)
const cartStore = new CartStore(dispatcher)

let checkoutStoreStores = new HashProxy()
checkoutStoreStores['setting'] = settingStore
checkoutStoreStores['cart'] = cartStore
const checkoutStore = new CheckoutStore(dispatcher, checkoutStoreStores)

const catalogStore = new CatalogStore(dispatcher)
const starMicronicsStore = new StarMicronicsStore(dispatcher)

//FluxHelper.bindActionCreators()

const actionRegistry = new HashProxy()

let actionCreators = [
    { key: 'user', value: UserActions },
    { key: 'login', value: LoginActions },
    { key: 'customer', value: CustomerActions },
    //{ key: 'customerList', value: CustomerListActions },
    //{ key: 'customerSearch', value: CustomerSearchActions },
    //{ key: 'omniSearch', value: OmniSearchActions },
    { key: 'product', value: ProductActions },
    { key: 'cart', value: CartActions },
    { key: 'catalog', value: CatalogActions },
    { key: 'checkout', value: CheckoutActions },
    { key: 'setting', value: SettingActions }
]

function registerActions(registry, dispatcher, actionCreators) {	 
	if (!actionCreators instanceof Array) {
		throw new Error('registerActions expects an array of actionCreators')
	}
	
	return actionCreators.reduce((registry, obj) => {
		const action = obj.value(dispatcher)
		registry[obj.key] = action
		return registry
	}, registry)
}

registerActions(actionRegistry, dispatcher, actionCreators)

const authService = new AuthService({ actions: actionRegistry })
const userService = new UserService({ actions: actionRegistry })
const customerService = new CustomerService({ actions: actionRegistry })
const customerAddressService = new CustomerAddressService({ actions: actionRegistry })
const productService = new ProductService({ actions: actionRegistry })
const checkoutService = new CheckoutService({ 
    actions: actionRegistry,
    stores: {
        checkout: checkoutStore,
        setting: settingStore,
        customer: customerStore
    }
})

import MainComponent from './main.jsx'

import config from '../../config.js'
//import instagramStore from '../../config.js'
import instagramFeed from '../../instagram-feed.json'
//import steps from '../../step-config.js'
//import homepageSteps from '../../step-config-home.js'

import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
const theme = getMuiTheme()

if ('undefined' !== typeof document) {
    ReactDOM.render(
        <Provider 
                config = {config}
                instagramFeed = {instagramFeed} 
                dispatcher = {dispatcher}
                actions = {actionRegistry}
                authService = {authService}
                customerService = {customerService}
                customerAddressService = {customerAddressService}
                productService = {productService}
                checkoutService = {checkoutService}
                userStore = {userStore}
                loginStore = {loginStore}
                customerStore = {customerStore}
                catalogStore = {catalogStore}
                productStore = {productStore}
                cartStore = {cartStore}
                checkoutStore = {checkoutStore}
                settingStore = {settingStore}>
                <AuthenticatedApp>
                    <MainComponent />
                </AuthenticatedApp>
            </Provider>,
        document.getElementById('react-ws')
    )
} else {
    print(renderToString(<MainComponent />))
}