import { user } from 'osenv';
import React from 'react';

import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Box from '../../components/ui/Box/Box';
import Hover from '../../components/custom/Hover/Hover';
import List from '../../components/custom/List/List';
import Search from '../../components/custom/Search/Search';
import Request from '../../components/custom/Request/Request';
import useInput from '../../utils/HOC/customHooks/useInput';

const CustomPage = () => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username.value, password.value)
  };

  return (
    <div>
      <PageTitle title="Кастомные хуки" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          {...username}
        />
        <input
          type="password"
          placeholder="Пароль"
          {...password}
        />
        <button type="submit">Отправить</button>
      </form>

      <Box pt={50}>
        <Request />
      </Box>

      <Hover />

      <Box pt={50}>
        <Search />
      </Box>

      <Box pb={50}>
        <List />
      </Box>
    </div>
  )
}

export default CustomPage;
