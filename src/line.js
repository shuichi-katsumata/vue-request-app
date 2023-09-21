const BASE_URL = 'https://notify-api.line.me';
const PATH =  '/api/notify';
const LINE_TOKEN = `FDic9TvvW5oaLTmnjzUgviTEos08HTZahtXbRVqWnZQ`;

const params = new URLSearchParams({
    message: 'テスト',
});

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${LINE_TOKEN}`
    },
    body: params.toString()
};


const main = async () => {
    const res = await fetch(BASE_URL + PATH, config);
    console.log(res.status);
}
export default{
    main,
}