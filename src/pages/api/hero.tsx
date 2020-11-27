// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json( { method: 'https://dd5070fc-6d5b-4660-90bc-f47c62d45223.mock.pstmn.io/hero_data' })
}
