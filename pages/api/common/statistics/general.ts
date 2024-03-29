import { NextApiRequest, NextApiResponse } from "next";
import { StatisticsGeneralResponse } from "@app/types";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { axiosClient } from "@app/lib";

export default withApiAuthRequired(async function handle(
  req: NextApiRequest,
  res: NextApiResponse<StatisticsGeneralResponse>
) {
  const { accessToken } = await getAccessToken(req, res);

  if (accessToken === undefined) {
    return res.status(401).end();
  }

  axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  const response = await axiosClient.get("common/statistics/general/");

  return res.status(200).json(response.data);
});
