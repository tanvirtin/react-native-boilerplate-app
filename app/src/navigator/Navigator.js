import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import HomeContainer from '../containers/HomeContainer';
import DrawerContainer from '../containers/DrawerContainer';

const Drawer = DrawerNavigator({
    // The screens below will have the ability from left to access the drawer class
    Home: {screen: HomeContainer}
}, {
    // contentComponent means that we can define our own view component inside the drawer
    contentComponent: props => <DrawerContainer {...props}/>,
    // the options below are mandatory to avoid an error generated when contentComponent is used
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});


export const Navigator = StackNavigator({
    // The first screen in the program will be the LoginContainer, aliased by the Login attribute
    Login: {screen: LoginContainer},
    // Then the second index in the stack will be the RegisterContainer, aliased by the Register attribute
    Register: {screen: RegisterContainer},
    // The third index will be another navigation stack itself, this stack will contain all the components
    // which will have access to the drawer, or in other words the screen can be swiped from the left on these
    // screens to access the drawer.
    // The navigation stack which contains components with drawer can be named anything else, you can rename this from Home to ViewsWithDrawer
    // but after login is complete instead of navigating with the string 'Home' you can use the string 'ViewsWithDrawer' if you rename it.
    Home: {screen: Drawer},
}, {
    headerMode: 'none'
});
