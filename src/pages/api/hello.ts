import type { NextApiRequest, NextApiResponse } from "next";

const createNewTask = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
  } else res.setHeader("Allow", "POST");
  res.status(405).end("Method not allowed");
};

export default createNewTask;
