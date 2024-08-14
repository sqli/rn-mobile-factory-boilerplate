/* eslint-disable require-jsdoc */
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

import { RootStackParamList } from '@models/navigators/RootStackParams';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<
  RouteName extends keyof RootStackParamList,
  RouteParams extends RootStackParamList[RouteName],
>(name: RouteName, params?: RouteParams | undefined) {
  navigationRef.current?.navigate(name as keyof RootStackParamList, params);
}

export function push<
  RouteName extends keyof RootStackParamList,
  RouteParams extends RootStackParamList[RouteName],
>(name: RouteName, params?: RouteParams | undefined) {
  const pushAction = StackActions.push(name as keyof RootStackParamList, params);
  navigationRef.current?.dispatch(pushAction);
}

export async function goBack(): Promise<unknown> {
  const backAction = CommonActions.goBack();
  return navigationRef.current?.dispatch(backAction);
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}

export default {
  navigate,
  push,
  goBack,
  getCurrentRoute,
};
