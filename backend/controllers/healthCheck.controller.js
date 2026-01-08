export const healthCheck = async (req, res) => {
    try {
        return res.status(200).json({
            message: 'Health Check Route Working Properly'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}