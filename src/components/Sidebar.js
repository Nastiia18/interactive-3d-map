import React from 'react';

const Sidebar = ({ room, closeSidebar }) => {
  if (!room) return null; // Don't render if no room is selected

  // Room-specific information including title, image, and text
  const roomInfo = {
    'EMMIT': {
      title: 'Кафедра ЕММІТ',
      image: '../images/images.jpg', // Replace with actual image path
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
    // Add more rooms and their content as needed
  };

  const { title, image, text } = roomInfo[room] || {}; // Extract the info for the selected room

  return (
    <div style={sidebarStyles}>
      <button onClick={closeSidebar} style={{ marginBottom: '10px' }}>Close</button>
      
      {/* Render title */}
      {title && <h2>{title}</h2>}

      {/* Render image */}
      {image && <img src={image} alt={title} style={imageStyles} />}

      {/* Render text with HTML tags */}
      {text && (
        <div
          style={textStyles}
          dangerouslySetInnerHTML={{ __html: text }} // Inject HTML content safely
        />
      )}
    </div>
  );
};

// Inline styles for the sidebar (positioned on the right)
const sidebarStyles = {
  position: 'fixed',
  right: 0,
  top: 0,
  width: '300px',
  height: '100%',
  background: '#f4f4f4',
  padding: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px',
  overflowY: 'auto', // Allow scrolling if there's too much content
  zIndex: 1000
};

// Style for the image
const imageStyles = {
  width: '100%', // Make the image take full width of the sidebar
  height: 'auto', // Maintain aspect ratio
  marginBottom: '15px' // Add some spacing below the image
};

// Style for the text
const textStyles = {
  fontSize: '16px',
  lineHeight: '1.6',
  textAlign: 'justify' // Make the text nicely aligned
};

export default Sidebar;
