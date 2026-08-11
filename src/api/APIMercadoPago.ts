import { MercadoPagoConfig, Preference } from "mercadopago";
import type { NextApiRequest, NextApiResponse } from "next";

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN_MP || "APP_USR-5516632550181274-031514-24bc0a3f88352c1f1c2e54e278b1b943-2328782101",
});

const preference = new Preference(client);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { valor } = req.body;

    if (!valor || typeof valor !== "number") {
      return res.status(400).json({ error: "Valor inválido" });
    }

    const response = await preference.create({
      body: {
        items: [
          {
            id: "1",
            title: "Meu produto",
            quantity: 1,
            unit_price: valor,
          },
        ],
        payment_methods: {
          installments: 10,
          default_installments: 1,
        },
      },
    });

    return res.status(200).json({ link: response.init_point });
  } catch (error: any) {
    console.error("Erro ao criar pagamento:", error);
    return res.status(500).json({ error: "Erro interno ao gerar pagamento." });
  }
}