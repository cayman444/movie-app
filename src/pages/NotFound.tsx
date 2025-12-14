import { Button, Flex, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Result
        status="404"
        title="404"
        subTitle="Страница, которую вы посетили, не существует"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Вернуться на главную
          </Button>
        }
      />
    </Flex>
  );
};

export default NotFound;
