/* eslint-disable require-jsdoc */
import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';

import { rootStackParamList } from '@navigators/rootStackParams';

export const navigationRef = createNavigationContainerRef<rootStackParamList>();

export function navigate<RouteName extends keyof rootStackParamList, RouteParams extends rootStackParamList[RouteName]>(
  name: RouteName,
  params?: RouteParams | undefined,
) {
  navigationRef.current?.navigate(name as keyof rootStackParamList, params);
}

export function push<RouteName extends keyof rootStackParamList, RouteParams extends rootStackParamList[RouteName]>(
  name: RouteName,
  params?: RouteParams | undefined,
) {
  const pushAction = StackActions.push(name as keyof rootStackParamList, params);
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
