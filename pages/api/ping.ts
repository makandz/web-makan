// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  message: string;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status: "OK", message: "pong" });
}