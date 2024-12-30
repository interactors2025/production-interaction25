

// Secure password hashing function
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const users = [
  {
    id: 1,
    username: 'admin',
    role: 'admin',
    password: 'password', // Admin's password will be hashed later
    events: [], // Admin can access all events
  },
  {
    id: 2,
    username: 'coordinator_NCI8000', // Coordinator for National Conference event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8000'], // Assigned to only NCI8000 event
  },
  {
    id: 3,
    username: 'coordinator_NCI8001', // Coordinator for Brain Battle event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8001'], // Assigned to only NCI8001 event
  },
  {
    id: 4,
    username: 'coordinator_NCI8002', // Coordinator for Media Splash event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8002'], // Assigned to only NCI8002 event
  },
  {
    id: 5,
    username: 'coordinator_NCI8003', // Coordinator for Wisdom War event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8003'], // Assigned to only NCI8003 event
  },
  {
    id: 6,
    username: 'coordinator_NCI8004', // Coordinator for Hack in the Dark event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8004'], // Assigned to only NCI8004 event
  },
  {
    id: 7,
    username: 'coordinator_NCI8005', // Coordinator for Spark the Idea event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8005'], // Assigned to only NCI8005 event
  },
  {
    id: 8,
    username: 'coordinator_NCI8006', // Coordinator for Gold Rush Quest event
    role: 'coordinator',
    password: 'password', // Will be hashed
    events: ['NCI8006'], // Assigned to only NCI8006 event
  },
];

// Hashing the passwords before saving users


module.exports = users;
