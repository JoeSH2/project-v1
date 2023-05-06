import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemesProvider';
import { ArticleBlockType, ArticleType } from 'entity/Article/model/types/Article';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';

import { ArticleSortField } from 'features/ArticleSort';
import { ArticleCard } from './ArticleCard';

export default {
  title: 'shared/ArticleCard',
  component: ArticleCard,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ArticleCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  article: {
    id: '1',
    user: {
      id: 1,
      username: 'Smile',
      avatar: undefined,
    },
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://media.tproger.ru/uploads/2017/04/11-js-tricks.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
    ],
  },
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.DEFAULT)];
