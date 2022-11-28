// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const EMAIL_LIST = [
    { email: "test1@example.com" },
    { email: "test2@example.com" },
    { email: "test3@example.com" },
    { email: "test4@example.com" },
    { email: "test5@example.com" },
    { email: "test6@example.com" },
];

const handler = async (req, res) => {
    const { method, query, body } = req;
    const is_exist = EMAIL_LIST.some((r) => r.email === body.email);
    const message = {
        is_exist: is_exist,
    };
    res.status(200).json(message);
};
export default handler;
