const Footer = () => {

    return (

        <>
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                    <div className="mb-2 mb-md-0">
                        ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>2023
                        , made with ❤️ by &nbsp;
                        <a href="https://axionicsoftware.com/" target="_blank" className="footer-link fw-bolder">Axionic Software</a>
                    </div>
                    <div>
                        <a  className="footer-link me-4" target="_blank">License</a>
                        <a  target="_blank" className="footer-link me-4">More Themes</a>

                        <a target="_blank" className="footer-link me-4">Documentation</a>

                        <a target="_blank" className="footer-link me-4">Support</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer