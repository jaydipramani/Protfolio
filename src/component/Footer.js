import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <Layout>
                <span>Rights</span>
                <Link href={"/"}>CodeBucks</Link>
                <Link href={"/"}>Say Hello</Link>
            </Layout>

        </footer>
    )
}

export default Footer;