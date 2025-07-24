import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // update to your actual path

export const protectWithUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: 'Not authorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');

        if (!user) return res.status(401).json({ message: 'User not found' });

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
