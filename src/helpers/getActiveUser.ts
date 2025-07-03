import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function getActiveUser() {
  return useSelector((s: RootState) => s.users.activeUser);
}

export default getActiveUser;
