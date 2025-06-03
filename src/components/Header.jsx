import {
    CContainer,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNavbar,
    CNavbarBrand,
    CNavbarText
} from '@coreui/react';
import {useAuth} from "../AuthContext";
import StartDateDisplay from "./StarDateDisplay";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <CNavbar colorScheme="dark" className="bg-dark">
            <CContainer fluid>
                <CNavbarBrand className="text-white" href="/">LogBook</CNavbarBrand>
                <CNavbarText className="text-white">
                    <StartDateDisplay />
                </CNavbarText>
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
