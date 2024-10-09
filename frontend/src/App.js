// import React, { useEffect, useState } from 'react';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import { io } from 'socket.io-client';
// import {
//   Container,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   Typography,
//   Box,
// } from '@mui/material';

// // Initialize the socket connection
// const socket = io('http://localhost:7000');

// function App() {
//   const [messages, setMessages] = useState([]); // State to hold all messages (sent + received)
//   const [input, setInput] = useState(''); // State to hold the input message

//   // Effect to listen for incoming messages from the server
//   useEffect(() => {
//     // Listen for 'chat message' events from the server
//     socket.on('chat message', (msg) => {
//       // Add the received message to the message array with a timestamp
//       const messageObj = {
//         text: msg,
//         isSent: false, // Mark as received
//         timestamp: new Date(), // Add timestamp
//       };
//       setMessages((prevMessages) => [...prevMessages, messageObj]);
//     });

//     // Cleanup listener on component unmount
//     return () => {
//       socket.off('chat message'); // Remove listener to prevent memory leaks
//     };
//   }, []);

//   // Function to send messages
//   const sendMessage = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (input) {
//       // Emit the message to the server
//       socket.emit('chat message', input);

//       // Add the sent message to the message array with a timestamp
//       const messageObj = {
//         text: input,
//         isSent: true, // Mark as sent
//         timestamp: new Date(), // Add timestamp
//       };
//       setMessages((prevMessages) => [...prevMessages, messageObj]);

//       setInput(''); // Clear input field after sending
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <Typography variant="h4" align="center" gutterBottom>
//           Chat Application
//         </Typography>

//         <Box
//           component="form"
//           onSubmit={sendMessage}
//           sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
//         >
//           <TextField
//             variant="outlined"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             label="Type your message"
//             fullWidth
//           />
//           <Button type="submit" variant="contained" sx={{ ml: 2 }}>
//             Send
//           </Button>
//         </Box>

//         <Box sx={{ mt: 2 }}>
//           <List>
//             {messages.map((msg, index) => (
//               <ListItem
//                 key={index}
//                 sx={{
//                   justifyContent: msg.isSent ? 'flex-end' : 'flex-start',
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     backgroundColor: msg.isSent ? '#3f51b5' : '#e0e0e0',
//                     color: msg.isSent ? 'white' : 'black',
//                     borderRadius: '10px',
//                     padding: '8px',
//                     maxWidth: '70%',
//                   }}
//                 >
//                   {msg.text} {/* Display the text of the message */}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import { io } from 'socket.io-client';
// import {
//   Container,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   Typography,
//   Box,
// } from '@mui/material';

// // Initialize the socket connection
// const socket = io('http://localhost:7000');

// function App() {
//   const [messages, setMessages] = useState([]); // State to hold all messages (sent + received)
//   const [input, setInput] = useState(''); // State to hold the input message

//   // Effect to listen for incoming messages from the server
//   useEffect(() => {
//     // Listen for 'chat message' events from the server
//     socket.on('chat message', (msg) => {
//       // Add the received message to the message array with a timestamp
//       const messageObj = {
//         text: msg,
//         isSent: false, // Mark as received
//         timestamp: new Date(), // Add timestamp
//       };
//       setMessages((prevMessages) => {
//         const newMessages = [...prevMessages, messageObj];
//         newMessages.sort((a, b) => a.timestamp - b.timestamp); // Sort by timestamp
//         return newMessages;
//       });
//     });

//     // Cleanup listener on component unmount
//     return () => {
//       socket.off('chat message'); // Remove listener to prevent memory leaks
//     };
//   }, []);

//   // Function to send messages
//   const sendMessage = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (input) {
//       // Emit the message to the server
//       socket.emit('chat message', input);

//       // Add the sent message to the message array with a timestamp
//       const messageObj = {
//         text: input,
//         isSent: true, // Mark as sent
//         timestamp: new Date(), // Add timestamp
//       };
//       setMessages((prevMessages) => {
//         const newMessages = [...prevMessages, messageObj];
//         newMessages.sort((a, b) => a.timestamp - b.timestamp); // Sort by timestamp
//         return newMessages;
//       });

//       setInput(''); // Clear input field after sending
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <Typography variant="h4" align="center" gutterBottom>
//           Chat Application
//         </Typography>

//         <Box sx={{ mt: 2 }}>
//           <List>
//             {messages.map((msg, index) => (
//               <ListItem
//                 key={index}
//                 sx={{
//                   justifyContent: msg.isSent ? 'flex-end' : 'flex-start',
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     backgroundColor: msg.isSent ? '#3f51b5' : '#e0e0e0',
//                     color: msg.isSent ? 'white' : 'black',
//                     borderRadius: '10px',
//                     padding: '8px',
//                     maxWidth: '70%',
//                   }}
//                 >
//                   {msg.text} {/* Display the text of the message */}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         <Box
//           component="form"
//           onSubmit={sendMessage}
//           sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
//         >
//           <TextField
//             variant="outlined"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             label="Type your message"
//             fullWidth
//           />
//           <Button type="submit" variant="contained" sx={{ ml: 2 }}>
//             Send
//           </Button>
//         </Box>

      
//       </Container>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState, useRef } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { io } from 'socket.io-client';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  Typography,
  Box,
} from '@mui/material';

// Initialize the socket connection
const socket = io('http://localhost:7001');

function App() {
  const [messages, setMessages] = useState([]); // State to hold all messages (sent + received)
  const [input, setInput] = useState(''); // State to hold the input message
  const messagesEndRef = useRef(null); // Reference to the bottom of the messages list

  // Effect to listen for incoming messages from the server
  useEffect(() => {
    // Listen for 'chat message' events from the server
    socket.on('chat message', (msg) => {
      // Add the received message to the message array with a timestamp
      const messageObj = {
        text: msg,
        isSent: false, // Mark as received
        timestamp: new Date(), // Add timestamp
      };
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, messageObj];
        newMessages.sort((a, b) => a.timestamp - b.timestamp); // Sort by timestamp
        return newMessages;
      });
    });

    // Cleanup listener on component unmount
    return () => {
      socket.off('chat message'); // Remove listener to prevent memory leaks
    };
  }, []);

  // Scroll to the bottom whenever the messages array changes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to send messages
  const sendMessage = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (input) {
      // Emit the message to the server
      socket.emit('chat message', input);

      // Add the sent message to the message array with a timestamp
      const messageObj = {
        text: input,
        isSent: true, // Mark as sent
        timestamp: new Date(), // Add timestamp
      };
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, messageObj];
        newMessages.sort((a, b) => a.timestamp - b.timestamp); // Sort by timestamp
        return newMessages;
      });

      setInput(''); // Clear input field after sending
    }
  };

  // Function to scroll to the bottom of the message list
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Chat Application
        </Typography>

        <Box
          sx={{
            flexGrow: 1, // Make the message box take up available space
            overflowY: 'auto', // Allow the message list to scroll
            mb: 2, // Add some margin to keep space above the input
          }}
        >
          <List>
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent: msg.isSent ? 'flex-end' : 'flex-start',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: msg.isSent ? '#3f51b5' : '#e0e0e0',
                    color: msg.isSent ? 'white' : 'black',
                    borderRadius: '10px',
                    padding: '8px',
                    maxWidth: '70%',
                  }}
                >
                  {msg.text} {/* Display the text of the message */}
                </Typography>
              </ListItem>
            ))}
            {/* Dummy div to scroll to */}
            <div ref={messagesEndRef} />
          </List>
        </Box>

        {/* Fixed input form */}
        <Box
          component="form"
          onSubmit={sendMessage}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            borderTop: '1px solid #ccc', // Add a border for better separation
          }}
        >
          <TextField
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            label="Type your message"
            fullWidth
          />
          <Button type="submit" variant="contained" sx={{ ml: 2 }}>
            Send
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
