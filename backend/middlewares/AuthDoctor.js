import jwt from 'jsonwebtoken'

// user authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        const {dtoken} = req.headers
        if (!dtoken) {
            return res.json({success: false, message: 'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

        // Check if token decoding works correctly
        console.log("Decoded userId:", token_decode.id);

        req.body.docId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

export default authDoctor