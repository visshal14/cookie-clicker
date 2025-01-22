const User = require('../model/userModel');

const getUser = async () => {
    try {
        const user = await User.findOne();
        if (!user) {
            await User.create({ counter: 0, prizesWon: 0 });
            return await User.findOne();
        }
        return user;
    } catch (error) {
        throw error;
    }
};

const updateUser = async () => {
    try {
        const user = await User.findOne();
        user.counter++;

        const random = Math.random();
        if (random < 0.5) {
            user.counter += 10;
        }
        if (random < 0.25) {
            user.prizesWon++;
        }

        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { getUser, updateUser };