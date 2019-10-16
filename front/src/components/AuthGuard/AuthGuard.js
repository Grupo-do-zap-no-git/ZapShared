import React, { Fragment } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import useRouter from 'utils/useRouter';

// Example of user roles: ['GUEST', 'USER', 'ADMIN'];

const AuthGuard = props => {
  const { children } = props;

  // const session = useSelector(state => state.session);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session.logged) {
  //     router.history.push('/');
  //     return;
  //   }
  // }, [router]);

  return <Fragment>{children}</Fragment>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.array.isRequired
};

AuthGuard.defaultProps = {
  roles: []
};

export default AuthGuard;
