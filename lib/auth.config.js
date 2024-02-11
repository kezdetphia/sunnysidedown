// export const authConfig = {
//   providers: [],
//   callbacks: {
//     async jwt({ token, user }) {
//       console.log("user in jwt callback -start", user);
//       console.log("token in jwt callback -start", token);
//       const existingUser = await User.findOne({ email: token.email });
//       // token.email = existingUser.email;
//       // token.name = existingUser.username;
//       // token.isAdmin = existingUser.isAdmin;
//       // token.id = existingUser._id;
//       token.isAdmin = existingUser.isAdmin;
//       token.userId = existingUser._id;

//       console.log("user in jwt callback -end", user);
//       console.log("token in jwt callback -end", token);
//       return token;
//     },
//     async session({ session, token }) {
//       console.log("token in callback sessuin -start :", token);
//       console.log("session in callback sessuin -start  :", session);

//       // session.user.name = token.name;
//       // session.user.email = token.email;
//       // session.user.isAdmin = token.isAdmin;
//       // session.user.userId = token.id;
//       session.isAdmin = token.isAdmin;
//       session.userId = token.userId;
//       console.log("token in callback sessuin -end :", token);
//       console.log("session in callback sessuin -end:", session);
//       return session;
//     },
//   },
// };
