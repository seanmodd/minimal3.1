import PropTypes from 'prop-types';
// guards
import AuthGuard from 'src/guards/AuthGuard';
// components
import MainLayout from 'src/layouts/main';
import DashboardLayout from 'src/layouts/dashboard';
import LogoOnlyLayout from 'src/layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['dashboard', 'main', 'logoOnly']),
};

export default function Layout({ variant = 'dashboard', children }) {
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === 'main') {
    return <MainLayout>{children}</MainLayout>;
  }

  return (
    // <AuthGuard>
    <DashboardLayout> {children} </DashboardLayout>
    // </AuthGuard>
  );
}
