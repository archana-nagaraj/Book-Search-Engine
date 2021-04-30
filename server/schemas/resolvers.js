const { User, Book } = require('../models');
// import the signToken() function
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // check for context.user. 
            if(context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
            
            return userData;
            }
            // If no context.user property exists,  the user isn't authenticated - throw an AuthenticationError.
            throw new AuthenticationError('Not logged in');
          }
    },

    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
    
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('Incorrect credentials');
          }
          
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
          return { token, user };
        }
    }
  };
  
  module.exports = resolvers;