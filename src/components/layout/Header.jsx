import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">김경진의 블로그</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />
				<Navbar.Offcanvas
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
					placement="end"
				>
					<Nav className="ml-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">
								Offcanvas
							</Offcanvas.Title>
						</Offcanvas.Header>
					</Nav>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default Header;
