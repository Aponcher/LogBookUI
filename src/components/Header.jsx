import { CNavbar, CContainer, CNavbarBrand, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import {useAuth} from "../AuthContext";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <CNavbar colorScheme="dark" className="bg-dark">
            <CContainer fluid>
                <CNavbarBrand href="/">LogBook</CNavbarBrand>
                {user && (
                    <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary">
                            {user.username || 'User'}
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={logout}>Logout</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                )}
            </CContainer>
        </CNavbar>
    );
};

export default Header;
