import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
    const year = new Date()
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>
                        <Footer.CwayLogo style={{ height: "60px" }} src="assets/home.svg" alt='yayay' />
                        </Footer.Title>
                        <Footer.Link href="#"><Footer.CwayLogo style={{ height: "15px" }} src="assets/address-icon.svg" alt='address' /> Story</Footer.Link>
                        <Footer.Link href="#"><Footer.CwayLogo style={{ height: "15px" }} src="assets/callus.svg" alt='callus' /> Clients</Footer.Link>
                        <Footer.Link href="#"><Footer.CwayLogo style={{height:"15px"}} src="assets/email.svg" alt='email' /> Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Company</Footer.Title>
                        <Footer.Link href="#">About Us</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms & Conditions</Footer.Link>
                        <Footer.Link href="#">Contact Us</Footer.Link>
                        <Footer.Link href="#">Support Center</Footer.Link>
                        <Footer.Link href="#">Careers</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Account</Footer.Title>
                        <Footer.Link href="#">Sign In</Footer.Link>
                        <Footer.Link href="#">View Cart</Footer.Link>
                        <Footer.Link href="#">Track My Order</Footer.Link>
                        <Footer.Link href="#">View All Order</Footer.Link>
                        <Footer.Link href="#">Favorite</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Information</Footer.Title>
                        <Footer.Link href="#">Help FAQ's</Footer.Link>
                        <Footer.Link href="#">Store Location</Footer.Link>
                        <Footer.Link href="#">Feedback for us</Footer.Link>

                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Payment</Footer.Title>
                        <Footer.Link href="#">Wallet</Footer.Link>
                        {/* <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Wallet</Footer.Link> */}

                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>App & Payment</Footer.Title>
                        <Footer.Link href="#">Install CWAY Home App from App  <br></br>Store or Google Play </Footer.Link>
                        <Footer.Link href="#">
                            <Footer.CwayLogo style={{ height: "30px" }} src="assets/applestore.svg" alt='yayay' />
                            <Footer.CwayLogo style={{ height: "30px" }} src="assets/googleplay.svg" alt='yayay' />
                        </Footer.Link>
                        <Footer.Link href="#">Secured Payment Gateways</Footer.Link>
                        <Footer.Link href="#"> <Footer.CwayLogo style={{height:"25px"}} src="assets/paymentmethod.svg" alt='payment' /></Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Horizontal></Footer.Horizontal>
                        <Footer.Copy>2022  <Footer.Link> CWAY Home Store </Footer.Link> - All rights reserved</Footer.Copy>
                        
                        

                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}