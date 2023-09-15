import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import filingIcon from '../../../public/filings.png'

const Footer: React.FC = () => {
    const defaultMessage = 'Jay';
    const currentYear = new Date().getFullYear();
    // @ts-ignore
    return (
        <DefaultFooter
            style={{
                background: 'none',
            }}
            copyright={`${currentYear} ${defaultMessage}`}
            links={[
                {
                    key: 'Ant Design Pro',
                    title: 'Tiger API',
                    href: 'http://api.codejay.icu',
                    blankTarget: true,
                },
                {
                    key: 'github',
                    title: <GithubOutlined />,
                    href: 'https://github.com/harmony666',
                    blankTarget: true,
                },
                {
                    key: 'Ant Design',
                    title: 'Ant Design',
                    href: 'https://ant.design',
                    blankTarget: true,
                },
                {
                    key: 'filings',
                    title:(
                        <span>
                            <img src={filingIcon} alt="备案图标" style={{marginRight:8}}/>
                             陕ICP备2023011748号-1
                        </span>
                    ),
                    href: 'https://beian.miit.gov.cn',
                    blankTarget: true,
                },
            ]}
        />
    );
};
export default Footer;
