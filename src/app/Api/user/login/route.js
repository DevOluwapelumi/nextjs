// // pages/api/user/login.js
// import { loginUser } from '/src/Model/userModel'; // Importing the loginUser function from the user model

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email, password } = req.body;

//   try {
//     const user = await loginUser(email, password); // Call the loginUser function from the user model
//     // Here you can set up your authentication logic, generate tokens, etc.
//     res.status(200).json({ user });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
