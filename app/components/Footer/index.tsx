import Link from 'next/link';
import React from 'react';
import styles from './footer.module.scss'

const data = {
    link: 'Политика по защите персональных данных',
    orgName: 'ООО «ВЕНДИТИО»',
    orgData: 'УНП:193703004, ОКПО 507443135000'
};

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.innerWrapper}>
                    {data.orgName}
                  <br/>
                    {data.orgData}
                    <Link href='/privacy-policy' className={styles.link}>{data.link}</Link>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
