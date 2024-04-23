import { PERMISSIONS, request } from 'react-native-permissions';

export type PermissionType = keyof typeof PERMISSIONS.IOS;

export const requestPermission = async (permissionType: PermissionType) => {
  await request(PERMISSIONS.IOS[permissionType]);
};
