import { PERMISSIONS, request } from 'react-native-permissions';

export type PermissionType = keyof typeof PERMISSIONS.IOS;

export const requestPermission = async (permissionType: PermissionType, reason: string) => {
  const status = await request(PERMISSIONS.IOS[permissionType]);
  
  if (status !== 'granted') {
    console.log(`Permission ${permissionType} denied or restricted`);
    console.log(reason);
  }
};
