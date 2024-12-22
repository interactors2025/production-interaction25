const prisma = require('../utils/prismaClient');

const checkIfUserExists = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

const createUser = async (userData) => {
  // Generate custom ID (4-digit auto-incrementing token)
  const lastUser = await prisma.user.findFirst({
    orderBy: { Token: 'desc' },
  });
  const nextCustomId = lastUser ? (parseInt(lastUser.Token) + 1).toString() : '1000';

  const eventsArray = JSON.parse(userData.Events);

  const { Events, ...dataWithoutEvents } = userData;
  // Save user to the database
  const newUser = await prisma.user.create({
    data: {
      Token: nextCustomId,
      Events: eventsArray,
      ...dataWithoutEvents,
    },
  });

  return newUser;
};

module.exports = { checkIfUserExists, createUser };
