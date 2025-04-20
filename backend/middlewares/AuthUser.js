import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({ success: false, message: 'Authorization header missing or invalid' });
        }

        const token = authHeader.split(' ')[1]; // Get token after 'Bearer'
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if token decoding works correctly
        console.log("Decoded userId:", token_decode.id);

        req.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

export default authUser