import './stylesheets/base.scss';
import Sidebar from './templates/sidebar.handlebars';

document.addEventListener('DOMContentLoaded', () => {
  // make function calls here
  fetchPizzerias();
});

const fetchPizzerias = () => {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: 'https://pizza-test.herokuapp.com/api/v1/pizzerias',
    success: (data) => {
      // when we get the data back from the API,
      // build the template and pass the data along.
      buildSideBar(data);
    }
  })
};

const buildSideBar = (pizzerias) => {
  const div = document.createElement('div');
  div.innerHTML = Sidebar({
    title: "Hello, Alan!",
    pizzerias: pizzerias
  });
  $('#sidebar').append(div);
};
