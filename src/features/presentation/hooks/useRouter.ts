import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'


export const useRouter = () => {
    const navigation = useNavigation()

    const handleReplace = (route: string, state: any) => {

        navigation.dispatch(StackActions.replace(route, state))
    }
    const handlePush = (route: string, state: any) => {

        navigation.dispatch(StackActions.push(route, state))
    }
    const handlePop = (route: string, state: any) => {

        navigation.dispatch(StackActions.pop())
    }
  return {
    handleReplace,
    handlePush,
    handlePop
  }
}
