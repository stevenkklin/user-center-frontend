import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'ISME出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> steven github
            </>
          ),
          href: 'https://github.com/stevenkklin',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
