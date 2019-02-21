import React from 'react';
import { Navigation } from "react-native-navigation";

Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            id: 'App',
            children: [
              {
                component: {
                  id: 'Home',
                  name: 'Home',
                }
              },
              {
                component: {
                  id: 'List',
                  name: 'List'
                }
              }
            ],
          }
        }
      ]

    }
  }
});