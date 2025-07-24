import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: 'Not authorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // only attach userId, no DB query
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
