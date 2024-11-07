import React from 'react';

const Sidebar = ({ room, closeSidebar }) => {
  if (!room) return null; 

  const roomInfo = {
    'EMMIT': {
      title: 'Кафедра ЕММІТ',
      image: '../images/images.jpg',
      text: 'Кафедра економіко-математичного моделювання та інформаційних технологій була створена  28 грудня 2007 року для забезпечення фундаментальної підготовки фахівців, що володіють аналітичним мисленням та вміють оцінювати ситуацію, використовують сучасні комп’ютерні технології для створення та супроводження проектів, обґрунтовують та приймають управлінські рішення.'
    },
    'Room 2': {
      title: 'Декан Економічного факультету',
      image: '../images/novosel.jpg',
      text: `
        	<p><strong>Новоселецький Олександр Миколайович</strong>,<br><em>кандидат економічних наук, доцент кафедри економіко-математичного моделювання та інформаційних технологій</em></p> 
	        <p><strong>Контактна інформація:</strong> <br> 
	        <strong>e-mail:</strong> <a href="mailto:oleksandr.novoseletskyy@oa.edu.ua" target="_blank">oleksandr.novoseletskyy@oa.edu.ua</a><br> 
	        <strong>Офісні години: </strong>понеділок - п'ятниця: 8.30-17.30, обідня перерва: 12.30-13.30</p>
      `
    },
    'Room 3': {
      title: 'Деканат Економічного факультету',
      image: '/path/to/room3-image.jpg',
      text: 'Тут деканат'
    },
    'Rector': {
      title: 'Ректор',
      image: '/path/to/room3-image.jpg',
      text: 'Тут сидить ректор'
    },

  };

  const { title, image, text } = roomInfo[room] || {}; 

  return (
    <div style={sidebarStyles}>
      <button onClick={closeSidebar} style={{ marginBottom: '10px' }}>Close</button>
      
      {title && <h2>{title}</h2>}

      {image && <img src={image} alt={title} style={imageStyles} />}

      {text && (
        <div
          style={textStyles}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
};

const sidebarStyles = {
  position: 'fixed',
  right: 0,
  top: 0,
  width: '300px',
  height: '100%',
  background: '#f4f4f4',
  padding: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px',
  overflowY: 'auto', 
  zIndex: 1000
};

const imageStyles = {
  width: '100%', 
  height: 'auto', 
  marginBottom: '15px' 
};

const textStyles = {
  fontSize: '16px',
  lineHeight: '1.6',
  textAlign: 'justify'
};

export default Sidebar;
