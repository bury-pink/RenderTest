
export const getHome = async (req, res) => {
    try {
        res.status(200).json('Home Page')
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (req, res) => {
    try {
        const user = {
            username: 'Retard',
            bio: 'I am so awesome'
        }

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}