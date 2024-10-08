import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiResponse } from "next";
import { Question } from "@app/types";
import { axiosClient } from "@app/lib";

export default withApiAuthRequired(async function handle(
  req,
  res: NextApiResponse<Question[] | Question>
) {
  const { accessToken } = await getAccessToken(req, res);

  if (accessToken === undefined) {
    return res.status(401).end();
  }

  axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  switch (req.method) {
    case "GET": {
      const response = await axiosClient.get(`/cms/question/`, {
        params: {
          relatedGame: req.query.relatedGame,
          page: req.query.page,
          pageSize: req.query.pageSize,
          questionType: req.query.questionType,
          questionSearch: req.query.questionSearch,
          hasDislikes: req.query.hasDislikes,
          dislikesGreaterThan: req.query.dislikesGreaterThan
        }
      });
      return res.status(200).json(response.data);
    }
    case "POST": {
      const response = await axiosClient.post(`/cms/question/`, req.body);
      return res.status(201).json(response.data);
    }
    default: {
      return res.status(405).end();
    }
  }
});
