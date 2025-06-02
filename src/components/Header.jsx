import { CNavbar, CContainer, CNavbarBrand, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import {useAuth} from "../AuthContext";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <CNavbar colorScheme="dark" className="bg-dark">
            <CContainer fluid>
                <CNavbarBrand className="text-white" href="/">LogBook</CNavbarBrand>
                {user && (
                    <div className="d-flex align-items-center">
                        <CDropdown variant="nav-item">
                            <CDropdownToggle color="secondary">
                                {user.id || 'User'}
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem onClick={logout}>Logout</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </div>
                )}
            </CContainer>
        </CNavbar>
    );
};

export default Header;
