import styles from './Menu.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { UserActions } from '../../store/user.slice';
import getActiveUser from '../../helpers/getActiveUser';

function Menu() {
  const favoriteCounter = useSelector((s: RootState) => s.favorites.users);
  const activeUser = getActiveUser()
  const favoriteList = favoriteCounter.find((u) => u.id == activeUser?.id);
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(UserActions.logout());
  };
  return (
    <div className={styles['menu']}>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          cn(styles['menu-link'], { [styles['active']]: isActive })
        }
      >
        Поиск фильмов
      </NavLink>
      <NavLink
        to={'/favorites'}
        className={({ isActive }) =>
          cn(styles['menu-link'], { [styles['active']]: isActive })
        }
      >
        Мои фильмы
        {favoriteList?.movies.length ? (
          <span className={styles['counter']}>
            {favoriteList.movies.length}
          </span>
        ) : (
          <></>
        )}
      </NavLink>
      {activeUser ? (
        <a href='#' className={cn(styles['user'])}>
          {activeUser.name}
          <img src='/user.svg' alt='иконка пользователя' className='icon' />
        </a>
      ) : (
        ''
      )}
      {activeUser ? (
        <button
          onClick={logout}
          className={cn(styles['menu-link'], styles['login'])}
        >
          Выйти
        </button>
      ) : (
        <NavLink
          to={'/login'}
          className={({ isActive }) =>
            cn(styles['menu-link'], styles['login'], {
              [styles['active']]: isActive
            })
          }
        >
          Войти
          <img src='/login.svg' alt='иконка двери' className='icon' />
        </NavLink>
      )}
    </div>
  );
}

export default Menu;
