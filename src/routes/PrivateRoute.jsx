
import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hook/useAuth'

const PrivateRoute = ({children}) => {
     const { user, loading } = useAuth()
    const location = useLocation()
  
    if (loading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace='true' />
  }
  
  PrivateRoute.propTypes = {
    children: PropTypes.element,
  
};

export default PrivateRoute;